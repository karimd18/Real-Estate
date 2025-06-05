import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HeroSection from '../components/HeroSection';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const ContactScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HeroSection page="Contact" image={require('../assets/images/heroSection.jpg')} />
      <View style={styles.content}>
        <ContactForm />
        <ContactInfo />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  content: {
    padding: 15,
  },
});

export default ContactScreen;
