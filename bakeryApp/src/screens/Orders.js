import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import OrderItem from '../components/OrderItem';
import {styles} from './styles/cartStyles';

const Orders = () => {
  const orders = useSelector(state => state.orders.order);

  const handleDelete = id => {
    console.warn(id);
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
