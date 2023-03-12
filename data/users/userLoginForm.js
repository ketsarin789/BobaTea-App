import {useState} from 'react'
import {SafeAreaView, StyleSheet, TextInput, Text, View, Alert} from 'react-native';
import {Button} from 'react-native-elements';
//import { useSelector, useDispatch } from 'react-redux';
//import { setCurrentUser,selectCurrentUser } from './userSlice';

function userLoginForm() {
    // const currentUser = useSelector(selectCurrentUser);
    // const dispatch = useDispatch();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
     const handleSigin = (e) => {
        setUserName(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const resetSignin = () => {
        setUserName('')
        setPassword('')
    }
    const resetPassword = () => {
        setUserName('')
        setPassword('')
    }

    const hadlerSigninAlert = () => {
        Alert.alert("You are signin",
        [
            {
                text:"Cancle",
                onPress: () => {
                    console.log("Do nothing because we cancelled");
                }
            },
            {
                text: "OK",
                onPress: () => {
                    console.log("Do whatever ok is in your app e.g. save/delete");
                  }
            }
        ])
    }


    return (
        <SafeAreaView >
        <View style={styles.container}>
            <Text style={{alignSelf: 'center', fontSize: 25}}>Login</Text>
            <TextInput
                value={userName}
                onChange={handleSigin}
                placeholder={'UserName'}
                style={styles.input}
            />
            <TextInput
                value={password}
                onChange={handlePassword}
                placeholder={'Password'}
                style={styles.input}
            />
            <Text style={{color: 'blue'}}>{userName}</Text>
            <Text style={{color: 'blue'}}>{password}</Text>
            <Button 
            title="Signin"
            onPress={ resetSignin}
            />
            <Button 
            style={{paddingTop: 10}}
            title="Register"
            onPress={resetPassword}
            />
          </View>
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
        container: {
            paddingLeft: 80,
          //alignItems: 'center',
            marginTop: 20,
          //backgroundColor: '#ffffff',
        },
        input: {
          width: 250,
          height: 44,
          padding: 10,
          marginTop: 20,
          marginBottom: 10,
          backgroundColor: '#e8e8e8',
          paddingLeft: 80
        },
      });
    

export default userLoginForm
