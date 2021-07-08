//TurtleWolfe.com // //custom components
//AccountScreen
//AccountScreen // //custom components
//AccountScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
// import AuthContext from '../../auth/context';
// import authStorage from '../../auth/storage';
import useAuth from '../../auth/useAuth';

import AppIcon from "../../components/AppIcon";
import AppScreen from "../../components/AppScreen";
import AppListItem from "../../components/lists/AppListItem";
import ListItemSeparator from "../../components/lists/AppListItemSeparator";
import Palette from '../../constants/palette';


interface AccountScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  delta?: number;
  epsilon?: number[]
  navigation?: any;
  children?: React.ReactNode[];
  AccountScreen?: string;
}

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: Palette.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: Palette.secondary,
    },
    targetScreen: 'Messages'
  },
];

const AccountScreen: React.FC<AccountScreenProps> = ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  navigation,
  children = <Text>default AccountScreen</Text>,
  AccountScreen = 'AccountScreen',
}) => {
  const { user, logOut } = useAuth();

  // const handleLogOut = () => {
  //   logOut();
  // }

  return (
    <AppScreen style={styles.screen}>
      <View style={styles.menuContainer}>
        <AppListItem
          title={user.name}
          subTitle={user.email}
          image={require("../../assets/images/Turtlewolfe.png")}
        // appListImage={
        //   styles.applistImage
        // }
        />
      </View>
      <View style={styles.menuContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <AppListItem
        title="Log Out"
        IconComponent={<AppIcon
          name="logout"
          // backgroundColor="#ffe66d"
          backgroundColor={Palette.danger}
        />}
        onPress={() => logOut()}
      />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Palette.darkGrey,
  },
  menuContainer: {
    marginVertical: 20,
  },
  // applistImage: {
  //   backgroundColor: Palette.black,
  //   borderRadius: 25,
  //   height: 50,
  //   marginLeft: 10,
  //   // margin: 20,
  //   width: 50,
  // },
})

export default AccountScreen