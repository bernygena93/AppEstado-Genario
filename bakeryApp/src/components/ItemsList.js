import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './styles/itemListStyles';

const ItemsList = ({item, onSelected}) => {
  const image = {uri: item.image};

  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ItemsList;
