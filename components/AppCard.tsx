//TurtleWolfe.com // //custom components
//AppCard
//AppCard // //custom components
//AppCard
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  Image,
  // ImageRequireSource,
  // ImageSourcePropType,
  // ImageURISource,
  StyleSheet,
  View,
} from 'react-native'

import AppText from "./AppText";
import Palette from '../constants/palette';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface AppCardProps {
  title?: string;
  subTitle?: string;
  // image?: ImageURISource;
  // image?: (id: string)=> void;
  imageUrl?: string;
  onPress?: any;
}

const AppCard: React.FC<AppCardProps> = ({
  title = 'default AppCard title',
  subTitle = 'default AppCard subTitle in "Charter Bold Italic"',
  imageUrl = require('../assets/images/Turtlewolfe.png'),
  onPress = (console.log('press appCard')),
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >

      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
        />
        <View style={styles.detailsContainer}>
          <AppText
            style={styles.title}
            numberOfLines={1}
          >
            {title}
          </AppText>
          <AppText
            style={styles.subTitle}
            numberOfLines={3}
          >
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
  card: {
    // backgroundColor: Palette.primary,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    width: "100%",
    // width: 100,
    // flex: 1,
  },
  image: {
    // backgroundColor: 'yellow',
    backgroundColor: Palette.secondary,
    height: 200,
    width: "100%",
    // width: 100,
    // flex: 1,
  },
  detailsContainer: {
    // backgroundColor: Palette.lightGrey,
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: Palette.secondary,
    fontFamily: "CharterBoldItalic",
    // fontFamily: "MonoSpace",
    fontWeight: "900",
  },
})

export default AppCard