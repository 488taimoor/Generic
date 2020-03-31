import React, { Component, Fragment } from 'react';
import { Text, StyleSheet, View, ScrollView, } from 'react-native';
import ModalHeader from '../Headers/ModalHeader';
import NavigationBar from '../NavigationBar/NavigationBar';
import ImagePicker1 from './ImagePicker1';
import PersonalInformation from './PersonalInformation';
import AcademicInformation from './AcademicInformation';
export default class EditProfile extends Component {

    render() {
        return (
            <Fragment>
                <ModalHeader title="Edit Profile" btnText="Done" />
                <ScrollView style={{ flex: 1, }}>
                    <ImagePicker1 />
                    <PersonalInformation />
                    <AcademicInformation />
                </ScrollView>
                <NavigationBar />
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({})
