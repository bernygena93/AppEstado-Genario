import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './styles/itemListStyles';

const BreadList = ({product, onSelected}) => {
  const image = {uri: product.image};

  return (
    <TouchableOpacity onPress={() => onSelected(product)}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{product.name}</Text>
          <Text style={styles.textWeight}>{product.weight}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default BreadList;
