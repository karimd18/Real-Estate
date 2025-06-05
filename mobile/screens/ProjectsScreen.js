import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/home/ProjectsSection';

const ProjectsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HeroSection page="Projects" image={require('../assets/images/heroSection.jpg')} />
      <View style={styles.content}>
        <ProjectsSection />
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

export default ProjectsScreen;
