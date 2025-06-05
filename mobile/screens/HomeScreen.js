import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HeroSection from '../components/HeroSection';
import ClientTestimonials from '../components/ClientTestimonials';
import ProjectsSection from '../components/home/ProjectsSection';
import AboutUs from '../components/AboutUs';
import RequestCallback from '../components/RequestCallback';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HeroSection page="Home" image={require('../assets/images/heroSection.jpg')} />
      <ClientTestimonials />
      <ProjectsSection  />
      <AboutUs />
      <RequestCallback />
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

export default HomeScreen;
