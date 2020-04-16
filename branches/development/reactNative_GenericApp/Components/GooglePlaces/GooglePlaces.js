import React, { Component, Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Modal
} from "react-native";
// import InputSearch from './InputSearch';
import InputSearch from "./InputSearch";
import { FilterServer } from "./FilterServer";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontSize from "./FontSize";
import Colors from "./Colors";
export default class GooglePlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      list: [],
      modalVisible: false,
      NearYouLocation: {},
      selectedValue: "Choose Location",
      selectedId: null,
      key: 'AIzaSyDTxaRRLvASzHrTZ_Dj_DIV2LRe0f9TNkE'
    };
    this.setListofPlaces = this.setListofPlaces.bind(this);
  }

  UNSAFE_componentWillMount() {
    if (
      JSON.stringify(this.props.NearYouLocation) !==
      JSON.stringify(this.state.NearYouLocation)
    ) {
      if (this.props.NearYouLocation) {
        if (this.props.NearYouLocation != this.state.NearYouLocation) {
          const searchText =
            this.props.NearYouLocation.city +
            ", " +
            this.props.NearYouLocation.country;
          (this.state.NearYouLocation = this.props.NearYouLocation),
            (this.state.searchText = searchText),
            (this.state.selectedValue = searchText);
        }
      }
    }
  }
  modalHandler = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  selectedValueHandler = (selectedValue, selectedId, item) => {
    console.log('this is item', item)
    fetch("https://maps.googleapis.com/maps/api/place/details/json?placeid=" + selectedId + "&key=" + this.state.key)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('this is response', responseJson)

        this.setState({ selectedValue, selectedId });
        // alert(selectedId)
        var data = {
          input: selectedId,
          modalHandler: this.modalHandler,
          selectedValue:selectedValue,
          lat:responseJson.result.geometry.location.lat,
          lng:responseJson.result.geometry.location.lng
        };
        this.props.SearchYourLocation(data);
        this.modalHandler();
        this.clearHandler();

      }).catch(err => {
        console.log('this is err', err)
      })
   
  };
  searchHandler = searchText => {
    var data = {
      input: searchText,
      setListofPlaces: this.setListofPlaces
    };
    FilterServer.AutoCompletePlace(data);
    this.setState({ searchText });
  };
  setListofPlaces(places) {
    this.setState({
      list: places
    });
  }
  clearHandler = () => {
    this.setState({
      searchText: "",
      list: []
    });
  };
  render() {
    const { selectedValue, modalVisible, selectedId, searchText } = this.state;
    // ! Destructure styles...
    const {
      containerStyle,
      inputContainerStyle1,
      filedContainerStyle,
      textStyle,
      btnContainerStyle,
      btnTextStyle,
      modalContainerStyle,
      boxContainerStyle,
      closeTextStyle,
      closeTextTouchStyle
    } = styles;
    // !

    return (
      <Fragment>
        <SafeAreaView>
          <TouchableOpacity
            style={[btnContainerStyle,{height: 48,
              fontSize: 15,
              paddingHorizontal: 8,
              color: 'black',
              backgroundColor: '#ced1d6',
              borderRadius: 10}]}
            onPress={this.modalHandler}
          >
            {/* <Icon name="room" size={20} color="#909090" /> */}
            <Text style={[FontSize.cardFontSize, btnTextStyle]}>
              {selectedValue.length > 45
                ? selectedValue.substring(0, 45) + "..."
                : selectedValue}
            </Text>
            {/* <Icon name="keyboard-arrow-down" size={26} color="#000" /> */}
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              this.modalHandler();
            }}
          >
            <View style={modalContainerStyle}>
              <SafeAreaView style={boxContainerStyle}>
                <View style={containerStyle}>
                  <TouchableOpacity
                    style={closeTextTouchStyle}
                    onPress={this.modalHandler}
                  >
                    <Text style={closeTextStyle}>Cancel</Text>
                  </TouchableOpacity>
                  <InputSearch
                    placeholder="Search"
                    iconName="search"
                    iconSize={18}
                    iconColor="#707070"
                    placeholderTextColor="#707070"
                    inputTextColor="#000"
                    autoFocus={true}
                    inputValue={searchText}
                    inputContainerStyle={inputContainerStyle1}
                    onChange={this.searchHandler}
                    onPress={this.clearHandler}
                  />
                  <Text
                    style={{
                      color: "red",
                      marginTop: 20,
                      display: this.state.searchText === "" ? "flex" : "none"
                    }}
                  >
                    Please Enter Location
                  </Text>

                  <FlatList
                    style={{ marginTop: 20 }}
                    data={this.state.list}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={filedContainerStyle}
                        onPress={() =>
                          this.selectedValueHandler(
                            item.description,
                            item.place_id,
                            item
                          )
                        }
                      >
                        <Text
                          style={[
                            textStyle,
                            {
                              color:
                                item.id === selectedId ? "#2C4BFC" : "#909090"
                            }
                          ]}
                        >
                          {item.description}
                        </Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                  />
                </View>
              </SafeAreaView>
            </View>
          </Modal>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  btnContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    padding: 16,
    flexDirection: "row",
    borderRadius: 5
  },
  btnTextStyle: {
    // fontFamily: Fonts.EncodeSansRegular,
    // fontSize: 18,
    color: Colors.primaryColor,
    // marginLeft: 16,
    flex: 1
  },
  modalContainerStyle: {
    // padding: 20,
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)"
    // justifyContent: "center",
    // alignItems: 'center'
  },
  containerStyle: {
    flex: 1,
    padding: 20
  },
  inputContainerStyle1: {
    ...Platform.select({
      ios: {
        paddingVertical: 10
      },
      android: {
        paddingVertical: 5
      }
    }),
    borderBottomWidth: 0,
    paddingHorizontal: 10,
    // paddingVertical: 10,
    borderRadius: 5,
    // marginHorizontal: 20,
    backgroundColor: "rgba(142, 142, 147, 0.1)"
  },
  filedContainerStyle: {
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    marginTop: 16,
    borderColor: "#909090"
  },
  textStyle: {
    // fontFamily: Fonts.EncodeSansRegular,
    fontSize: 16,
    color: "#000"
  },
  boxContainerStyle: {
    // borderWidth: 1,
    flex: 1,
    width: "100%",
    backgroundColor: "white"
  },
  closeTextTouchStyle: {
    marginVertical: 16,
    alignSelf: "flex-end"
  },
  closeTextStyle: {
    color: "#007AFF",
    // fontFamily: Fonts.EncodeSansRegular,
    fontSize: 16
  }
});
