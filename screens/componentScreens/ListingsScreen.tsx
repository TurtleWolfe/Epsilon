//TurtleWolfe.com // //custom components
//ListingsScreen
//ListingsScreen // //custom components
//ListingsScreen
//TurtleWolfe.com // //custom components
import React, { useState, useEffect } from 'react'
import {
  FlatList,
  StyleSheet,
} from 'react-native'

import AppActivityIndicator from '../../components/AppActivityIndicator';
import AppButton from '../../components/AppButton';
import AppCard from "../../components/AppCard";
import AppScreen from "../../components/AppScreen";
import AppText from '../../components/AppText';
import Palette from '../../constants/palette';
import listingsApi from '../../api/listings'
import routes from '../../navigation/routes'
import useApi from '../../hooks/useApi';

interface ListingsScreenProps {
  navigation?: any;
  // data?: {}[];
}

const ListingsScreen: React.FC<ListingsScreenProps> = ({
  navigation,
}) => {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <AppScreen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={getListingsApi.request} />
        </>
      )}
      <AppActivityIndicator
        visible={getListingsApi.loading}
      // size="large"
      />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 7,
    backgroundColor: Palette.lightGrey,
  },
})

export default ListingsScreen