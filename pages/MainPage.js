import  {useState, useContext} from 'react';
import {View,  Text,Alert, Modal, StyleSheet,  Pressable} from 'react-native'
import { Button, Card, Icon} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {CartContext} from '../CartContext'
import CartProduct from '../components/CartProduct';
import { HomeScreen } from './HomeScreen';


export const MainPage = () => {
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const [close,setClose] = useState(false)
    
const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    const handleShow = () => {
        setShow(!show)
    }
    const handleClose = () =>{
        setClose(!close)
    }
   
    return(
        <ScrollView>
        <View style={styles.headerFooterStyle}>
             <Text style={{paddingTop: 3, alignSelf:'center', fontSize: 25, color: 'white'}}> Fon Tea</Text>
             
        <View>
         
        <Button 
            type='outline' disabled
            icon={
                <Icon
                name="shopping-cart"
                size={20}
                color="white"
                type='font-awesome'
                style={styles.shopping}
                
                />
            }
            iconRight
            title=""
            />
                <View style={styles.cartNumber}>
                    <Text   
                    onPress={() => handleShow()}
                    style={{color: 'white'}}> {productCount}</Text>
                </View>
                
            
        </View> 
      </View>
            <Modal
                animationType='slide'
                transparent={false}
                visible={show}
                onRequestClose={() => setShow(!show)}
            >
                <View style={styles.modal}>
                    {productCount > 0 ?
                    <View>
                        <Text style={{fontSize: 20, alignSelf: 'center', fontWeight: 'bold'}}>Items in your cart</Text>
                        {cart.items.map((currentProduct,idx) => (
                            <CartProduct key={idx} quantity={currentProduct.quantity} id={currentProduct.id}></CartProduct>
                        ))}
                         {/* <Text>{cart.getTotalCost().toFixed(2)}</Text> */}
                    </View>
                    :
                    <Text>There are notthing in your cart</Text>
                    }
                    {/* <Text style={styles.modalTitle}>Your Cart</Text>
                    <Text style={styles.modalText}>Your order:</Text> 
                    <Text style={styles.modalText}>Cart: {productCount} items</Text>
                    <Text style={styles.modalText}>Total :</Text> */}
                    <Button 
                    title="Submit"
                    onPress={() => setShow(!show)}
                    style={{marginTop: 10}}
                    
                    />
                </View>
            </Modal>
            <HomeScreen />
      </ScrollView>
    )
}

const styles =StyleSheet.create({
        headerFooterStyle: {
       width: '100%',
       height: 45,
    //backgroundColor: 'white' ,
    marginTop: 50,
    paddingLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green'

},
    shopping: {
        paddingLeft: 5,
        marginTop: 5,
        color: 'blue',
        //backgroundColor: '#ced4de',
        //alignSelf: 'flex-end',
        marginRight: 10,
        width: 25,
        height: 25,
        borderWidth: -10,
        marginRight: 20,
        position: 'relative',
        marginTop: -2,
       borderRadius: 30,
       
    },
    cartNumber: {
        
        width: 25,
        height: 25,
        position: 'absolute',
        button: 0,
        marginRight: 0,
        backgroundColor: 'red',
        paddingTop: 2,
        paddingLeft: 0,
        marginTop: 15,
        marginLeft: 30,
        borderRadius:20,
        alignItems: 'center'
        
        //transform: 'translate(25%, 25%)',
    },
    modal: {
        justifyContent: 'center',
        margin: 50,
        paddingTop: 30
        
    },
    modalText: {
        fontSize: 18,
        margin: 10
    },
    modalTitle: {
        alignItems: 'center',
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold'

    }
    
})