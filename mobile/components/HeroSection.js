import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

const { height, width } = Dimensions.get("window"); // Get screen dimensions for responsive design

const HeroSection = ({ image, page }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={image} // Ensure image source supports URI
        style={styles.heroContainer}
        imageStyle={styles.image}
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>{page}</Text>
          <Text style={styles.breadcrumb}>
            <Text style={styles.primaryText}>Home</Text> {" > "} {page}
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    height: height * 0.5, // Set hero height to 50% of screen height
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Ensure the image covers the container
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Add dark overlay for readability
  },
  content: {
    zIndex: 1,
    alignItems: "center",
    paddingHorizontal: 15, // Add padding for smaller screens
  },
  title: {
    fontSize: 28, // Reduced font size for better mobile readability
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
    marginBottom: 10,
    textAlign: "center",
  },
  breadcrumb: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
  primaryText: {
    color: "#DCAC36",
  },
});

export default HeroSection;
