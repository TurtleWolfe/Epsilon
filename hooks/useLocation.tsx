import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {

      try {
        let { status } = await Location.requestBackgroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let {
          coords: { latitude, longitude },
          // } = await Location.getCurrentPositionAsync({});
          // get Last Known better for mobile, but unresponsive on FireFox blocking location
        } = await Location.getLastKnownPositionAsync({});
        setLocation({ latitude, longitude });
      } catch (error) {
        // console.log(error);
      }
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  // console.log(text);
  // console.log(location);
  return location;
} // useLocation Hook

export default useLocation;