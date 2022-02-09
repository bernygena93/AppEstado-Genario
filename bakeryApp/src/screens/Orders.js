import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import OrderItem from '../components/OrderItem';
import {deleteOrder, getOrders} from '../store/actions/order.action';
import {styles} from './styles/cartStyles';

const Orders = () => {
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const handleDelete = id => {
    dispatch(deleteOrder(id));
    console.log(id);
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
