import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {screenHeigth, screenWidth} from '../../utils/constants';
import appColors from '../../theme/colors';
import {Heart, Star} from 'iconsax-react-native';
import {converPrice} from '../../utils/functions';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';

const ProductItem = ({product}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(PRODUCTDETAIL, {productID: product.id})
      }
      style={styles.container}>
      <Image style={styles.image} source={{uri: product.image}} />
      <Text numberOfLines={2} style={styles.title}>
        {product.title}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.price}>{converPrice(product.price)} </Text>
        <View style={styles.rateContainer}>
          <Star size={20} color={appColors.PRIMARY} variant="Bold" />
          <Text style={styles.rate}>{product.rating.rate}</Text>
        </View>
      </View>
      <View style={styles.favoriteContainer}>
        <Heart size="20" color={appColors.PRIMARY} variant="Outline" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth / 2 - 15,
    margin: 3,
    padding: 8,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: appColors.SOFT_GRAY,
  },
  image: {
    width: screenWidth / 2 - 50,
    height: screenHeigth * 0.15,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 10,
  },
  description: {},
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rate: {
    fontSize: 12,
    color: appColors.BLACK,
  },
  price: {
    color: appColors.PRIMARY,
    fontSize: 16,
    fontWeight: 500,
  },
  favoriteContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default ProductItem;
