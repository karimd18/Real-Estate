import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { headerData } from "../data/data";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window"); // Get screen width for responsiveness

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigation();

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <TouchableWithoutFeedback onPress={handleCloseMenu}>
      <View style={styles.headerContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToggleMenu} style={styles.menuIcon}>
            <Ionicons
              name={isMenuOpen ? "close" : "menu"}
              size={28}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        {/* Menu Section */}
        {isMenuOpen && (
          <ScrollView style={styles.menu}>
            {headerData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuItem}
                onPress={() => {
                  navigation.navigate(item.to);
                  handleCloseMenu();
                }}
              >
                <Text style={styles.menuText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    position: "relative",
    zIndex: 1000,
  },
  header: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#0D0D0D",
  },
  logo: {
    width: width * 0.2, // Responsive logo size (20% of screen width)
    height: 50,
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    position: "absolute",
    top: 80,
    right: 0,
    width: "70%",
    backgroundColor: "#0D0D0D",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 20,
    maxHeight: "80%", // Prevent menu overflow
    zIndex: 999,
  },
  menuItem: {
    marginVertical: 10,
  },
  menuText: {
    fontSize: 16,
    color: "#fff",
    textTransform: "uppercase",
  },
});

export default Header;
