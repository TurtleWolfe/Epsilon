//TurtleWolfe.com // //custom components
//AppForm
//AppForm // //custom components
//AppForm
//TurtleWolfe.com // //custom components
import React from 'react'
import { Formik } from "formik";


interface AppFormProps {
  // initialValues?: { email: string; password: string;};
  initialValues?: any;
  // onSubmit?:() => void;
  onSubmit?: any;
  // validationSchema?: any;
  validationSchema?: {};//Yup.object()
  // children?: React.ReactNode;
  children?: {};
} // typeScript

const AppForm: React.FC<AppFormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  )
} // AppForm component

export default AppForm
// default export of AppForm