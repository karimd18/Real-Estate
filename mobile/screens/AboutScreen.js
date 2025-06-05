import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HeroSection from '../components/HeroSection';
import WhoWeAre from '../components/about/WhoWeAre';
import ClientTestimonials from '../components/ClientTestimonials';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HeroSection page="About" image={require('../assets/images/heroSection.jpg')} />
      <WhoWeAre />
      <ClientTestimonials />
      <AboutUs />
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
});

export default AboutScreen;
