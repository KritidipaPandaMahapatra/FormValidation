import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormInput from './FormInput';
import FormSubmitbtn from './FormSubmitbtn';

const validate = Yup.object({
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string().trim().required('This field is required'),
});
const LoginScreen = ({navigation}: any) => {
  const userInfo = {
    email: '',
    password: '',
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
          const {email, password} = values;
          return (
            <>
              <View style={styles.headertxt}>
                <Text style={styles.txt}>Login</Text>
              </View>
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
                value={password}
                error={touched.password && errors.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                label="Password"
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
      <View style={styles.bottomtxt}>
        <Text>
          Don't have an account?
          <Text
            style={styles.bottomtext}
            onPress={() => navigation.navigate('Signup')}>
            {' '}
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
};
export default LoginScreen;

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
  bottomtxt: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomtext: {
    color: 'blue',
    borderBottomWidth: 1,
    borderColor: 'blue',
  },
});
