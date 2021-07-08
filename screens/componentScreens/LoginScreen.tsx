//TurtleWolfe.com // //custom components
//LoginScreen
//LoginScreen // //custom components
//LoginScreen
//TurtleWolfe.com // //custom components
import React, { useState } from 'react'
import {
  Image,
  StyleSheet,
} from 'react-native'
import * as Yup from "yup";
// import jwtDecode from 'jwt-decode';

import Screen from "../../components/AppScreen";
import {
  AppErrorMessage,
  AppForm,
  AppFormField,
  AppSubmitButton
} from "../../components/forms";
import authApi from '../../api/auth'
// import AuthContext from '../../auth/context';
// import authStorage from '../../auth/storage';
import useAuth from '../../auth/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});// .matches() for regular expression

interface LoginScreenProps {
  // alpha?: string;
} // typeScript

const LoginScreen: React.FC<LoginScreenProps> = ({
  // alpha,
}) => {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }: any) => {
    const result = await authApi.login(email, password)
    if (!result.ok) return setLoginFailed(true);

    setLoginFailed(false);
    // const user = jwtDecode(result.data);
    // authContext.setUser(user);
    // // console.log(user); //auth token
    // authStorage.storeToken(result.data);
    auth.logIn(result.data);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo}
        source={require("../../assets/images/Turtlewolfe.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        // onSubmit={(values) => console.log(values)}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppErrorMessage
          error='Invalid email and/or password'
          visible={loginFailed}
        />
        <AppFormField
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
        />
        <AppFormField
          name="password"
          placeholder="Password"
          textContentType="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          secureTextEntry
        />
        <AppSubmitButton title="Login" />
      </AppForm>
    </Screen>
  )
} // LoginScreen component

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
}) // style sheet for LoginScreen

export default LoginScreen
// default export of LoginScreen