import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import appColors from '../../theme/colors';
import widgets from '../../widget/widgets.json';
import Categories from '../../widget/categories';
import BestSeller from '../../widget/bestSeller';
import ForYou from '../../widget/forYou';
import screenStyle from '../../styles/screenStyle';
import Introduction from '../../widget/introduction';

const HomeScreen = ({navigation}) => {
  const widgetItem = ({item}) => {
    switch (item.name) {
      // case 'categories':
      //   return <Categories item={item} />;
      case 'introduction':
        return <Introduction item={item} />;
      case 'bestSeller':
        return <BestSeller item={item} />;
      case 'forYou':
        return <ForYou item={item} />;
    }
  };

  return (
    <View style={screenStyle.container}>
      <FlatList data={widgets} renderItem={widgetItem} />
    </View>
  );
};

export default HomeScreen;
