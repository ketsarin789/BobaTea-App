import {Button} from 'react-native-elements';
import {Text, View} from 'react-native'
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../data/items";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <View>
            <Text style={{marginTop: 10, fontSize: 20, alignSelf: 'center'}}>{productData.name}</Text>
            <Text style={{marginTop: 10, fontSize: 20, alignSelf: 'center'}}>Total Item In Your Cart :  {quantity}</Text>
            <Text style={{marginTop: 10, fontSize: 20, alignSelf: 'center'}}>${ (quantity * productData.price).toFixed(2) }</Text>
            
            <Button  onPress={() => cart.deleteFromCart(id)} title="REMOVE" style={{marginTop: 20}}/>
            
        </View>
    )
}

export default CartProduct;