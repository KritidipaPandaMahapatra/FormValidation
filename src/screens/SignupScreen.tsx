import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormInput from './FormInput';
import FormSubmitbtn from './FormSubmitbtn';
const validate = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, 'Name should contain atleast 3 digits')
    .max(20, 'Name cant exceed 20 digits')
    .required('This Field is required'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  phone: Yup.string()
    .trim()
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      'Enter valid Phone Number',
    )
    .required('This Filed is Required'),
  password: Yup.string()
    .trim()
    .min(8, 'Password in too short')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain atleast 8 Characters, One Uppercase, One Lowercase, One Number and one Character',
    )
    .required('This field is required'),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref('password'), 'Passwords do not match'],
      'Password does not match',
    )
    .required('This field is required'),
});
const SignupScreen = () => {
  const userInfo = {
    name: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Formik
        initialValues={userInfo}
        validationSchema={validate}
        onSubmit={values => console.log(values)}>
        {({
          values,
          handleChange,
          errors,
          handleBlur,
          touched,
          handleSubmit,
          isSubmitting,
        }) => {
          const {name, email, phone, password, cpassword} = values;
          return (
            <>
              <View style={styles.headertxt}>
                <Text style={styles.txt}>SignUp</Text>
              </View>
              <FormInput
                value={name}
                error={touched.name && errors.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                label="Name"
                placeholder="Kriti"
              />
              <FormInput
                value={email}
                error={touched.email && errors.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                label="Email"
                autoCapitalize="none"
                placeholder="example@gmail.com"
              />
              <FormInput
                value={phone}
                error={touched.phone && errors.phone}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                label="Phone"
                placeholder="0989098789"
              />
              <FormInput
                value={password}
                error={touched.password && errors.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                label="Password"
                autoCapitalize="none"
                placeholder="*******"
                secureTextEntry
              />
              <FormInput
                value={cpassword}
                error={touched.cpassword && errors.cpassword}
                onChangeText={handleChange('cpassword')}
                onBlur={handleBlur('cpassword')}
                label="Confirm Password"
                autoCapitalize="none"
                placeholder="*******"
                secureTextEntry
              />
              <FormSubmitbtn
                submitting={isSubmitting}
                title="Submit"
                onPress={handleSubmit}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  headertxt: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginHorizontal: 85,
    height: 50,
    backgroundColor: '#2E2EFF',
    elevation: 10,
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
