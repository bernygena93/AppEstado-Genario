import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CartItem from '../components/CartItem';
import {styles} from './styles/cartStyles';
import {confirmItems, deleteItem} from '../store/actions/cart.action';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.carts.items);
  const total = useSelector(state => state.carts.total);

  const handleDelete = id => {
    dispatch(deleteItem(id));
  };

  const handleConfirm = () => {
    dispatch(confirmItems(cart, total));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={data => (
          <CartItem item={data.item} onDelete={handleDelete} />
        )}
      />
      <Text style={styles.title}>Total: $ {total} </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Pagar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
