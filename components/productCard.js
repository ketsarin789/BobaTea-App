import { useState } from 'react';
import {View, Modal, Text, StyleSheet} from 'react-native';
import {Button, Card, Icon} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { CartContext } from '../CartContext';
import { useContext } from 'react';

export const ProductCard = (props) => { //props.product is the product we are selling
    const product = props.product
    //const {show, setShow} = useState(false);
    const quantity = 0;
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)
    


    // const handleShow = () => {
    //     setShow(!show)
    // }
    return(
        <ScrollView style={{paddingTop: 5}}>
            
            <Card>
            <Card.Image source={product.image} style={{margin: 20}}></Card.Image>
                
                <View>
                     <Icon
                        name='heart'
                        type='font-awesome'
                        color='#f50'
                        raised
                        reverse
                        onPress={() =>
                            props.isFavorite
                                ? console.log('Already set as a favorite')
                                : props.markFavorite()
                        }
                    />

                <Card.Title>{product.name}</Card.Title>
                <Card.Title>${product.price}</Card.Title>
                </View>   
                            { productQuantity > 0 ?
                            <>
                                <View  style={{flexDirection: 'row'}}>
                                    <Text  style={{paddingTop:10, fontWeight: 'bold', fontSize: 20}}>In Cart: {productQuantity}</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Button onPress={() => cart.addOneToCart(product.id)} title="+" style={{width: 50, marginLeft: 30}}/>
                                        <Button onPress={() => cart.removeOneFromCart(product.id)} title="-" style={{width: 50, marginLeft: 30}}/>
                                    </View>
                                </View>
                                <Button  
                                onPress={() => cart.deleteFromCart(product.id)} 
                                title="Remove"
                                color='red'
                                style={{paddingTop:20}} />
                            </>
                            :
                            <Button onPress={() => cart.addOneToCart(product.id)} title="ADD TO CART" />
                        }
               </Card>
            
         </ScrollView>
    )
} 



  
                  
                    
