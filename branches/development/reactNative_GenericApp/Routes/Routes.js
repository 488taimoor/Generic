import React, { Component } from 'react';

import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
} from "react-navigation";

import Signup from "../Screens/Signup";
import Login from "../Screens/Login";
import Authentication from "../Screens/Authentication/Authentication"
import ForgotPassword from "../Screens/ForgotPassword";
import ResetCode from "../Screens/ResetCode";
import ResetPassword from "../Screens/ResetPassword";
import SocialRedirect from "../Components/SocialRedirect/SocialRedirectContainer"
import Dashboard from "../Screens/TaskListScreen";
import ModalExample from '../Components/utils/ModalExample';
import ProfileScreen from '../Components/Profile/ProfileScreen';
import ImagePickerProject from '../Components/ProfileScreen/ImagePickerProject';
import ImagePicker1 from '../Components/ProfileScreen/ImagePicker1';
import SocialButton from '../Components/utils/SocialButton';
import NotificationScreen from '../Components/Notifications/NotificationScreen';
import CardNormal from '../Components/Cards/CardNormal';
import CardHosting from '../Components/Cards/CardHosting';
import CardGoing from '../Components/Cards/CardGoing';
import Drawer from "../Components/utils/Drawer"
import EditProfile from '../Components/EditProfile/EditProfile';
import SignInScreen from '../Components/SignIn/SignIn';
import Events from '../Components/Events/Events'
import Alumni from '../Components/Alumni/Alumni'
import AlumniProfile from '../Components/AlumniProfile/AlumniProfile'
import AlumniYearFilter from '../Components/AlumniYearFilter/AlumniYearFilter'
import DateTime from '../Components/DateTImePicker/DateTime'
import GooglePlaces from '../Components/GooglePlaces/GooglePlaces'
import SolarInverterCard from '../Components/Cards/SolarInverterCard'
import SolarSiteCard from '../Components/Cards/SolarSiteCard'
import Tip from '../Components/Charts/Tip'
import Calendar from '../Components/Charts/Calendar'
import FusionChart from '../Components/Charts/FusionChart'
import FusionLineChart from '../Components/Charts/FusionLineChart'
import MultipleSeriesTimeChart from '../Components/Charts/MultipleSeriesTimeChart/MultipleSeriesTimeChart'
import SolorLogin from '../Components/SolarApp/SolorLogin/SolorLogin'
import SolarHome from '../Components/SolarApp/SolarHome/SolarHome'
import SolarSiteInfo from '../Components/SolarApp/SolarSiteInfo/SolarSiteInfo'
import SolarSiteInvertorInfo from '../Components/SolarApp/SolarSiteInvertorInfo/SolarSiteInvertorInfo'
const SignUp = createStackNavigator({  //Routes  when user is not logged in to the system

  Signup: {
    screen: SolarSiteInfo,
    navigationOptions: { header: null }
  },
  Login: {
    screen: Login,
    navigationOptions: { header: null }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: { header: null }
  },
  ResetCode: {
    screen: ResetCode,
    navigationOptions: { header: null }
  },
  ResetPassword: {
    screen: ResetPassword,
    navigationOptions: { header: null }
  },
  SocialRedirect: {
    screen: SocialRedirect,
    navigationOptions: { header: null }
  },
},
  {
    initialRouteName: "Signup"
  }
)


const DrawerNavigator = createDrawerNavigator({
  Dashboard: {

    screen: Dashboard,

  }

},
  {
    drawerWidth: 250,
    contentComponent: Drawer,
    initialRouteName: "Dashboard"
  }

)
const SignIn = createStackNavigator({  // Routes after user has logged in to the system

  Dashboard:
  {
    screen: DrawerNavigator,
    navigationOptions: { header: null }
  },

},
  {
    initialRouteName: "Dashboard"
  }
)
export const createRootNavigator = (notify) => {

  return createSwitchNavigator(
    {
      SignedIn: SignIn, // this is the route after successfull login
      SignedOut: SignUp,  // this is the route when user has not logged in or he has logged out of the system
      Authentication: {
        screen: props => <Authentication notify={notify} SignedIn={"SignedIn"} SignedOut={"SignedOut"}  {...props} /> ///use SignedIn props to navigate user after he has logged in. 
        // And use SignedOut props to navigate user logout
      },
    },
    {
      initialRouteName: 'Authentication',
    }
  )
}
