import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles/productDetailStyles';
import {useSelector, useDispatch} from 'react-redux';
import {selectBread} from '../store/actions/bread.action';

const ProductDetail = () => {
  const product = useSelector(state => state.breads.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectBread(product.id));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre: {product.name}</Text>
      <Text style={styles.text}>Descripción: {product.description}</Text>
      <Text style={styles.text}>Peso: {product.weight}</Text>
      <Text style={styles.text}>Precio: $ {product.price}</Text>
    </View>
  );
};

export default ProductDetail;
