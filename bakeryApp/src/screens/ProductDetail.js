import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from './styles/productDetailStyles';
import {useSelector, useDispatch} from 'react-redux';
import {addItem} from '../store/actions/cart.action';

const ProductDetail = () => {
  const product = useSelector(state => state.breads.selected);
  const dispatch = useDispatch();

  const handlerItem = () => {
    dispatch(addItem(product));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre: {product.name}</Text>
      <Text style={styles.text}>Descripción: {product.description}</Text>
      <Text style={styles.text}>Peso: {product.weight}</Text>
      <Text style={styles.text}>Precio: $ {product.price}</Text>
      <Button title="Agregar al carrito" onPress={handlerItem} />
    </View>
  );
};

export default ProductDetail;
