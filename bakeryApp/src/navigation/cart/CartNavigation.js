import {TouchableOpacity} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../../screens/Cart';
import Orders from '../../screens/Orders';
import {COLOR} from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const CartNavigation = ({navigation}) => {
  const handleNavigate = () => {
    navigation.navigate('Orders');
  };

  return (
    <Stack.Navigator initialRouteName="shop">
      <Stack.Screen
        name="Shop"
        options={{
          title: 'Carrito de Compras',
          headerRight: ({focused}) => (
            <TouchableOpacity onPress={handleNavigate}>
              <Ionicons
                name="basket-outline"
                size={24}
                color={COLOR.lightPink}
              />
            </TouchableOpacity>
          ),
        }}
        component={Cart}
      />
      <Stack.Screen
        name="Orders"
        options={{
          title: 'Historial de Compras',
        }}
        component={Orders}
      />
    </Stack.Navigator>
  );
};

export default CartNavigation;
