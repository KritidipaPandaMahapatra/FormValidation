import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const FormInput = (props: any) => {
  const {placeholder, label, error} = props;
  return (
    <>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', color: '#1b1b33'}}>{label}</Text>
        {error ? (
          <Text style={{color: 'red', fontSize: 16}}>{error}</Text>
        ) : null}
      </View>
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
    </>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#1b1b33',
    height: 35,
    margin: 10,
  },
});
