//TurtleWolfe.com // //custom components
//MessagesScreen
//MessagesScreen // //custom components
//MessagesScreen
//TurtleWolfe.com // //custom components
import React, { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  // View,
} from 'react-native'

import AppScreen from "../../components/AppScreen";
import AppListItem from "../../components/lists/AppListItem";
import AppSeparator from "../../components/lists/AppListItemSeparator";
import AppDeleteAction from "../../components/lists/AppListItemDeleteAction";
// import Palette from '../../constants/palette';

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/images/Turtlewolfe.png"),
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis rhoncus auctor. Aenean feugiat sem non est luctus pellentesque.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis rhoncus auctor. Aenean feugiat sem non est luctus pellentesque. Morbi aliquet dolor leo, quis pellentesque tortor varius et. Etiam volutpat nec enim a scelerisque. Praesent eget condimentum risus, vitae ornare turpis. Sed vel felis luctus, fringilla neque sit amet, egestas libero. Curabitur lobortis pulvinar hendrerit. Mauris ornare magna eu ante viverra iaculis. Quisque nec elementum lorem. Curabitur volutpat porta ligula, tristique scelerisque nibh posuere eget. Sed ac nunc nibh. Duis efficitur laoreet lorem eu eleifend. Duis rutrum fermentum aliquet. ",
    image: require("../../assets/images/Turtlewolfe.png"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../../assets/images/Turtlewolfe.png"),
  },
  {
    id: 4,
    title: "T4",
    description: "D4",
    image: require("../../assets/images/Turtlewolfe.png"),
  },
];//array of defualt dumby data

interface MessagesScreenProps {
  alpha?: string;
  beta?: string;
  gamma?: string[];
  messages?: {}[];
  // message?: {};
  item?: React.ReactNode;
  children?: React.ReactNode;
  MessagesScreen?: string;
}// typeS

const MessagesScreen: React.FC<MessagesScreenProps> = ({
  alpha,
  beta,
  gamma,
  // messages,
  // message,
  item,
  children = <Text>default MessagesScreen</Text>,
  MessagesScreen = 'MessagesScreen',
}) => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: {
    id: number,
    title?: string,
    description?: string,
    image?: string
  }) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };// called from App List Item Delete Action

  return (
    <AppScreen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <AppListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <AppDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={AppSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../../assets/images/Turtlewolfe.png"),
            },
            {
              id: 4,
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis rhoncus auctor. Aenean feugiat sem non est luctus pellentesque.",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis rhoncus auctor. Aenean feugiat sem non est luctus pellentesque. Morbi aliquet dolor leo, quis pellentesque tortor varius et. Etiam volutpat nec enim a scelerisque. Praesent eget condimentum risus, vitae ornare turpis. Sed vel felis luctus, fringilla neque sit amet, egestas libero. Curabitur lobortis pulvinar hendrerit. Mauris ornare magna eu ante viverra iaculis. Quisque nec elementum lorem. Curabitur volutpat porta ligula, tristique scelerisque nibh posuere eget. Sed ac nunc nibh. Duis efficitur laoreet lorem eu eleifend. Duis rutrum fermentum aliquet. ",
              image: require("../../assets/images/Turtlewolfe.png"),
            },
          ]);
        }} //array of defualt dumby data after refresh
      />
    </AppScreen>
  )
}//Message Screen

const styles = StyleSheet.create({
  container: {

  },
  textContainer: {
    // backgroundColor: 'yellow',
  },
})//style sheet for Message Screen

export default MessagesScreen