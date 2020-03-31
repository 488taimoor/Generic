
const firebaseInitializeApp = require("../Config/firebaseInitailizeApp");
const User = require("../Models/User")
const UserLogin = require("../Models/UserLogin")
const UserNotificaion = require("../Models/UserNotificaion")


exports.PushNotification = PushNotification = function (apptoken, notification) {
  // var registrationToken = apptoken
  var registrationToken = [];
  registrationToken = apptoken.map(token => {
    return token.appToken
  })
  registrationToken = Array.from(new Set(registrationToken))
  console.log('multiple tokens', registrationToken)
  const id = notification._id.toString()

  var message = {
    notification: {
      title: notification.title,
      body: notification.body

    },
    data: {
      NotificationID: id
    },

    // token: registrationToken
  };
  // admin.messaging().sendToDevice
  console.log(firebaseInitializeApp)
  // firebaseInitializeApp.Admin.messaging().send(message)
  if (registrationToken.length > 0) {
    firebaseInitializeApp.Admin.messaging().sendToDevice(registrationToken, message)
      .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response.results);
      })
      .catch((error) => {
        console.log('Error sending message:', error);
      });
  }
}

exports.isNotificationAllowed = (req, res, next) => {

  User.findOne({ _id: req.body.UserId, allowNotification: true }, (err, doc) => {
    if (doc) {
      console.log("user:", doc)
      var notification =
      {
        UserId: doc._id,
        title: "send notification",
        body: "new notification",
        data: { UserId: doc._id },
        type: "UserDetail"//Page routing on notification click in app on tickets detail,page
      }
      req.body = { "data": doc, notification: notification, "statusName": 'status', "dataName": 'User' }
        next()
    } else {
      console.log("doc", doc)
      console.log("error:", err)

      res.json({ status: "failure", message: "internal server error" })
    }
  })

}

exports.isNotificationAllowedByMultiUsers = (req, res, next) => {
  User.find({ _id: { "$ne": req.body.UserId }, allowNotification: true }, (err, doc) => {
    if (doc) {
      if(doc.length >0)
     { var notifications = []
      var userIds = []
      doc.forEach(function myFunction(item, index) {
        userIds[index] = item._id
        notifications[index] = {
          UserId: item._id,
          title: "send notification",
          body: "new notification",
          data: { UserId: item._id },
          type: "UserDetail"//Page routing on notification click in app on tickets detail,page
        }

      }
      )
      req.body = { "data": doc, notifications: notifications, "statusName": 'status', "dataName": 'User', userIds: userIds }
      next()
    }else{
      res.json({ status: "failure", message: "No users found to send notificaton" })
    }

    } else {
      console.log("doc", doc)
      console.log("error:", err)

      res.json({ status: "failure", message: "internal server error" })
    }
  })

}

exports.createMultipleNotificationsByUser = (req, res, next) => {
  UserNotificaion.create(req.body.notifications).then(async function (notifications, err) {
    console.log("Fetching all Notifications from database.")
    if (err) {
      console.log("ERROR in database......");
      res.status(500).send({ [req.statusName]: 'failure', 'error': err });
    }
    else {
      await UserLogin.find({ userId: req.body.userIds }).exec(async function (err, UserLogin) {
        if (!err) {

          if (UserLogin.length > 0) {
            await PushNotification(UserLogin, notifications[0])
          }

          res.status(200).json({ [req.body.statusName]: 'success', [req.body.dataName]: req.body.data });



        }
        else {
          return res.status(500).json({ [req.statusName]: 'faliure', 'err': err });

        }
      })

    }
  })
}

exports.createNotificationByUser = (req, res, next) => {
  UserNotificaion.create(req.body.notification).then(async function (notification, err) {
    console.log("Fetching all Notifications from database.")
    if (err) {
      console.log("ERROR in database......");
      res.status(500).send({ [req.statusName]: 'failure', 'error': err });
    }
    else {
      await UserLogin.find({ userId: req.body.notification.data.UserId }).populate("User").exec(async function (err, UserLogin) {
        if (err) {
          console.log(err)
          return res.status(500).json({ [req.statusName]: 'faliure', 'err': err });
        }
        else if (UserLogin) {

          console.log("here login2", UserLogin)
          if (UserLogin.length > 0) {

            await PushNotification(UserLogin, notification)
          }

          res.status(200).json({ [req.body.statusName]: 'success', [req.body.dataName]: req.body.data });

        } else {
          return res.status(500).json({ [req.statusName]: 'faliure', 'err': err });
        }
      })

    }
  }
  ).catch(function (err) {
    console.log("Something went wrong while creating Notification read the error below")
    console.log(err)
    return res.status(500).json({ [req.statusName]: 'faliure', 'err': err });

  })
}