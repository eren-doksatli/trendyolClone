import React, {useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import screenStyle from '../../styles/screenStyle';
import appColors from '../../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../store/actions/productsActions';
import ProductItem from '../../components/products/productItem';
import Spinner from '../../components/ui/spinner';
import Categories from '../../widget/categories';

const Products = ({route}) => {
  const {pending, products} = useSelector(state => state.products);

  const category = route?.params?.category;

  const {selectedCategory} = useSelector(state => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProducts({
        category: selectedCategory ? selectedCategory : category,
      }),
    );
  }, [selectedCategory, category]);

  return (
    <View style={screenStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          ListHeaderComponent={<Categories />}
          contentContainerStyle={{
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={products}
          renderItem={({item}) => <ProductItem product={item} />}
        />
      )}
    </View>
  );
};

export default Products;
