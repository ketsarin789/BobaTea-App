import React from 'react'
import {View, Text} from 'react-native'
import { Avatar, ListItem} from 'react-native-elements';
import {STORE} from '../data/items';

export const FavoriteScreen = () => {
   
    

    return (
        <View style={{paddingTop: 100, alignSelf: 'center'}}>
            <Text style={{fontSize: 50}}>Favorite</Text>
            <View >
                {STORE.map((favorite) => (
                    <View style={{flexDirection: 'row', padding: 20}}>
                    <Avatar rounded source={favorite.image} style={{width: 50, height: 50}}/>
                    <Text style={{marginLeft: 30, paddingTop: 15, fontSize: 20}}>{favorite.name}</Text>
                    </View>
                ))}
               
            </View>
            
            
        </View>
    )
}

{/* <Avatar rounded source={{ image }} />
<ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
        
</ListItem.Content> */}
