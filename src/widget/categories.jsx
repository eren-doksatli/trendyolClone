import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import appColors from '../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../store/actions/categoriesAction';
import CategoryItem from '../components/widgets/categoryItem';
import {screenHeigth} from '../utils/constants';

const Categories = ({item}) => {
  const {categories} = useSelector(state => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({item}) => <CategoryItem category={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.WHITE,
    marginVertical: 15,
    maxHeight: screenHeigth * 0.043,
  },
});

export default Categories;
