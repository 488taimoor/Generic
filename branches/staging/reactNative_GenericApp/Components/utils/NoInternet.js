import * as React from 'react';

import { View, Text, StyleSheet, Modal } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-vector-icons/MaterialIcons";
import { Fonts } from "./Fonts";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class NoInternet extends React.Component {
  constructor(props) {
    super(props);
   
    
  }

  render() {
    return (
      <View style={{position: 'absolute'}}>
       <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
      >
          <View style={{ position: 'relative', width: wp('100%'),height:hp('100%'), alignItems: 'center', justifyContent: 'center',backgroundColor: 'white' }}>
          <Icon name="sentiment-very-dissatisfied" color='#FF2C00' size={60} />
        <Text style={{ color: "#FF2C00", textAlign: 'center', fontFamily: Fonts.EncodeSansMedium, fontSize: 14, marginTop: hp('3%'), }}>
          No Internet Connection.{'\n'}
        </Text>

        <Text style={{ color: "#000", fontFamily: Fonts.EncodeSansSemiBold, fontSize: 14, textAlign: 'center', marginTop: hp('3%') }}>
          Check your connection.
        </Text>
  
        </View>
        </Modal>

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    // marginTop: hp('6%'),
    // padding: 5,
    // paddingBottom: 5,
    // backgroundColor: '#fff',
    // justifyContent: "flex-start",
    // flexDirection: "row",
    width: wp('70%'),
    // position: "relative",
    height: 50,
    marginTop: hp('30%')
  },
});