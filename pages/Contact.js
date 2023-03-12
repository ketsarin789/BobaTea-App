import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const ContactScreen = () => {
    return (
        <View style={styles.contact}>
            <Text style={{fontSize: 50}}>Contact Us</Text>
            <Text style={{fontSize: 25,paddingTop: 10 }}>Email:    Kayakfon@gmail.com</Text>
            <Text style={{fontSize: 25,paddingTop: 10 }}>Phone:    253-3448053</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contact: {
        
        paddingTop: 100,
        alignItems: 'center'
    }
})

