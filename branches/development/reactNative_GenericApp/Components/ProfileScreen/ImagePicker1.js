import React, { Fragment } from 'react';
import {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class ImagePicker1 extends React.Component {
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

    const { container, avatarContainer, avatar, iconContainerStyle } = styles;
    return (
      <View style={container}>
        <TouchableOpacity onPress={this.selectPhotoTapped}>
          <View
            style={[avatarContainer]}>
            {this.state.avatarSource === null ? (
              <Fragment>
                <Text>Select a Photo</Text>
                {/* <View style={iconContainerStyle}>
                  <Icon name="camera-alt" size={20} color="white" />
                </View> */}
              </Fragment>
            ) : (
                <Fragment>
                  <Image style={avatar} source={this.state.avatarSource} />
                  <View style={iconContainerStyle}>
                    <Icon name="camera-alt" size={20} color="white" />
                  </View>
                </Fragment>
              )}
          </View>
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
    paddingTop: 40,
  },
  avatarContainer: {
    position: 'relative',
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
    width: 150,
    height: 150,
    // overflow: 'hidden',
  },
  avatar: {
    borderRadius: 75,
    width: '100%',
    height: '100%',
  },
  iconContainerStyle: {
    position: 'absolute',
    right: '8%',
    bottom: 0,
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 100,
  }
});