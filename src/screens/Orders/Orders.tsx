import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import {
  ActivityIndicator,
  DrawerLayoutAndroid,
  StyleSheet,
  View,
} from 'react-native';
import EmptyCard from 'src/components/EmptyCard/EmptyCard';
import OrdersHeader from './components/OrdersHeader/OrdersHeader';
import OrdersTableRow from './components/OrdersTableRow/OrdersTableRow';
import OrdersTableHeader from './components/OrdersTableHeader/OrdersTableHeader';
import { ScrollView } from 'react-native-gesture-handler';
import DrawerTabs from './components/DrawerTabs/DrawerTabs';
import { getUsers } from 'src/api/getUsers';
import { allOrdersStatus } from 'src/utils/getRandomStatus';

type User = {
  id: number;
  password: string;
  firstName: string;
  lastName: string;
};

const Orders = ({ navigation }: any) => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [header, setHeader] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

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
    setUser(data[id - 1]);
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
        <ActivityIndicator />
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
          <View style={styles.container}>
            <OrdersHeader total={data.length} />
            <EmptyCard style={styles.cardStyle}>
              <OrdersTableHeader
                handleAllCheckbox={handleAllCheckbox}
                toggleCheckBox={toggleCheckBox}
              />
              <ScrollView style={styles.container}>
                {data.map((user: User) => {
                  return (
                    <OrdersTableRow
                      key={user.password}
                      orderNumber={user.id}
                      handleUser={() => handleUser(user.id)}
                      name={user.firstName + ' ' + user.lastName}
                      state={allOrdersStatus[user.id]}
                      openDrawer={openDrawer}
                      checkValue={toggleCheckBox}
                    />
                  );
                })}
              </ScrollView>
            </EmptyCard>
          </View>
        </DrawerLayoutAndroid>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle: {
    borderRadius: 0,
  },
});

export default Orders;
