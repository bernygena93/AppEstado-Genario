import {View, FlatList} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectCategory} from '../store/actions/category.action';
import ItemsList from '../components/ItemsList';
import {styles} from './styles/categoriesStyles';

const Categories = ({navigation}) => {
  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();

  const handleSelectedCategory = item => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products');
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={data => (
          <ItemsList item={data.item} onSelected={handleSelectedCategory} />
        )}
      />
    </View>
  );
};

export default Categories;
