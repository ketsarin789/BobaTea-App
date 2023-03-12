import React from 'react'
import {View, Text} from 'react-native'
import UserLoginForm from '../data/users/userLoginForm'


export const SigninScreen = () => {
    return (
        <View>
            <Text>
                <UserLoginForm />
            </Text>
        </View>
    )
}
