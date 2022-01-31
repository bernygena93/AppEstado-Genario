import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import CartItem from '../components/CartItem';
import {styles} from './styles/cartStyles';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const cart = useSelector(state => state.cart.cart);

  const handleDelete = id => {
    console.warn(id);
  };

  useEffect(() => {
    cart.forEach(product =>
      setTotal(prev => prev + product.price * product.quantity),
    );
  }, [cart]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.info}>
          <Text style={styles.title}>Total:</Text>
          <Text style={styles.title}>$ {total} </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Pagar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={data => (
          <CartItem item={data.item} onDelete={handleDelete} />
        )}
      />
    </View>
  );
};

export default Cart;
