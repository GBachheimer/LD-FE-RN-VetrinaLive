import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './ExtensionCard.style';

type Props = {
  icon?: JSX.Element | React.ReactElement | undefined;
  title1?: string | undefined;
  title2?: string | undefined;
  subTitle?: string | undefined;
  color?: string | undefined;
};

const ExtensionCard = ({ icon, title1, title2, subTitle, color }: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.mainCardView, backgroundColor: color }}>
        {icon ? (
          icon
        ) : title1 ? (
          <>
            <Text style={styles.title1}>{title1}</Text>
            {title2 ? <Text style={styles.title2}>{title2}</Text> : null}
          </>
        ) : null}
      </View>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default ExtensionCard;
