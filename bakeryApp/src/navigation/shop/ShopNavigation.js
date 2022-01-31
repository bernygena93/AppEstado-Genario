import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from '../../screens/Categories';
import Products from '../../screens/Products';
import ProductDetail from '../../screens/ProductDetail';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{
          title: 'Categorias',
        }}
        component={Categories}
      />
      <Stack.Screen
        name="Products"
        options={() => ({
          title: 'Productos',
        })}
        component={Products}
      />
      <Stack.Screen
        name="ProductDetail"
        options={{
          title: 'Informacion del Pan',
        }}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigation;
