import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getCurrentDate } from 'src/utils/getCurrentTime';
import { styles } from '../OrderInfoTab.style';

const ClientSection = ({ user }: any) => {
  return (
    <View style={styles.section}>
      <Text style={styles.date}>{getCurrentDate()}</Text>
      <Text style={styles.sectionTitle}>Client</Text>
      <Text style={styles.sectionText}>
        {user ? user.firstName + ' ' + user.lastName : 'Name'}
      </Text>
      <Text style={styles.link}>{user ? user.email : 'Email'}</Text>
      <View style={styles.rowSection}>
        <Text style={styles.sectionText}>Phone: </Text>
        <Text style={styles.link}>{user ? user.phone : 'Number'}</Text>
      </View>
      <Text style={styles.sectionText}>Tax Code: {user.ssn}</Text>
      <View style={styles.rowSection}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://seeklogo.com/images/W/whatsapp-logo-33F6A82887-seeklogo.com.png',
          }}
        />
        <Text style={styles.whatsapp}>Contact on Whatsapp</Text>
      </View>
      <View style={styles.rowSection}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2111/2111646.png',
          }}
        />
        <Text style={styles.link}>Contact on Telegram</Text>
      </View>
    </View>
  );
};

export default ClientSection;
