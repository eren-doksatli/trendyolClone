import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  MESSAGES,
  NOTIFICATIONS,
  PRODUCTDETAIL,
  PRODUCTS,
  TABMENU,
} from '../utils/routes';
import TabNavigator from './tabNavigator';
import Notifications from '../screens/notifications';
import Messages from '../screens/messages';
import appColors from '../theme/colors';
import Products from '../screens/products';
import ProductDetail from '../screens/products/productDetail';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        headerTintColor: appColors.BLACK,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABMENU}
        component={TabNavigator}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={NOTIFICATIONS}
        component={Notifications}
      />
      <Stack.Screen options={{}} name={MESSAGES} component={Messages} />
      <Stack.Screen options={{}} name={PRODUCTS} component={Products} />
      <Stack.Screen
        options={{}}
        name={PRODUCTDETAIL}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
