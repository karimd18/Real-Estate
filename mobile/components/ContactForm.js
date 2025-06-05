import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Button from './Button';

const ContactForm = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    const { firstName, lastName, phone } = values;

    if (!firstName || !lastName || !phone) {
      Alert.alert('Error', 'Please fill all required fields.');
      return;
    }

    Alert.alert('Success', 'Your request has been submitted successfully.');
    setValues({ firstName: '', lastName: '', phone: '', email: '', message: '' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Request A Callback</Text>
      <Text style={styles.description}>
        Submit your contact information and any questions you have in mind, and we will happily assist you.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="First Name *"
        placeholderTextColor="#aaa"
        value={values.firstName}
        onChangeText={(text) => handleInputChange('firstName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name *"
        placeholderTextColor="#aaa"
        value={values.lastName}
        onChangeText={(text) => handleInputChange('lastName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone *"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
        value={values.phone}
        onChangeText={(text) => handleInputChange('phone', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={values.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Message"
        placeholderTextColor="#aaa"
        value={values.message}
        onChangeText={(text) => handleInputChange('message', text)}
        multiline={true}
        numberOfLines={4}
      />

      <Button onPress={handleSubmit}>Submit</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161616',
    padding: 20,
    borderRadius: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.75)',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#262626',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default ContactForm;
