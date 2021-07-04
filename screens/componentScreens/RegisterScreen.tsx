//TurtleWolfe.com // //custom components
//RegisterScreen
//RegisterScreen // //custom components
//RegisterScreen
//TurtleWolfe.com // //custom components
import React from 'react'
import {
  StyleSheet,
} from 'react-native'
import * as Yup from "yup";

import Screen from "../../components/AppScreen";
import {
  AppForm as Form,
  AppFormField as FormField,
  AppSubmitButton,
} from "../../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
interface RegisterScreenProps {
} // typeScript

const RegisterScreen: React.FC<RegisterScreenProps> = ({
}) => {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppSubmitButton title="Register" />
      </Form>
    </Screen>
  )
} // RegisterScreen component

const styles = StyleSheet.create({
  container: {
    padding: 10,

  },
  // textContainer: {
  //   backgroundColor: 'yellow',
  // },
}) // style sheet for RegisterScreen

export default RegisterScreen
// default export of RegisterScreen