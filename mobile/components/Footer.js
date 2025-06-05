import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { footerIcons, headerData } from '../data/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <View style={styles.container}>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Who we are?</Text>
        <Text style={styles.text}>
          New Capital is a real estate consultancy company proudly serving thousands of satisfied
          clients and partnering with the top real estate developers in Egypt.
        </Text>
      </View>

      {/* Social Media Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Follow Us</Text>
        <View style={styles.iconContainer}>
          {footerIcons.map((item) => {
            const Icon = item.icon;
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => Linking.openURL(item.link)}
                style={styles.iconWrapper}
              >
                <Icon size={24} color="#DCAC36" />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Footer Bottom */}
      <View style={styles.bottom}>
        <Text style={styles.text}>© {currentYear} New Capital. All Rights Reserved.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0D0D',
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DCAC36',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  link: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.75)',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  iconWrapper: {
    marginRight: 10,
  },
  bottom: {
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingTop: 10,
  },
});

export default Footer;
