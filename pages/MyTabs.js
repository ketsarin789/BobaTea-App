
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { MainPage } from './MainPage';
 import { HomeScreen } from './HomeScreen';
 import {FavoriteScreen} from './Favorites';
 import {ContactScreen} from './Contact';
 import {SigninScreen} from './SigninScreen'
 import {Icon} from 'react-native-elements'
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();


export const MyTabs = () => {
    return(
        <Tab.Navigator>
        <Tab.Screen 
        name="Home" 
        component={MainPage} 
        />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
        <Tab.Screen name="Conatct" component={ContactScreen} />
        <Tab.Screen name="Signin" component={SigninScreen} />

        </Tab.Navigator>
    )
} 

