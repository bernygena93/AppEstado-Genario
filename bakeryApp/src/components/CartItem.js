import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {COLOR} from '../constants/colors';
import {styles} from './styles/cartItemStyles';

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <View style={styles.data}>
        <View>
          <Text style={styles.textData}>Cantidad: {item.quantity}</Text>
          <Text style={styles.textData}>Precio: ${item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash-outline" size={24} color={COLOR.green} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
