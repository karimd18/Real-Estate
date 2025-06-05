import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const ProjectListScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { projectData, categoryTitle } = route.params;

  const renderProjectItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("SingleProject", { project: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.details}>Description: {item.description}</Text>
        <Text style={styles.link}>See More!</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{categoryTitle} Projects</Text>
      <FlatList
        data={projectData}
        renderItem={renderProjectItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#DCAC36",
    textAlign: "center",
    marginVertical: 20,
    textTransform: "uppercase",
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#262626",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  details: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.75)",
    marginBottom: 5,
  },
  link: {
    fontSize: 14,
    color: "#DCAC36",
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default ProjectListScreen;
