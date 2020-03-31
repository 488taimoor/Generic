import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, StatusBar } from 'react-native'
import { Fonts } from '../../utils/Fonts'
import InputText from '../../InputFields/InputText'
import InputPassword from '../../InputFields/InputPassword'
import Button2 from '../../Buttons/Button2'
export default class SolorLogin extends Component {
    state = {
        name: "",
        nameError: '',
        nameFlag: true,
        nameRequired: false,
        password: "",
        passwordError: '',
        passwordFlag: true,
        passwordRequired: false,
    }

    nameHandler = (name, nameFlag) => {
        this.setState({ name, nameFlag })
    }
    passwordHandler = (password, passwordFlag) => {
        this.setState({ password, passwordFlag })
    }

    render() {
        const { containerStyle, viewStyle1, imageContainerStyle, imageStyle, titleStyle, viewStyle2, loginStyle, inputContainerStyle1, buttonStyle, buttonTextStyle, textStyle } = styles
        return (
            <SafeAreaView style={containerStyle}>
                <StatusBar backgroundColor='white' barStyle='dark-content' />
                <View style={viewStyle1}>
                    <View style={imageContainerStyle}>
                        <Image
                            style={imageStyle}
                            source={require('../../images/isolar.png')}
                        />
                    </View>
                    <Text style={titleStyle}>SmartSolar</Text>
                </View>
                <View style={viewStyle2}>
                    <Text style={loginStyle}>Login</Text>
                    <InputText
                        placeholder="Username"
                        autoCapitalize="words"
                        inputTextColor="#9B9B9B"
                        validator='isAlpha'
                        blackList=" ,_-"
                        required={this.state.nameRequired}
                        inputValue={this.state.name}
                        error={this.state.nameError}
                        flag={this.state.nameFlag}
                        textHelper="Alphabets only."
                        inputContainerStyle={inputContainerStyle1}
                        onChange={this.nameHandler}
                    />
                    <InputPassword
                        placeholder="Password"
                        autoCapitalize="words"
                        inputTextColor="#9B9B9B"
                        required={this.state.passwordRequired}
                        inputValue={this.state.password}
                        error={this.state.passwordError}
                        flag={this.state.passwordFlag}
                        textHelper="Minimum length 8"
                        inputContainerStyle={inputContainerStyle1}
                        onChange={this.passwordHandler}
                    />
                    <Button2 iconDisplay='none' buttonStyle={buttonStyle} buttonTextStyle={buttonTextStyle} btnColor='#007AFF'>
                        LOGIN
                    </Button2>
                </View>
                <Text style={textStyle}>Powered By: AlfAin Tech @ 2019</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewStyle1: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainerStyle: {
        height: 70,
        width: 70,
        // borderWidth: 1,
    },
    imageStyle: {
        height: '100%',
        width: '100%'
    },
    titleStyle: {
        fontFamily: Fonts.EncodeSansSemiBold,
        fontSize: 24,
        color: '#FFB146',
        marginTop: 20
    },
    viewStyle2: {
        // borderWidth:1,
        marginTop: 26,
        width: '100%',
        paddingHorizontal: 16,
    },
    loginStyle: {
        fontFamily: Fonts.EncodeSansBold,
        fontSize: 16,
        color: '#000'
    },
    inputContainerStyle1: {
        marginTop: 16,
        paddingBottom: 8,
        borderBottomWidth: 0.5
    },
    buttonStyle: {
        marginTop: 30,
    },
    buttonTextStyle: {
        fontFamily: Fonts.EncodeSansSemiBold,
        fontSize: 14,
    },
    textStyle: {
        position:'absolute',
        bottom: 30,
        fontFamily: Fonts.EncodeSansRegular,
        fontSize: 12,
        color: '#B4B4B4'
    }
})
