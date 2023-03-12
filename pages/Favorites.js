import React from 'react'
import {View, Text} from 'react-native'
import { Avatar, ListItem} from 'react-native-elements';
import {STORE} from '../data/items';

export const FavoriteScreen = () => {

    const {name,image,id} = STORE;

    return (
        <View style={{paddingTop: 100, alignSelf: 'center'}}>
            <Text style={{fontSize: 50}}>Favorite</Text>
            <Avatar rounded source={{ image }} />
            <ListItem.Content>
                    <ListItem.Title>{name}</ListItem.Title>
                    
                </ListItem.Content>
        </View>
    )
}
