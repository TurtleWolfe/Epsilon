//TurtleWolfe.com // //custom components
//AppListItem
//AppListItem // //custom components
//AppListItem
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  Animated,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  // Text,
  View,
} from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
// import { TouchableOpacity } from 'react-native-gesture-handler';

import AppText from "../AppText";
import AppDeleteAction from "./AppListItemDeleteAction";

// import Palette from '../../constants/palette';
import defaultStyles from "../../constants/styles";

interface AppListItemProps {
  title?: string;
  subTitle?: string;
  // image?: string;
  image?: ImageSourcePropType;
  IconComponent?: React.ReactNode;
  appListImage?: {};
  appListItem?: {};
  onPress?: (event: GestureResponderEvent) => void;
  renderRightActions?: ((progressAnimatedValue: Animated.AnimatedInterpolation, dragAnimatedValue: Animated.AnimatedInterpolation) => React.ReactNode);
} // typeScript

const AppListItem: React.FC<AppListItemProps> = ({
  title,
  subTitle,
  image,
  IconComponent,
  appListImage,
  appListItem,
  onPress = () => console.log("appListItem"),
  renderRightActions = () => (
    <AppDeleteAction onPress={() => console.log("Render Right Actions")} />
  )
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={defaultStyles.palette.darkGrey}
        onPress={onPress}>
        <View style={[styles.container, appListItem]}>
          {IconComponent}
          {image &&
            <Image
              style={[styles.image, appListImage]}
              source={image} />}
          <View style={styles.detailsContainer}>
            {title && <AppText
              style={styles.title}
              numberOfLines={1}
            >
              {title}
            </AppText>}
            {subTitle && <AppText
              style={styles.subTitle}
              numberOfLines={3}
            >
              {subTitle}
            </AppText>}
          </View>
          <MaterialCommunityIcons
            name={'chevron-right'}
            color={defaultStyles.palette.danger}
            size={55}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
} // App List Item Component

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: defaultStyles.palette.lightGrey,
    // paddingLeft: 10,
    padding: 15,
    width: '100%',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
    // marginRight: 10,
  },
  image: {
    backgroundColor: defaultStyles.palette.highlight,
    borderRadius: 35,
    height: 70,
    // marginRight: 10,
    width: 70,

    // width: size,
    // height: size,
    // borderRadius: size / 2,
    // backgroundColor,
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    color: defaultStyles.palette.black,
    fontFamily: 'CharterBoldItalic',
    // fontSize: 20,
    fontWeight: '900',
    // marginVertical: 10,
  },
  subTitle: {
    color: defaultStyles.palette.mediumGrey,
    fontFamily: 'CharterBoldItalic',
    // fontSize: 25,
    fontWeight: '900',
    // marginVertical: 10,
  },
}) // Style Sheet for List Item

export default AppListItem