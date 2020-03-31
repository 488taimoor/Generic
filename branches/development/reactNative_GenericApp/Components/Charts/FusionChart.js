// import React, { Component } from 'react';
// import { StyleSheet, Text, View, Platform } from 'react-native';
// import FusionCharts from 'react-native-fusioncharts';

// export default class FusionChart extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       type: 'column2d',
//       width: '100%',
//       height: '100%',
//       dataFormat: 'json',
//       dataSource: {
//         chart: {
//           caption: "Harry's SuperMart",
//           subCaption: 'Top 5 stores in last month by revenue',
//           numberprefix: '$',
//           theme: 'fint'
//         },
//         data: [
//           { label: 'Bakersfield Central', value: '880000' },
//           { label: 'Garden Groove harbour', value: '730000' },
//           { label: 'Los Angeles Topanga', value: '590000' },
//           { label: 'Compton-Rancho Dom', value: '520000' },
//           { label: 'Daly City Serramonte', value: '330000' }
//         ]
//       }
//     };

//     this.libraryPath = Platform.select({
//       // Specify fusioncharts.html file location
//       ios: require('../../assets/fusioncharts.html'),
//       // ios: require('./assets/fusioncharts.html'),
//       android: { uri: 'file:///android_asset/fusioncharts.html' }
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.heading}>
//           FusionCharts Integration with React Native
//         </Text>
//         <View style={styles.chartContainer}>
//           <FusionCharts
//             type={this.state.type}
//             width={this.state.width}
//             height={this.state.height}
//             dataFormat={this.state.dataFormat}
//             dataSource={this.state.dataSource}
//             libraryPath={this.libraryPath} // set the libraryPath property
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10
//   },
//   heading: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginBottom: 10
//   },
//   chartContainer: {
//     height: 200
//   }
// });

//.........................................................................

// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, Button, Alert } from 'react-native';
// import FusionCharts from 'react-native-fusioncharts';

// export default class ChartRunTime extends Component {
//   constructor(props) {
//     super(props);
//     this.apiCaller = null;
//     this.state = {
//       type: 'column2d',
//       width: '100%',
//       height: '400',
//       dataFormat: 'json',
//       chartType: '',
//       dataSource: {
//         // Chart Configuration 
//         "chart": {
//           "caption": "Countries With Most Oil Reserves [2017-18]",
//           "subCaption": "In MMbbl = One Million barrels",
//           "xAxisName": "Country",
//           "yAxisName": "Reserves (MMbbl)",
//           "numberSuffix": "K",
//           "theme": "fusion",
//         },
//         // Chart Data

//         data: [
//           {
//             "label": "Venezuela",
//             "value": "290"
//           },
//           {
//             "label": "Saudi",
//             "value": "260"
//           },
//           {
//             "label": "Canada",
//             "value": "180"
//           },
//           {
//             "label": "Iran",
//             "value": "140"
//           },
//           {
//             "label": "Russia",
//             "value": "115"
//           },
//           {
//             "label": "UAE",
//             "value": "100"
//           },
//           {
//             "label": "US",
//             "value": "30"
//           },
//           {
//             "label": "China",
//             "value": "30"
//           }
//         ]
//       }
//     }
//     this.libraryPath = Platform.select({
//       // Specify fusioncharts.html file location
//       android: { uri: 'file:///android_asset/fusioncharts.html' },
//       ios: require('../../assets/fusioncharts.html')
//     })
//   }
//   changeType(type) {
//     this.setState({ chartType: type }, () => {
//       this.apiCaller(`window.chartObj.chartType('${type}')`);
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.header}>Change chart type at runtime</Text>
//         <View style={styles.chartContainer}>
//           <FusionCharts
//             type={this.state.type}
//             width={this.state.width}
//             height={this.state.height}
//             dataFormat={this.state.dataFormat}
//             dataSource={this.state.dataSource}
//             libraryPath={this.libraryPath} // set the libraryPath property
//             onInitialized={caller => {
//               this.apiCaller = caller;
//               if (this.state.chartType === '')
//                 this.setState({ chartType: this.state.type });
//             }}
//           />
//         </View>
//         <Text style={styles.info}>Press button to change chart type</Text>
//         <View style={styles.buttonContainer}>
//           <Button
//             disabled={
//               this.state.chartType === '' || this.state.chartType == 'column2d'
//             }
//             style={{ margin: 8 }}
//             title="Column2D"
//             onPress={() => this.changeType('column2d')}
//           />
//           <Button
//             disabled={
//               this.state.chartType === '' || this.state.chartType == 'pie2d'
//             }
//             title="Pie2D"
//             onPress={() => this.changeType('pie2d')}
//           />
//           <Button
//             disabled={
//               this.state.chartType === '' || this.state.chartType == 'bar2d'
//             }
//             title="Bar2D"
//             onPress={() => this.changeType('bar2d')}
//           />
//         </View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10
//   },
//   header: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     textAlign: 'center',
//     paddingBottom: 10
//   },
//   chartContainer: {
//     height: 400,
//     borderColor: '#000',
//     borderWidth: 1
//   },
//   buttonContainer: {
//     padding: 10,
//     display: 'flex',
//     justifyContent: 'space-around',
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   info: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginTop: 5
//   }
// });

// ...........................................................................

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import FusionCharts from 'react-native-fusioncharts';
import { Fonts } from '../utils/Fonts';
import { monthData, dayData, yearData } from './FusionChartData';
export default class ChartRunTime extends Component {
  constructor(props) {
    super(props);
    this.apiCaller = null;
    this.state = {
      type: 'msspline',
      width: '100%',
      height: '400',
      dataFormat: 'json',
      chartType: '',
      dataSource: dayData,
      yieldText: "Day's Yield",
      monthFlag: false,
      yearFlag: false,
    }
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: { uri: 'file:///android_asset/fusioncharts.html' },
      ios: require('../../assets/fusioncharts.html')
    })
  }
  dayHandler(type) {
    this.setState({ chartType: type, dataSource: dayData, yieldText: "Day's Yield" }, () => {
      this.apiCaller(`window.chartObj.chartType('${type}')`);
    });
  }
  monthHandler(type) {
    this.setState({ chartType: type, dataSource: monthData, yieldText: "Month's Yield", monthFlag: true, yearFlag: false }, () => {
      this.apiCaller(`window.chartObj.chartType('${type}')`);
    });
  }
  yearHandler(type) {
    this.setState({ chartType: type, dataSource: yearData, yieldText: "Year's Yield", monthFlag: false, yearFlag: true }, () => {
      this.apiCaller(`window.chartObj.chartType('${type}')`);
    });
  }

  render() {
    const { filterBtnContainerStyle, filterBtnStyle, filterBtnTextStyle, yieldTextStyle } = styles
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.chartContainer}>
          <View style={filterBtnContainerStyle}>
            <TouchableOpacity onPress={() => this.dayHandler('msspline')} style={[filterBtnStyle, { backgroundColor: this.state.chartType !== '' && this.state.chartType == 'msspline' ? '#00D050' : '#EDEDED' }]}>
              <Text style={[filterBtnTextStyle, { color: this.state.chartType !== '' && this.state.chartType == 'msspline' ? '#fff' : '#B4B4B4' }]}>Day</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.monthHandler('mscolumn2d')} style={[filterBtnStyle, { backgroundColor: this.state.chartType !== '' && this.state.chartType == 'mscolumn2d' && this.state.monthFlag ? '#00D050' : '#EDEDED' }]}>
              <Text style={[filterBtnTextStyle, { color: this.state.chartType !== '' && this.state.chartType == 'mscolumn2d' && this.state.monthFlag ? '#fff' : '#B4B4B4' }]}>Month</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.yearHandler('mscolumn2d')} style={[filterBtnStyle, { backgroundColor: this.state.chartType !== '' && this.state.chartType == 'mscolumn2d' && this.state.yearFlag ? '#00D050' : '#EDEDED' }]}>
              <Text style={[filterBtnTextStyle, { color: this.state.chartType !== '' && this.state.chartType == 'mscolumn2d' && this.state.yearFlag ? '#fff' : '#B4B4B4' }]}>Year</Text>
            </TouchableOpacity>
          </View>
          <Text style={yieldTextStyle}>{this.state.yieldText}</Text>
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
            onInitialized={caller => {
              this.apiCaller = caller;
              if (this.state.chartType === '')
                this.setState({ chartType: this.state.type });
            }}
          />
          <View style={styles.bar}></View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    // padding: 10
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10
  },
  chartContainer: {
    position: 'relative',
    // paddingVertical: 20,
    // height: 400,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#B4B4B4',
    overflow: 'hidden',
    backgroundColor: 'white'
  },
  bar: {
    position: 'absolute',
    bottom: 5,
    height: 10, width: 90,
    backgroundColor: 'white'
  },
  buttonContainer: {
    padding: 10,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5
  },
  filterBtnContainerStyle: {
    // backgroundColor: 'pink',
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18
  },
  filterBtnStyle: {
    backgroundColor: '#00D050',
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 20
  },
  filterBtnTextStyle: {
    fontFamily: Fonts.EncodeSansSemiBold,
    fontSize: 12,
    color: '#fff'
  },
  yieldTextStyle: {
    fontFamily: Fonts.EncodeSansSemiBold,
    fontSize: 14,
    color: '#000',
    paddingHorizontal: 16,
    marginVertical: 20
  }
});