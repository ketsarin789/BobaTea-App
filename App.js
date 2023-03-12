
import {  View } from 'react-native';
// import { MainPage } from './pages/MainPage';
import { HomeScreen } from './pages/HomeScreen';
import CartProvider from './CartContext';
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './pages/MyTabs';
//import { Footer } from './pages/Footer';


export default function App() {
return (
    <CartProvider>
   
        <NavigationContainer>
          <MyTabs />
          
          {/* <Footer /> */}
        </NavigationContainer>
    
    </CartProvider>
  );
}
//we use before use myTab
{/* <CartProvider>
<NavigationContainer>
  <MainPage />
  <HomeScreen />
  <Footer />
</NavigationContainer>

</CartProvider> */}

