import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { handleSignOut } from 'src/api/auth/handleSignOut';
import React from 'react';

const DrawerContent = ({ passProps }: any) => {
  return (
    <DrawerContentScrollView {...passProps}>
      <DrawerItemList {...passProps} />
      <DrawerItem label="Logout" onPress={handleSignOut} />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
