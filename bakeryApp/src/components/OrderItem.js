import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles/orderItemStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../constants/colors';

const OrderItem = ({item, onDelete}) => {
  const formatDay = time => {
    const date = new Date();
    return date.toLocaleDateString();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{formatDay(item.date)}</Text>
      </View>
      <View style={styles.data}>
        <View>
          <Text style={styles.textData}>${item.total}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash-outline" size={24} color={COLOR.green} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
