import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const FormSubmitbtn = ({title, submitting, onPress}: any) => {
  const backgroundColor = submitting
    ? 'rgba(27,27,51,0.4)'
    : 'rgba(27,27,51,1)';
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}]}
      onPress={!submitting ? onPress : null}>
      <Text style={{fontSize: 18, color: '#fff'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FormSubmitbtn;

const styles = StyleSheet.create({
  container: {
    height: 45,
    marginHorizontal: 25,
    marginVertical: 25,
    textAlign: 'center',
    backgroundColor: 'rgba(27,27,51,1)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
