import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { styles } from './TableRow.style';
import colors from 'src/constants/colors';
import { Button, Menu, Divider } from 'react-native-paper';

type Props = {
  id: number;
  image?: string | undefined;
  name?: string | undefined;
  price?: string | number | undefined;
  style?: object | undefined;
  hanldeAddProduct?: (id?: number) => void | undefined;
};

const TableRow = ({
  id,
  image,
  name,
  price,
  style,
  hanldeAddProduct,
}: Props) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <>
      <View style={styles.box1}>
        {image && (
          <Image
            source={{
              uri: image,
            }}
            style={styles.avatar}
          />
        )}
        <Text numberOfLines={1} style={style ? style : styles.text}>
          {name}
        </Text>
      </View>
      <View style={styles.box2}>
        <Text style={style ? style : styles.text}>{price}</Text>
      </View>
      <View style={styles.box3}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button onPress={openMenu}>
              <SimpleLineIcons
                name="options"
                size={20}
                color={colors.light.text}
              />
            </Button>
          }>
          <Menu.Item onPress={() => Alert.alert('View')} title="View details" />
          <Menu.Item
            onPress={() => {
              hanldeAddProduct ? hanldeAddProduct(id) : Alert.alert('Edit');
            }}
            title="Edit"
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              Alert.alert('Delete');
            }}
            title="Delete"
          />
        </Menu>
      </View>
    </>
  );
};

export default TableRow;
