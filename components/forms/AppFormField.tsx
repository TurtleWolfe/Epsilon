//TurtleWolfe.com // //custom components
//AppFormField
//AppFormField // //custom components
//AppFormField
//TurtleWolfe.com // //custom components
import React from 'react'
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./AppErrorMessage";

interface AppFormFieldProps {
  // name?: string;
  name?: string;
  autoCapitalize?: string;
  autoCorrect?: boolean;
  icon?: string;
  keyboardType?: string;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  placeholder?: string;
  secureTextEntry?: boolean;
  textContentType?: string;
  width?: string | number;
  otherProps?: {};
  // {
  //   otherProps?: any;
  //   children?: React.ReactNode;
  // };
} // typeScript

const AppFormField: React.FC<AppFormFieldProps> = ({
  name,
  width = '100%',
  ...otherProps
}) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
} // AppFormField component

// const styles = StyleSheet.create({
//   container: {

//   },
//   textContainer: {
//     backgroundColor: 'yellow',
//   },
// }) // style sheet for AppFormField

export default AppFormField
// default export of AppFormField