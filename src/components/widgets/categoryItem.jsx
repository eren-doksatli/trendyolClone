import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory} from '../../store/slices/categoriesSlice';
import appColors from '../../theme/colors';
import {screenHeigth, screenWidth} from '../../utils/constants';

const CategoryItem = ({category}) => {
  const dispatch = useDispatch();
  const {selectedCategory} = useSelector(state => state.categories);
  return (
    <TouchableOpacity
      onPress={() => dispatch(setCategory(category))}
      style={[
        styles.container,
        selectedCategory == category
          ? styles.activeCategoryContainer
          : styles.inActiveCategoryContainer,
      ]}>
      <Text
        style={
          selectedCategory == category
            ? styles.activeTitle
            : styles.inActiveTitle
        }>
        {category}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    borderWidth: 0.5,
    marginHorizontal: 5,
    maxHeight: screenHeigth * 0.05,
    maxWidth: screenWidth * 0.6,
  },
  activeCategoryContainer: {
    backgroundColor: appColors.PRIMARY,
    borderColor: appColors.PRIMARY,
  },
  inActiveCategoryContainer: {
    backgroundColor: appColors.WHITE,
  },
  activeTitle: {
    color: appColors.WHITE,
    fontWeight: '500',
  },
  inActiveTitle: {
    color: appColors.BLACK,
  },
});

export default CategoryItem;
