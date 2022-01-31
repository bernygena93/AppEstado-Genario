import {View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectBread, filteredBread} from '../store/actions/bread.action';
import BreadList from '../components/BreadList';
import {styles} from './styles/categoriesStyles';

const Products = ({navigation}) => {
  const dispatch = useDispatch();
  const categoryBreads = useSelector(state => state.breads.filteredBreads);
  const category = useSelector(state => state.categories.selected);

  useEffect(() => {
    dispatch(filteredBread(category.id));
  }, [category]);

  const handleSelected = item => {
    dispatch(selectBread(item.id));
    navigation.navigate('ProductDetail');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryBreads}
        keyExtractor={item => item.id}
        renderItem={data => (
          <BreadList product={data.item} onSelected={handleSelected} />
        )}
      />
    </View>
  );
};

export default Products;
