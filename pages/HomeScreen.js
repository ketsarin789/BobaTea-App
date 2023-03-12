import React from 'react'
import { View,ScrollView, Text } from 'react-native'
import { Card ,Row, Icon} from 'react-native-elements'
import {STORE} from '../data/items'
//import {STORE} from '../data/items'
import { ProductCard } from '../components/productCard'

export const HomeScreen = () => {
    const storeItem = STORE
   
    return(
        <ScrollView>
        <View style={{paddingTop: 10}}>
       
            {storeItem.map((product, idx) => (
                <View key={idx}>
               <ProductCard  product={product}/> 
               {/* product will hook with productCard */}
                </View>
            ))}
       
         
    </View>
    </ScrollView>
    )

}

