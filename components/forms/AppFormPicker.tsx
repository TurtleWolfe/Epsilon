//TurtleWolfe.com // //custom components
//AppFormPicker
//AppFormPicker // //custom components
//AppFormPicker
//TurtleWolfe.com // //custom components
import React from 'react'
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./AppErrorMessage";

interface AppFormPickerProps {
  items?: any;
  name?: any;
  numberOfColumns?: number;
  // PickerItemComponent?: any,
  PickerItemComponent?: any,
  placeholder?: string;
  width?: number | string;
} // typeScript

const AppFormPicker: React.FC<AppFormPickerProps> = ({
  items,
  name,
  numberOfColumns = 1,
  PickerItemComponent,
  placeholder,
  width,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
} // AppFormPicker component

export default AppFormPicker
// default export of AppFormPicker