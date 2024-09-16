import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import screenStyle from '../../styles/screenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsInfo} from '../../store/actions/productsActions';
import Spinner from '../../components/ui/spinner';
import {screenHeigth, screenWidth} from '../../utils/constants';
import appColors from '../../theme/colors';
import {Star} from 'iconsax-react-native';
import {converPrice} from '../../utils/functions';
import Button from '../../components/ui/button';

const ProductDetail = ({route}) => {
  const productID = route?.params?.productID;

  const {pendingDetail, productInfo} = useSelector(state => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProductsInfo({
        id: productID,
      }),
    );
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: appColors.WHITE}}>
      <View style={screenStyle.container}>
        {pendingDetail ? (
          <Spinner />
        ) : (
          <View style={styles.container}>
            <ScrollView>
              <Image source={{uri: productInfo.image}} style={styles.image} />
              <Text style={styles.title}>{productInfo?.title}</Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  marginVertical: 10,
                  color: appColors.GRAY,
                }}>
                {productInfo?.category}
              </Text>
              <View style={styles.rateContainer}>
                <Star size={25} color={appColors.PRIMARY} variant="Bold" />
                <Text style={styles.rate}>{productInfo.rating?.rate}</Text>
              </View>
              <Text style={styles.description}>{productInfo?.description}</Text>
            </ScrollView>
          </View>
        )}
        <View style={styles.infoContainer}>
          <View style={{flex: 1, paddingLeft: 10}}>
            <Text style={styles.price}>{converPrice(productInfo.price)} </Text>
            <Text style={styles.cargoText}>Kargo Ücretsiz </Text>
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Button title="Şimdi Al" buttonType="outline" />
            <Button title="Sepete Ekle" buttonType="flat" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  image: {
    width: screenWidth,
    height: screenHeigth * 0.3,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderColor: appColors.SOFT_GRAY,
    alignItems: 'center',
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  rate: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 500,
    color: appColors.PRIMARY,
  },
  favoriteContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  cargoText: {
    fontSize: 12,
    color: appColors.GREEN,
  },
});

export default ProductDetail;
