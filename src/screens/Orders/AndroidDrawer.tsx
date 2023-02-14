import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import {
  ActivityIndicator,
  DrawerLayoutAndroid,
  StyleSheet,
  View,
} from 'react-native';
import DrawerTabs from './components/DrawerTabs/DrawerTabs';
import { getUsers } from 'src/api/getUsers';
import Orders from './Orders';
import { allOrdersStatus } from 'src/utils/getRandomStatus';

export type User = {
  id: number;
  password: string;
  firstName: string;
  lastName: string;
  status: string;
};

const AndroidDrawer = ({ navigation }: any) => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [header, setHeader] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [user, setUser] = useState<User>({
    id: 0,
    password: '',
    firstName: '',
    lastName: '',
    status: '',
  });

  const handleAllCheckbox = () => {
    setToggleCheckBox(prevState => !prevState);
  };
  const openDrawer = () => {
    drawer.current?.openDrawer();
    setHeader(true);
  };
  const closeDrawer = () => {
    drawer.current?.closeDrawer();
    setHeader(false);
  };
  const handleUser = (id: number) => {
    const userFound = data.find(x => x.id === id);
    setUser(userFound);
  };

  useEffect(() => {
    getUsers(setData, setLoading, setUser);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: header ? false : true });
  }, [header, navigation]);

  return (
    <>
      {isLoading ? (
        <View style={{ ...styles.container, ...styles.activityConatiner }}>
          <ActivityIndicator size={100} />
        </View>
      ) : (
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={400}
          drawerPosition="right"
          renderNavigationView={() => (
            <DrawerTabs
              closeDrawer={closeDrawer}
              navigation={navigation}
              user={user}
            />
          )}>
          <Orders
            data={data}
            allStatus={allOrdersStatus}
            handleUser={handleUser}
            handleAllCheckbox={handleAllCheckbox}
            toggleCheckBox={toggleCheckBox}
            openDrawer={openDrawer}
            setData={setData}
          />
        </DrawerLayoutAndroid>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityConatiner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AndroidDrawer;
