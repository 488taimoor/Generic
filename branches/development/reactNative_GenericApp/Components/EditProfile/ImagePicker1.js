import React, { Component, Fragment } from 'react';
import {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Fonts} from '../utils/Fonts';
export default class ImagePicker1 extends Component {
  state = {
    avatarSource: null,
  };

  constructor(props) {
    super(props);

  }

  selectPhotoTapped = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
      allowsEditing: true,
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  render() {

    const { container, avatarContainer, avatar,textStyle1 } = styles;
    return (
      <View style={container}>
        <View style={[avatarContainer]}>
          {this.state.avatarSource === null ? (
            <Fragment>
              <Text style={{ fontSize: 12 }}>Select a Photo</Text>
            </Fragment>
          ) : (
              <Image style={avatar} source={this.state.avatarSource} />
            )}
        </View>
        <TouchableOpacity style={{marginTop:8}} onPress={this.selectPhotoTapped}>
          <Text style={textStyle1}>Change</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    // backgroundColor: 'gold',
    marginTop:32,
    marginBottom:16,
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 100,
    height: 100,
    // overflow: 'hidden',
  },
  avatar: {
    borderRadius: 100,
    width: '100%',
    height: '100%',
  },
  textStyle1:{
    color:'#007AFF',
    fontFamily: Fonts.EncodeSansMedium,
    fontSize:12,
  }
});