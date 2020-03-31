import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Picker, Icon } from 'native-base';
class InputPicker extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selected2: 'Category'
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
    // console.log('value :', value);
  }
  render() {
    return (
      // <Container>
        // <Header />
        // <Content>
          // <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Category" value="" />
                <Picker.Item label="Wallet" value="Wallet" />
                <Picker.Item label="ATM Card" value="ATM Card" />
                <Picker.Item label="Debit Card" value="Debit Card" />
                <Picker.Item label="Credit Card" value="Credit Card" />
                <Picker.Item label="Net Banking" value="Net Banking" />
              </Picker>
            </Item>
          // </Form>
        // </Content>
      // </Container>
    );
  }
}

export { InputPicker }

// import React, {Component} from 'react';
// import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

// class InputPicker extends Component {
//   state = {
//     modalVisible: false,
//   };

//   setModalVisible(visible) {
//     this.setState({modalVisible: visible});
//   }

//   render() {
//     return (
//       <View style={{marginTop: 22}}>
//         <Modal
//           animationType="fade"
//           transparent={false}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             Alert.alert('Modal has been closed.');
//           }}>
//           <View style={{marginTop: 22, height: 50, position: 'absolute', top: 100,
//         left: 140, backgroundColor: 'gold'}}>
//             <View>
//               <Text>Hello World!</Text>

//               <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}>
//                 <Text>Hide Modal</Text>
//               </TouchableHighlight>
//             </View>
//           </View>
//         </Modal>

//         <TouchableHighlight
//           onPress={() => {
//             this.setModalVisible(true);
//             // Alert.alert('Modal has been closed.');
//           }}>
//           <Text>Show Modal</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// export { InputPicker };

// import React, { Component } from "react";
// import { Modal, Text, TouchableHighlight, View, Alert, Picker } from "react-native";

// class InputPicker extends Component {
//   state = {
//     language: 'category'
//   };

//   render() {
//     return (
//       <Picker
//         selectedValue={this.state.language}
//         style={{ height: 50, width: 100 }}
//         onValueChange={(itemValue, itemIndex) =>
//           this.setState({ language: itemValue })
//         }
//       >
//         <Picker.Item label="Java" value="java" />
//         <Picker.Item label="JavaScript" value="js" />
//       </Picker>
//     );
//   }
// }

// export { InputPicker };
