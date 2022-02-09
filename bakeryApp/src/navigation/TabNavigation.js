import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShopNavigation from './shop/ShopNavigation';
import CartNavigation from './cart/CartNavigation';
import {styles} from './styles/tabStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../constants/colors';
import {useSelector} from 'react-redux';

const BottomTabs = createBottomTabNavigator();
const TabNavigation = () => {
  const carts = useSelector(state => state.carts.items);
  return (
    <BottomTabs.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <BottomTabs.Screen
        name="ShopTab"
        component={ShopNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused && COLOR.pink}
              />
              <Text style={{color: focused && COLOR.pink}}>Store</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="CartTab"
        component={CartNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Ionicons
                name={focused ? 'cart' : 'cart-outline'}
                size={24}
                color={focused && COLOR.pink}
              />
              {!focused && (
                <View style={styles.carts}>
                  <Text style={{color: 'white'}}>{carts.length}</Text>
                </View>
              )}
              <Text style={{color: focused && COLOR.pink}}>Cart</Text>
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigation;
