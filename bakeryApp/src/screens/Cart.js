import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CARTS} from '../constants/cart';
import CartItem from '../components/CartItem';
import {styles} from './styles/cartStyles';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [carts, setCarts] = useState(CARTS);
  const handleDelete = id => {
    setCarts(carts.filter(product => product.id !== id));
  };

  useEffect(() => {
    carts.forEach(product =>
      setTotal(prev => prev + product.price * product.quantity),
    );
  }, [carts]);

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
        data={carts}
        keyExtractor={item => item.id}
        renderItem={data => (
          <CartItem item={data.item} onDelete={handleDelete} />
        )}
      />
    </View>
  );
};

export default Cart;
