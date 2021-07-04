// import { BlurView } from 'expo-blur';
//expo install expo-blur
import React, { useState, useEffect } from 'react';
import {
  // Platform,
  Text,
  View,
  StyleSheet
} from 'react-native';
// react & react native will both be expo's the tabs template
import * as Location from 'expo-location';
// expo install expo-location
import defaultStyles from '../../app/constants/styles';


export default function AppUseLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState('null');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      //maybe better for mobile, unresponsive in FireFox browser
      // let location = await Location.getLastKnownPositionAsync({});
      let {
        coords: { latitude, longitude },
        // } = await Location.getCurrentPositionAsync({});
      } = await Location.getCurrentPositionAsync({});
      setLocation({ latitude, longitude });
    })();
  }, []);

  let text = 'Waiting..';
  let long = 'Waiting..';
  if (!location) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location.latitude);
    long = JSON.stringify(location.longitude);
    console.log(location);
  }

  return (
    <View
      style={styles.container}
    // blurRadius={10}
    >
      {/* <BlurView
        intensity={50}
        style={[StyleSheet.absoluteFill, styles.container]}
      > */}
      <Text style={styles.latinLong}>Latitude:</Text>
      <Text style={styles.paragraph}>{text}</Text>
      <Text style={styles.latinLong}>Longitude</Text>
      <Text style={styles.paragraph}>{long}</Text>
      {/* </BlurView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,

  },
  latinLong: {
  },
  paragraph: {
    fontSize: 65,
    fontFamily: 'Sacremento',
    fontWeight: 'bold',
    opacity: .17,
    textDecorationLine: 'line-through',
    height: 45,
    width: 470,
    shadowOpacity: 1,
    color: defaultStyles.palette.danger,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 25,
    elevation: 25,
    borderWidth: 0.5,
    // borderColor: "white",
    backgroundColor: defaultStyles.palette.danger,
  },
});   //  app Use Location styles