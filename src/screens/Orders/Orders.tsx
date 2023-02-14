import React from 'react';
import { StyleSheet, View } from 'react-native';
import EmptyCard from 'src/components/EmptyCard/EmptyCard';
import OrdersHeader from './components/OrdersHeader/OrdersHeader';
import OrdersTableRow from './components/OrdersTableRow/OrdersTableRow';
import OrdersTableHeader from './components/OrdersTableHeader/OrdersTableHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { allOrdersStatus } from 'src/utils/getRandomStatus';
import { User } from './AndroidDrawer';

const Orders = ({
  navigation,
  data,
  handleUser,
  handleAllCheckbox,
  toggleCheckBox,
  openDrawer,
}: any) => {
  return (
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
