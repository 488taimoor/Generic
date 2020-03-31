import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
  return(
    <View style={styles.viewStyle}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: '#ddd',
    // borderBottomWidth: 0,
    elevation: 2,
    width: 270,
    // marginLeft: 20,
    // marginRight: 20,
    marginTop: 10,
  }
});

export { Card };