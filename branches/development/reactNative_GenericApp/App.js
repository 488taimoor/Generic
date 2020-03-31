import React, { Component } from "react";
import firebase from 'react-native-firebase';
import { StyleSheet, Platform, Alert } from "react-native";
import { Provider } from "react-redux";
import store from "./Store/store";
import { createRootNavigator } from "./Routes/Routes";
import {
  createAppContainer,
} from "react-navigation";

import realm from "./Components/utils/realm/UserSchema"
import NetInfo from "@react-native-community/netinfo";
import NoInternet from "./Components/utils/NoInternet"
import Snackbar from 'react-native-snackbar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notify: false,
      signedIn: false,
      internet: false,
      modelVisible: false,
      unsubscribe: {}
    }

    this.createNotificationListeners = this.createNotificationListeners.bind(this)
    this.checkPermission = this.checkPermission.bind(this)
    this.handleConnectivityChange = this.handleConnectivityChange.bind(this)
    
  }

  handleConnectivityChange = state => {
    //  console.warn(state.isConnected)
    if (!state.isConnected) {

      Snackbar.show({
        title: 'No Internet Connection',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_INDEFINITE,

      });
      //   console.warn("not internet")
      this.state.internet = true
      this.setState({
        modelVisible: true,
      })
    } else {
      //  console.warn('connected', this.state.internet)


      if (this.state.internet) {

        Snackbar.show({
          title: 'Back online',
          backgroundColor: 'green',
          duration: Snackbar.LENGTH_SHORT,

        });
        this.state.internet = false
      }
      this.setState({
        modelVisible: false,
      })
      if (!realm.objects('NotifyToken')[0]) {

        this.checkPermission();

      }

    }
  }
  componentDidMount() {
    this.createNotificationListeners()
    const unsubscribe = NetInfo.addEventListener(
      this.handleConnectivityChange
    );
    
   
    //this.testLinkedIn()
  }


  showAlert(title, body) {
    console.log("here")
    Alert.alert(
      title, body,
      [
        {
          text: 'OK', onPress: () => {


            NavigationService.navigate('NotifyRoute', {});

          }
        },
      ],
      { cancelable: false },
    );
  }



  async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    // console.warn("createNotificationListeners")
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      const { title, body } = notification;
      const { NotificationID } = notification.data;

      // console.warn("recieve", notification)
      console.log("onNotification")
      if (Platform.OS === 'android') {
        const channel = new firebase.notifications.Android.Channel(
          'all',
          'All Notifications',
          firebase.notifications.Android.Importance.Max
        ).setDescription('All notifications');

        firebase.notifications().android.createChannel(channel);
        notification.android.setChannelId('all')
        //  .android.setSmallIcon('medstack_ic_launchericon') 
        //  .android.setLargeIcon('medstack_ic_launchericon')
      }

      firebase.notifications().displayNotification(notification);
      // this.showAlert(title, body);
    });

    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      console.log("notificationOpenedListener")

      const { title, body } = notificationOpen.notification;
      // this.showAlert(title, body);


    });

    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */

    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      //   console.warn("notificationOpenedListener")
      const { title, body } = notificationOpen.notification;


    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {

      const { title, body } = notification;
      const { NotificationID } = notification.data;
      console.log("on message")
      // const { email } = data;
      this.showAlert(title, body);

    });
  }



  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();

    if (enabled) {
      await this.getToken();


    } else {
      this.requestPermission();
    }
  }

  //3
  async getToken() {

    let NotifyToken = await (realm.objects('NotifyToken')[0])

    if (!NotifyToken) {

      try {
        // if (Platform.OS === 'ios')
        // NavigationService.navigate('LoadingScreen', {});
        var fcmToken = await firebase.messaging().getToken();

        if (fcmToken) {
          console.log("*TOKEN*", fcmToken)
          // user has a device token
          realm.write(() => {
            realm.create('NotifyToken', {
              NotifyToken: fcmToken,
            })
          }
          )
        }

      } catch (error) {


      }

    } else {

    }
  }

  async requestPermission() {
    try {
      //await firebase.messaging().requestPermission();
      await firebase.messaging().requestPermission();
      await this.getToken();

    } catch (error) {
      // User has rejected permissions

      await this.getToken();

    }
  }


  render() {
    const Routes = createAppContainer(createRootNavigator(this.state.notify));

    return (

      <Provider store={store}>
        <NoInternet modalVisible={this.state.modelVisible} />
        <Routes />

      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
