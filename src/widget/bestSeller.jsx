import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import appColors from '../theme/colors';
import WidgetTitle from '../components/widgets/widgetTitle';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../components/products/productItem';
import {getProducts} from '../store/actions/productsActions';

const BestSeller = ({item}) => {
  const {bestSellerProducts} = useSelector(state => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProducts({
        limit: 4,
        category: 'electronics',
      }),
    );
  }, []);

  return (
    <View style={styles.container}>
      <WidgetTitle
        title={item.title}
        seeAll={item.seeAll}
        category="electronics"
      />
      <FlatList
        horizontal
        contentContainerStyle={{
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={bestSellerProducts}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.WHITE,
  },
});

export default BestSeller;
