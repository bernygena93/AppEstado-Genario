import React from 'react';
import {View, FlatList} from 'react-native';
import {ORDERS} from '../constants/orders';
import OrderItem from '../components/OrderItem';
import {styles} from './styles/cartStyles';

const Orders = () => {
  const orders = ORDERS;
  const handleDelete = id => {
    setCarts(orders.filter(product => product.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={data => (
          <OrderItem item={data.item} onDelete={handleDelete} />
        )}
      />
    </View>
  );
};

export default Orders;
