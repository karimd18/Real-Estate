import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { aboutUsData } from "../data/data";

const { width } = Dimensions.get("window"); // Get screen width to calculate card size

const AboutUs = () => {
  return (
    <View style={styles.container}>
      {aboutUsData.map((item) => (
        <View
          key={item.id}
          style={[styles.card, { backgroundColor: item.bgColor }]}
        >
          <Image source={{uri: item.image}} style={styles.image} resizeMode="contain" />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column", // Stack items vertically
    paddingHorizontal: 10,
    marginTop: 10,
  },
  card: {
    width: "100%", // Each card takes the full width
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#262626", // Default background color
  },
  image: {
    width: 100, // Fixed image size
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.75)",
    textAlign: "center",
  },
});

export default AboutUs;
