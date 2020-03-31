import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
  return(
    <View style={styles.viewStyle}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({

  viewStyle: {
  borderBottomWidth: 1,
  marginTop: 14,
  // padding: 5,
  // paddingBottom: 5,
  // backgroundColor: '#fff',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  borderColor: '#707070',
  position: 'relative',
},

});

export { CardSection };