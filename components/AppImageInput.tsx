//TurtleWolfe.com // //custom components
//AppImageInput
//AppImageInput // //custom components
//AppImageInput
//TurtleWolfe.com // //custom components
import React, {
  useEffect,
  // useState 
} from 'react'
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";

import defaultStyles from "../constants/styles";
interface AppImageInputProps {
  imageUri?: any;
  onChangeImage?: any;
} // typeScript

const AppImageInput: React.FC<AppImageInputProps> = ({
  imageUri,
  onChangeImage,
}) => {
  // const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const handlePress = () => {
    if (!imageUri) pickImage()
    else Alert.alert('Delete', 'Are you sure you want to delete this Image?', [{ text: 'Yes', onPress: () => onChangeImage(null) },
    { text: 'No' }])
  }

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
      });

      console.log(result);

      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log('Error reading an image', error);

    }

  };

  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
    >
      <View style={styles.container}>

        {!imageUri && <MaterialCommunityIcons
          color={defaultStyles.palette.mediumGrey}
          name='camera'
          size={40}
        />}

        {imageUri && <Image
          source={{ uri: imageUri }}
          style={styles.image}
        />}


        {/* <Text style={styles.textContainer}>
        {children}
      </Text> */}
      </View>
    </TouchableWithoutFeedback>

  )
} // AppImageInput component

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: defaultStyles.palette.lightGrey,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    backgroundColor: 'yellow',
  },
}) // style sheet for AppImageInput

export default AppImageInput
// default export of AppImageInput