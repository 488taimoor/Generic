import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import { Fonts } from '../utils/Fonts';
import InputText from '../InputFields/InputText';
import InputEmail from '../InputFields/InputEmail';
import LinkedinLink from '../InputFields/LinkedinLink';
import FacebookLink from '../InputFields/FacebookLink';
import DropDownList from '../InputFields/DropDownList';
import MultiLinesTextInput from '../InputFields/MultiLinesTextInput';

export default class PersonalInformation extends Component {
    state = {
        firstname: "",
        firstnameError: '',
        firstnameFlag: true,
        firstnameRequired: false,
        lastname: "",
        lastnameError: '',
        lastnameFlag: true,
        lastnameRequired: false,
        email: "",
        emailError: '',
        emailFlag: true,
        emailRequired: false,
        linkedinLink: "",
        linkedinLinkError: '',
        linkedinLinkFlag: true,
        linkedinLinkRequired: false,
        facebookLink: "",
        facebookLinkError: '',
        facebookLinkFlag: true,
        facebookLinkRequired: false,
    }

    firstnameHandler = (firstname, firstnameFlag) => {
        this.setState({ firstname, firstnameFlag })
    }

    lastnameHandler = (lastname, lastnameFlag) => {
        this.setState({ lastname, lastnameFlag })
    }
    emailHandler = (email, emailFlag) => {
        this.setState({ email, emailFlag })
    }
    linkedinLinkHandler = (linkedinLink, linkedinLinkFlag) => {
        this.setState({ linkedinLink, linkedinLinkFlag })
    }
    facebookLinkHandler = (facebookLink, facebookLinkFlag) => {
        this.setState({ facebookLink, facebookLinkFlag })
    }

    // ! Start Button Handler

    buttonHandler = () => {
        // this.setState({ firstname: '',  firstnameFlag: true, lastname: '',  lastnameFlag: true, email: '', emailFlag: true, password: '', passwordFlag: true, confirmPassword: '', confirmPasswordFlag: true, })

        data = {
            firstname: this.state.firstname.trim(),
        };

        if (this.state.firstnameFlag == true) {
            this.setState({
                firstnameRequired: true,
                firstnameError: 'Field Required'
            })
        }
        else if (this.state.lastnameFlag == true) {
            this.setState({
                lastnameRequired: true,
                lastnameError: 'Field Required'
            })
        }
        else if (this.state.emailFlag == true) {
            this.setState({
                emailRequired: true,
                emailError: 'Field Required'
            })
        }
        else {
            this.setState({
                firstname: '',
                firstnameFlag: true,
                firstnameRequired: false,
                lastname: '',
                lastnameFlag: true,
                lastnameRequired: false,
                email: '',
                emailFlag: true,
                emailRequired: false,
            })
            this.props.SignupUser(data);
        }
    }

    render() {
        const { containerStyle, textStyle1, inputContainerStyle1 } = styles;
        return (
            <SafeAreaView style={containerStyle}>
                <Text style={textStyle1}> Personal Information </Text>
                <InputText
                    placeholder="First Name"
                    autoCapitalize="words"
                    inputTextColor="#9B9B9B"
                    validator='isAlpha'
                    blackList=" ,_-"
                    required={this.state.firstnameRequired}
                    inputValue={this.state.firstname}
                    error={this.state.firstnameError}
                    flag={this.state.firstnameFlag}
                    textHelper="Alphabets only."
                    inputContainerStyle={inputContainerStyle1}
                    onChange={this.firstnameHandler}
                />
                <InputText
                    placeholder="Last Name"
                    autoCapitalize="words"
                    inputTextColor="#9B9B9B"
                    validator='isAlpha'
                    blackList=" ,_-"
                    required={this.state.lastnameRequired}
                    inputValue={this.state.lastname}
                    error={this.state.lastnameError}
                    flag={this.state.lastnameFlag}
                    textHelper="Alphabets only."
                    inputContainerStyle={inputContainerStyle1}
                    onChange={this.lastnameHandler}
                />

                <InputEmail
                    leftIcon
                    placeholder="Enter Your Email"
                    autoCapitalize="none"
                    inputTextColor="#000"
                    inputValue={this.state.email}
                    error={this.state.emailError}
                    flag={this.state.emailFlag}
                    required={this.state.emailRequired}
                    textHelper="Enter a valid email address"
                    inputContainerStyle={inputContainerStyle1}
                    onChange={this.emailHandler}
                />
                <DropDownList title="Current Location" />
                <LinkedinLink
                    leftIcon
                    placeholder="Linkedin Link (Optional)"
                    autoCapitalize="none"
                    inputTextColor="#000"
                    inputValue={this.state.linkedinLink}
                    error={this.state.linkedinLinkError}
                    flag={this.state.linkedinLinkFlag}
                    required={this.state.linkedinLinkRequired}
                    textHelper="Enter a valid URL"
                    inputContainerStyle={inputContainerStyle1}
                    onChange={this.linkedinLinkHandler}
                />
                <FacebookLink
                    leftIcon
                    placeholder="Facebook Link (Optional)"
                    autoCapitalize="none"
                    inputTextColor="#000"
                    inputValue={this.state.facebookLink}
                    error={this.state.facebookLinkError}
                    flag={this.state.facebookLinkFlag}
                    required={this.state.facebookLinkRequired}
                    textHelper="Enter a valid URL"
                    inputContainerStyle={inputContainerStyle1}
                    onChange={this.facebookLinkHandler}
                />
                <MultiLinesTextInput />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 16,
        paddingBottom: 10,
        backgroundColor: 'white',
    },
    textStyle1: {
        fontFamily: Fonts.EncodeSansSemiBold,
        fontSize: 16,
        color: '#000000',
        // borderWidth:1,
    },
    inputContainerStyle1: {
        marginTop: 16,
        paddingBottom: 8,
        borderBottomWidth: 0.5
    },
})
