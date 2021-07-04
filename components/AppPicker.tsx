//TurtleWolfe.com // //custom components
//AppPicker
//AppPicker // //custom components
//AppPicker
//TurtleWolfe.com // //custom components
import React, { useState } from 'react'
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import Screen from "./AppScreen";
import defaultStyles from "../constants/styles";
import PickerItem from "./AppPickerItem";

interface AppPickerProps {
  icon?: any;
  // icon?: typeof MaterialCommunityIcons;
  items?: {
    label: string;
    value: number;
    backgroundColor?: string;
    icon?: string;
  }[];
  numberOfColumns?: number;
  onSelectItem?: any;
  // onSelectItem?: () => void;
  PickerItemComponent?: any,
  // PickerItemComponent?: ReactNode,
  placeholder?: string;
  selectedItem?: { label: string; value: number; };
  width?: number | string;
} // typeScript

// const categories = [
//   { label: 'Furniture', value: 1 },
//   { label: 'Clothing', value: 2 },
//   { label: 'Cameras', value: 3 },
// ]

const AppPicker: React.FC<AppPickerProps> = ({
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width = '100%',
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.palette.mediumGrey}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.palette.mediumGrey}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={modalVisible}
        animationType="slide">
        <Screen>
          <Button
            title="Close"
            onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  )
} // AppPicker component

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.palette.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    // width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.palette.mediumGrey,
    flex: 1,
  },
  text: {
    flex: 1,
  },
}) // style sheet for AppPicker

export default AppPicker
// default export of AppPicker