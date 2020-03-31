// import React, { Component } from "react";
// import { AppRegistry, StyleSheet, Text, View, Platform } from "react-native";
// import FusionCharts from "react-native-fusioncharts";

// export default class App extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             type:'line',
//             width: '100%',
//             height: '100%',
//             dataFormat: 'json',
//             dataSource: {
//                 chart: {
//                     caption: "Average Fastball Velocity",
//                     yaxisname: "Velocity (in mph)",
//                     subcaption: "[2005-2016]",
//                     numbersuffix: " mph",
//                     rotatelabels: "1",
//                     setadaptiveymin: "1",
//                     theme: "fint"
//                 },
//                 data: [
//                     {
//                         label: "2005",
//                         value: "89.45"
//                     },
//                     {
//                         label: "2006",
//                         value: "89.87"
//                     },
//                     {
//                         label: "2007",
//                         value: "89.64"
//                     },
//                     {
//                         label: "2008",
//                         value: "90.13"
//                     },
//                     {
//                         label: "2009",
//                         value: "90.67"
//                     },
//                     {
//                         label: "2010",
//                         value: "90.54"
//                     },
//                     {
//                         label: "2011",
//                         value: "90.75"
//                     },
//                     {
//                         label: "2012",
//                         value: "90.8"
//                     },
//                     {
//                         label: "2013",
//                         value: "91.16"
//                     },
//                     {
//                         label: "2014",
//                         value: "91.37"
//                     },
//                     {
//                         label: "2015",
//                         value: "91.66"
//                     },
//                     {
//                         label: "2016",
//                         value: "91.8"
//                     }
//                 ]
//             }
//         };

//         this.libraryPath = Platform.select({
//             // Specify fusioncharts.html file location
//             ios: require("../../assets/fusioncharts.html"),
//             android: { uri: "file:///android_asset/fusioncharts.html" }
//         });
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.heading}>
//                     FusionCharts Integration with React Native
//         </Text>
//                 <View style={styles.chartContainer}>
//                     <FusionCharts
//                         type={this.state.type}
//                         width={this.state.width}
//                         height={this.state.height}
//                         dataFormat={this.state.dataFormat}
//                         dataSource={this.state.dataSource}
//                         libraryPath={this.libraryPath} // set the libraryPath property
//                     />
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 10
//     },
//     heading: {
//         fontSize: 20,
//         textAlign: "center",
//         marginBottom: 10
//     },
//     chartContainer: {
//         height: 400
//     }
// });

//.........................................................................

// import React, { Component } from "react";
// import { AppRegistry, StyleSheet, Text, View, Platform } from "react-native";
// import FusionCharts from "react-native-fusioncharts";

// const dataSource = {

// };

// export default class App extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             type: 'spline',
//             width: '100%',
//             height: '100%',
//             dataFormat: 'json',
//             dataSource: {
//                 chart: {
//                     caption: "Average Monthly Temperature in Texas",
//                     yaxisname: "Average Monthly Temperature",
//                     anchorradius: "5",
//                     plottooltext: "Average temperature in $label is <b>$dataValue</b>",
//                     showhovereffect: "1",
//                     showvalues: "0",
//                     numbersuffix: "°C",
//                     theme: "fusion",
//                     anchorbgcolor: "#72D7B2",
//                     palettecolors: "#72D7B2"
//                 },
//                 data: [
//                     {
//                         label: "Jan",
//                         value: "1"
//                     },
//                     {
//                         label: "Feb",
//                         value: "5"
//                     },
//                     {
//                         label: "Mar",
//                         value: "10"
//                     },
//                     {
//                         label: "Apr",
//                         value: "12"
//                     },
//                     {
//                         label: "May",
//                         value: "14"
//                     },
//                     {
//                         label: "Jun",
//                         value: "16"
//                     },
//                     {
//                         label: "Jul",
//                         value: "20"
//                     },
//                     {
//                         label: "Aug",
//                         value: "22"
//                     },
//                     {
//                         label: "Sep",
//                         value: "20"
//                     },
//                     {
//                         label: "Oct",
//                         value: "16"
//                     },
//                     {
//                         label: "Nov",
//                         value: "7"
//                     },
//                     {
//                         label: "Dec",
//                         value: "2"
//                     }
//                 ]
//             }
//         };

//     this.libraryPath = Platform.select({
//         // Specify fusioncharts.html file location
//         ios: require("../../assets/fusioncharts.html"),
//         android: { uri: "file:///android_asset/fusioncharts.html" }
//     });
//   }

// render() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.heading}>
//                 FusionCharts Integration with React Native
//         </Text>
//             <View style={styles.chartContainer}>
//                 <FusionCharts
//                     type={this.state.type}
//                     width={this.state.width}
//                     height={this.state.height}
//                     dataFormat={this.state.dataFormat}
//                     dataSource={this.state.dataSource}
//                     libraryPath={this.libraryPath} // set the libraryPath property
//                 />
//             </View>
//         </View>
//     );
// }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 10
//     },
//     heading: {
//         fontSize: 20,
//         textAlign: "center",
//         marginBottom: 10
//     },
//     chartContainer: {
//         height: 400
//     }
// });

//...........................................................................................

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Platform } from "react-native";
import FusionCharts from "react-native-fusioncharts";



export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 'msspline',
            width: '100%',
            height: '100%',
            dataFormat: 'json',
            dataSource: {
                chart: {
                    caption: "Support Tickets : Received vs Resolved",
                    yaxisname: "# of Tickets",
                    subcaption: "Last week",
                    numdivlines: "3",
                    showvalues: "0",
                    legenditemfontsize: "15",
                    legenditemfontbold: "1",
                    plottooltext: "<b>$dataValue</b> Tickets $seriesName on $label",
                    theme: "gammel"
                },
                categories: [
                    {
                        category: [
                            {
                                label: "Jan 1"
                            },
                            {
                                label: "Jan 2"
                            },
                            {
                                label: "Jan 3"
                            },
                            {
                                label: "Jan 4"
                            },
                            {
                                label: "Jan 5"
                            },
                            {
                                label: "Jan 6"
                            },
                            {
                                label: "Jan 7"
                            },
                            {
                                label: "Jan 8"
                            }
                        ]
                    }
                ],
                dataset: [
                    {
                        seriesname: "Received",
                        color: "#FF964B",
                        data: [
                            {
                                value: "55"
                            },
                            {
                                value: "45"
                            },
                            {
                                value: "52"
                            },
                            {
                                value: "29"
                            },
                            {
                                value: "48"
                            },
                            {
                                value: "28"
                            },
                            {
                                value: "32"
                            }
                        ]
                    },
                    {
                        seriesname: "Resolved",
                        color: '#0087FF',
                        data: [
                            {
                                value: "50"
                            },
                            {
                                value: "30"
                            },
                            {
                                value: "49"
                            },
                            {
                                value: "22"
                            },
                            {
                                value: "43"
                            },
                            {
                                value: "14"
                            },
                            {
                                value: "31"
                            }
                        ]
                    }
                ]
            }
        };

        this.libraryPath = Platform.select({
            // Specify fusioncharts.html file location
            ios: require("../../assets/fusioncharts.html"),
            android: { uri: "file:///android_asset/fusioncharts.html" }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    FusionCharts Integration with React Native
        </Text>
                <View style={styles.chartContainer}>
                    <FusionCharts
                        type={this.state.type}
                        width={this.state.width}
                        height={this.state.height}
                        dataFormat={this.state.dataFormat}
                        dataSource={this.state.dataSource}
                        libraryPath={this.libraryPath} // set the libraryPath property
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    heading: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10
    },
    chartContainer: {
        height: 400
    }
});

