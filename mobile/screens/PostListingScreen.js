import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import {
  villaData,
  apartmentsData,
  hotelApartmentsData,
  commercialData,
  administrativeData,
  medicalData,
  pharmaciesData,
  newCairoData,
} from "../data/data";

const PostListingScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [minimumMonths, setMinimumMonths] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [category, setCategory] = useState("villa");

  const handleAddListing = () => {
    if (!title || !monthlyRent || !minimumMonths || !description || !imageURL) {
      Alert.alert("Error", "Please fill out all fields!");
      return;
    }

    const newSingleProject = {
      id: Date.now(),
      image: imageURL,
      title,
      monthlyRent,
      minimumMonths,
      description,
    };

    switch (category) {
      case "villa":
        villaData.push(newSingleProject);
        break;
      case "apartments":
        apartmentsData.push(newSingleProject);
        break;
      case "hotelApartments":
        hotelApartmentsData.push(newSingleProject);
        break;
      case "commercial":
        commercialData.push(newSingleProject);
        break;
      case "administrative":
        administrativeData.push(newSingleProject);
        break;
      case "medical":
        medicalData.push(newSingleProject);
        break;
      case "pharmacies":
        pharmaciesData.push(newSingleProject);
        break;
      case "newCairo":
        newCairoData.push(newSingleProject);
        break;
      default:
        Alert.alert("Error", "Invalid category selected!");
        return;
    }

    Alert.alert("Success", `New project added to ${category} category!`);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.heading}>Add a Single Project</Text>

        {/* Dropdown to Select Category */}
        <Text style={styles.label}>Category</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={styles.picker}
            placeholder="Select Category"
          >
            <Picker.Item label="Villa" value="villa" />
            <Picker.Item label="Apartments" value="apartments" />
            <Picker.Item label="Hotel Apartments" value="hotelApartments" />
            <Picker.Item label="Commercial" value="commercial" />
            <Picker.Item label="Administrative" value="administrative" />
            <Picker.Item label="Medical" value="medical" />
            <Picker.Item label="Pharmacies" value="pharmacies" />
            <Picker.Item label="New Cairo" value="newCairo" />
          </Picker>
        </View>

        {/* Input Fields */}
        <Text style={styles.label}>Title</Text>
        <TextInput
          placeholder="Enter Project Title"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Monthly Rent</Text>
        <TextInput
          placeholder="Enter Monthly Rent"
          style={styles.input}
          value={monthlyRent}
          keyboardType="numeric"
          onChangeText={setMonthlyRent}
        />

        <Text style={styles.label}>Minimum Months</Text>
        <TextInput
          placeholder="Enter Minimum Months"
          style={styles.input}
          value={minimumMonths}
          keyboardType="numeric"
          onChangeText={setMinimumMonths}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          placeholder="Enter Project Description"
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />

        <Text style={styles.label}>Image URL</Text>
        <TextInput
          placeholder="Enter Image URL"
          style={styles.input}
          value={imageURL}
          onChangeText={setImageURL}
        />

        {/* Submit Button */}
        <View style={styles.buttonContainer}>
          <Button title="Add Project" onPress={handleAddListing} color="#DCAC36" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 50,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#DCAC36",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    marginBottom: 15,
    padding: 12,
    borderRadius: 5,
    fontSize: 16,
    color: "#000",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  picker: {
    height: 150,
    width: "100%",
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default PostListingScreen;
