import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import InputSearch from './InputSearch';
import Card from './Card';

export default class TaskList extends Component {

    // ! state ...
    state = {
        searchText: '',
    }
    // !

    // ! function for search input
    searchHandler = (searchText) => {
        this.setState({ searchText });
    }
    // !

    render() {

        // ! Destructure styles...
        const { containerStyle, inputContainerStyle } = styles;
        // !

        // ! Destructure props...
        const {
            data = [
                { id: '0', name: 'Tariq Ali', address: 'Garden Town', image:{uri:"http://10.11.21.228:3302/logo1.PNG"} },
                { id: '1', name: 'Shahid Ghafoor', address: 'Civil lines', phone: '03121481997' },
                { id: '2', name: 'Jafeel', address: 'Ichra', phone: '03061481997' },
                { id: '3', name: 'Sabir Khan', address: 'Town Ship', phone: '03201481997' },
                { id: '4', name: 'Muzaffar Iqbal', address: 'Mansehra', phone: '03451312345' },
                { id: '5', name: 'Taimoor Khan', address: 'Shakar Gar', phone: '03121476548' },
                { id: '6', name: 'Usman Iqbal', address: 'Herbanspura', phone: '03062345690' },
                { id: '7', name: 'Hamza Saeed Khan', address: 'Valancia', phone: '03418970601' },
            ]
        } = this.props;
        // !

        // ! this is for how to filter Data ....
        const renderData = data.filter(Data => {
            const name = Data.name.toLowerCase();
            const description = Data.description.toLowerCase();
           // const phone = Data.phone.toLowerCase();
            const searchText = this.state.searchText.toLowerCase();
            return name.includes(searchText) || description.includes(searchText) // || phone.includes(searchText)
            // return name.startsWith(searchText) || address.startsWith(searchText) || phone.startsWith(searchText)
            // return name.endsWith(searchText) || address.endsWith(searchText) || phone.endsWith(searchText)
        })
        // !

        return (
            <SafeAreaView style={containerStyle}>
        
                <InputSearch
                    rightIcon
                    placeholder="Search ..."
                    iconName="search"
                    iconSize={18}
                    iconColor="#787878"
                    inputTextColor="#000"
                    inputValue={this.state.searchText}
                    textHelper="Use only Characters"
                    inputContainerStyle={inputContainerStyle}
                    onChange={this.searchHandler}
                />

                <FlatList
                    style={{ paddingHorizontal: 20, marginTop: 20 }}
                    data={renderData}
                    renderItem={({ item }) => (
                        <Card value1={item.name} value2={item.description} image={{uri:item.taskImg}} />
                    )}

                    keyExtractor={item => item._id}
                />

            </SafeAreaView>
        )
    }
}

// ! all styles ...
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        paddingVertical: 20
    },
    inputContainerStyle: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 50,
        marginHorizontal: 20,
    },
})
