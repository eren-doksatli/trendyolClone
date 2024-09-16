import React from 'react';
import {
  CART,
  FAVORITES,
  HOMESCREEN,
  PROFILE,
  TRENDYOLGO,
} from '../../utils/routes';
import {Home, Google, Heart, ShoppingCart, Profile} from 'iconsax-react-native';

const TabIcon = ({name, size, color, focused}) => {
  switch (name) {
    case HOMESCREEN:
      return (
        <Home
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case TRENDYOLGO:
      return (
        <Google
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case FAVORITES:
      return (
        <Heart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case CART:
      return (
        <ShoppingCart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case PROFILE:
      return (
        <Profile
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    default:
      return (
        <Home
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
      break;
  }
};

export default TabIcon;
