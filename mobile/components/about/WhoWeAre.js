import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const WhoWeAre = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Who We Are Section */}
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/office-1.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Who We Are</Text>
          <Text style={styles.description}>
            New Capital is a real estate consultancy company proudly serving thousands of
            satisfied clients and partnering with the top real estate developers in Egypt.
          </Text>
        </View>
      </View>

      {/* Our Vision Section */}
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Our Vision</Text>
          <Text style={styles.description}>
            Achieve the highest possible standards in the real estate field while establishing our
            company as the preferred real estate consultancy in Egypt.
          </Text>
        </View>
        <Image
          source={require('../../assets/images/vision.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0D0D',
    padding: 15,
  },
  card: {
    flexDirection: 'column',
    backgroundColor: '#222222',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: 20,
  },
});

export default WhoWeAre;
