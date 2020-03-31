import React, { Component } from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } } };
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } } };
class GooglePlaces extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialPosition: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0,
                longitudeDelta: 0
            },
        }
    }
    render() {
        console.log('hello')
        return (
            <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
                {/* <GooglePlacesAutocomplete
                    placeholder='Search'
                    minLength={2} // minimum length of text to search
                    autoFocus={false}
                    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                    listViewDisplayed='auto'    // true/false/undefined
                    fetchDetails={true}
                    renderDescription={row => row.description} // custom description render
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        console.log('data :', data, 'details :', details);
                    }}

                    getDefaultValue={() => ''}

                    query={{
                        // available options: https://developers.google.com/places/web-service/autocomplete
                        key: 'AIzaSyAJ3qQgDeaV1a_Q6-bB4kgZm4HnXMgbjfE',
                        language: 'en', // language of the results
                        types: '(cities)' // default: 'geocode'
                    }}

                    styles={{
                        textInputContainer: {
                            width: '100%'
                        },
                        description: {
                            fontWeight: 'bold'
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb'
                        }
                    }}

                    currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                    currentLocationLabel="Current location"
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GoogleReverseGeocodingQuery={{
                        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    }}
                    GooglePlacesSearchQuery={{
                        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                        rankby: 'distance',
                        types: 'food'
                    }}

                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                    predefinedPlaces={[homePlace, workPlace]}

                    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                    renderLeftButton={() => <Text>BTN</Text>}
                    renderRightButton={() => <Text>Custom text after the input</Text>}
                /> */}
                {/* <GooglePlacesAutocomplete
                    placeholder='Search'
                    minLength={2} // minimum length of text to search
                    autoFocus={false}
                    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                    keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                    listViewDisplayed={false}    // true/false/undefined
                    fetchDetails={true}
                    renderDescription={row => row.description} // custom description render
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}

                    getDefaultValue={() => ''}

                    query={{
                        // available options: https://developers.google.com/places/web-service/autocomplete
                        key: 'AIzaSyDTxaRRLvASzHrTZ_Dj_DIV2LRe0f9TNkE',
                        language: 'en', // language of the results
                        types: '(cities)' // default: 'geocode'
                    }}

                    styles={{
                        textInputContainer: {
                            width: '100%'
                        },
                        description: {
                            fontWeight: 'bold'
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb'
                        }
                    }}

                    currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                    currentLocationLabel="Current location"
                    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                    GoogleReverseGeocodingQuery={{
                        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    }}
                    GooglePlacesSearchQuery={{
                        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                        rankby: 'distance',
                        type: 'cafe'
                    }}

                    GooglePlacesDetailsQuery={{
                        // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                        fields: 'formatted_address',
                    }}

                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                    predefinedPlaces={[homePlace, workPlace]}

                    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                    renderLeftButton={() => <Text>BTN</Text>}
                    renderRightButton={() => <Text>Custom text after the input</Text>}
                /> */}
                <View style={{ borderWidth: 2, borderColor: 'green', width: '100%', position: 'relative', height: 60, zIndex: 2 }}>
                    <View style={{ position: 'absolute', flexDirection: 'row', backgroundColor: 'gold', borderWidth: 1, flex: 1 }}>
                        <GooglePlacesAutocomplete
                            placeholder='Search'
                            minLength={2} // minimum length of text to search
                            autoFocus={false}
                            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                            listViewDisplayed='auto' // true/false/undefined
                            fetchDetails={true}
                            renderDescription={row => row.description} // custom description render
                            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                                console.log("myplace1", details.geometry.location)
                                console.log("Data :", data)
                                console.log("Details", details)
                                // var searchRegion = {
                                //     latitude: details.geometry.location.lat,
                                //     longitude: details.geometry.location.lng,
                                //     latitudeDelta: LATITUDE_DELTA,
                                //     longitudeDelta: LONGITUDE_DELTA

                                // }
                                // this.setState({
                                //     initialPosition: searchRegion

                                // })
                            }}

                            getDefaultValue={() => ''}

                            query={{
                                // available options: https://developers.google.com/places/web-service/autocomplete
                                // key: 'AIzaSyAJ3qQgDeaV1a_Q6-bB4kgZm4HnXMgbjfE',
                                key: 'AIzaSyDTxaRRLvASzHrTZ_Dj_DIV2LRe0f9TNkE',
                                language: 'en', // language of the results
                                types: '(cities)' // default: 'geocode'
                            }}

                            styles={{
                                textInputContainer: {
                                    width: '100%'
                                },
                                description: {
                                    fontWeight: 'bold'
                                },
                                predefinedPlacesDescription: {
                                    color: '#1faadb'
                                }
                            }}


                            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                            currentLocation={false}
                            GooglePlacesSearchQuery={{
                                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                                rankby: 'distance',
                                types: 'food'
                            }}
                        />
                    </View>
                </View>
                {/* <GooglePlacesAutocomplete
                placeholder='Search'
                minLength={2} // minimum length of text to search
                autoFocus={false}
                fetchDetails={true}
                styles={{
                    textInputContainer: {
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderTopWidth: 0,
                        borderBottomWidth: 0
                    },
                    textInput: {
                        marginLeft: 0,
                        marginRight: 0,
                        height: 38,
                        color: '#5d5d5d',
                        fontSize: 16
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb'
                    },
                }}
                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                    console.log(data);
                    console.log(details);
                }}
                getDefaultValue={() => {
                    return ''; // text input default value
                }}
                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: 'YOUR API KEY',
                    language: 'en', // language of the results
                    types: '(cities)', // default: 'geocode'
                }}
                styles={{
                    description: {
                        fontWeight: 'bold',
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb',
                    },
                }}

                currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                currentLocationLabel="Current location"
                nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                GoogleReverseGeocodingQuery={{
                    // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                }}
                GooglePlacesSearchQuery={{
                    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                    rankby: 'distance',
                    types: 'food',
                }}
                GooglePlacesDetailsQuery={{
                    // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                    fields: 'formatted_address',
                }}

                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

                predefinedPlaces={[homePlace, workPlace]}

                predefinedPlacesAlwaysVisible={true}
            /> */}
            </SafeAreaView>
        );
    }
}

export default GooglePlaces