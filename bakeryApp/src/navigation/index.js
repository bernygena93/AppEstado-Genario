import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import Auth from '../screens/Auth';
import {useSelector} from 'react-redux';

const MainNavigator = () => {
  const user = useSelector(state => state.auth.userId);
  return (
    <NavigationContainer>
      {user ? <TabNavigation /> : <Auth />}
    </NavigationContainer>
  );
};
export default MainNavigator;
