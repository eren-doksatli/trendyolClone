import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import appColors from '../theme/colors';
import WidgetTitle from '../components/widgets/widgetTitle';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTS} from '../utils/routes';

const Introduction = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Pressable onPress={() => navigation.navigate(PRODUCTS)}>
          <Image
            source={{
              uri: 'https://cdn.dsmcdn.com/ty1520/pimWidgetApi/mobile_20240902070524_3114227ElektronikMobile202408291702.jpg',
            }}
            style={{
              width: 380,
              height: 200,
              resizeMode: 'contain',
              borderRadius: 20,
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
});

export default Introduction;
