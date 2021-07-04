import { DefaultTheme } from "@react-navigation/native";
// import colors from "../config/colors";
import defaultStyles from "../constants/styles";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: defaultStyles.palette.primary,
    // background: defaultStyles.palette.danger,
    background: 'purple',
  },
};
