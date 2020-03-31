
const Tasks = require("../Models/Tasks");

exports.handleTaskCreation = (req, res) => {

       
    Tasks.create(req.body).then(function (Task) {


        console.log("Task Created.", Task)

        
        res.status(200).json({ status: 'success', NewTask: Task });
    }).catch(function (err) {
        console.log("Something went wrong while creating Task read the error below")
        console.log(err)
        return res.status(500).json({ status: 'faliure', 'err': err });

    })
  }

  exports.getTasksByUserId = (req, res) => {

       
    Tasks.find({userId:req.params.UserId}).then(function (Tasklist) {


        console.log("Task List.", Tasklist)

        
        res.status(200).json({ status: 'success', Tasklist: Tasklist });
    }).catch(function (err) {
        console.log("Something went wrong while creating Task read the error below")
        console.log(err)
        return res.status(500).json({ status: 'faliure', 'err': err });

    })
  }

  