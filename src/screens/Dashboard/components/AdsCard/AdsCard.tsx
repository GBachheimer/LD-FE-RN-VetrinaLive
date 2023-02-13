import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from 'src/components/Card/Card';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from 'src/constants/colors';
import { styles } from './AdsCard.style';

const AdsCard = () => {
  return (
    <Card backColor={colors.light.newText}>
      <View style={styles.row}>
        <Image
          source={{
            uri: 'https://assets.stickpng.com/images/602e36fdd9ced200045a5798.png',
          }}
          style={styles.logo}
        />
        <Text style={{ ...styles.white, ...styles.title }}>Capterra</Text>
      </View>
      <View>
        <Text style={styles.white}>
          Write a <Text style={styles.green}> positive </Text>
          review on Capterra and receive the extension with
          <Text style={styles.bold}>50 additional products.</Text>
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={{ ...styles.green, ...styles.link }}>
          Write a review on Capterra!
        </Text>
        <AntDesign name="arrowright" size={24} color={colors.light.green} />
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
        <Image
          source={{
            uri: 'https://companieslogo.com/img/orig/TRST.L-5ada9c92.png?t=1663382464',
          }}
          style={styles.logo}
        />
        <Text style={{ ...styles.white, ...styles.title }}>Trutpilot</Text>
      </View>
      <View>
        <Text style={styles.white}>
          Show us your love by leaving a
          <Text style={styles.green}> positive </Text>review on trust pilot and
          receive the extension of
          <Text style={styles.bold}>50 additional products</Text>
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={{ ...styles.green, ...styles.link }}>
          Write a review on Trutpilot!
        </Text>
        <AntDesign name="arrowright" size={24} color={colors.light.green} />
      </View>
      <Text style={styles.footer}>* The two promotions are cumulative</Text>
    </Card>
  );
};

export default AdsCard;
