import brow from '../public/images/browsugar.jpeg';
import americano from '../public/images/Americano.jpeg';
import fruite from '../public/images/fruite-tea.webp'
import green from '../public/images/mucha.jpeg'
export const STORE = [
    {
        id: 0,
        name: 'Brow Sugar',
        image: brow,
        price: 5.99
    },
    {
        id: 1,
        name: 'Americano',
        image: americano,
        price: 5.99
    },
    {
        id: 2,
        name: 'Fruite Tea ',
        image: fruite,
        price: 5.99
    },
    {
        id: 3,
        name: 'Green Milk Tea With Boba ',
        image: green,
        price: 5.99
    }
]

function getProductData(id) {
    let productData = STORE.find((product) => product.id === id) 

    if(productData === undefined){
        console.log("product data doesnt exit:" + id);
        return undefined
    }
    return productData
}

export {getProductData}