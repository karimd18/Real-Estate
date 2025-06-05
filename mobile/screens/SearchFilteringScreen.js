import React, { useState } from "react";
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Image,
	StyleSheet,
	TextInput,
} from "react-native";
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

import { Picker } from "@react-native-picker/picker";

const SearchFilterScreen = () => {
	// State for filters
	const [selectedCategory, setSelectedCategory] = useState("");
	const [monthlyRent, setMonthlyRent] = useState("");
	const [minimumDownPayment, setMinimumDownPayment] = useState("");
	const [title, setTitle] = useState("");

	// Combined data from all categories
	const allData = [
		...villaData,
		...apartmentsData,
		...hotelApartmentsData,
		...commercialData,
		...administrativeData,
		...medicalData,
		...pharmaciesData,
		...newCairoData,
	];

	// Filter Logic
	const filteredData = allData.filter((item) => {
		return (
			(!selectedCategory || item.category === selectedCategory) &&
			(!monthlyRent || item.monthlyRent <= parseInt(monthlyRent)) &&
			(!minimumDownPayment || item.minimumMonths >= parseInt(minimumDownPayment)) &&
			(!title || item.title.toLowerCase().includes(title.toLowerCase()))
		);
	});

	// Render Single Project Card
	const renderProject = ({ item }) => (
		<View style={styles.card}>
			<Image source={{ uri: item.image }} style={styles.image} />
			<View style={styles.content}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.details}>Monthly Rent: {item.monthlyRent} EGP</Text>
				<Text style={styles.details}>Minimum Months: {item.minimumMonths}</Text>
				<Text style={styles.details}>Category: {item.category}</Text>
			</View>
		</View>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Search and Filter</Text>

			{/* Filters */}
			<Text style={styles.label}>Category</Text>
			<Picker
				selectedValue={selectedCategory}
				style={styles.picker}
				onValueChange={(value) => setSelectedCategory(value)}
			>
				<Picker.Item label="All Categories" value="" />
				<Picker.Item label="Villa" value="Villa" />
				<Picker.Item label="Apartments" value="Apartments" />
				<Picker.Item label="Hotel Apartments" value="Hotel Apartments" />
				<Picker.Item label="Commercial" value="Commercial" />
				<Picker.Item label="Administrative" value="Administrative" />
				<Picker.Item label="Medical" value="Medical" />
				<Picker.Item label="Pharmacies" value="Pharmacies" />
				<Picker.Item label="New Cairo" value="New Cairo" />
			</Picker>

			<Text style={styles.label}>Monthly Rent (Max)</Text>
			<TextInput
				style={styles.input}
				keyboardType="numeric"
				placeholder="Enter max monthly rent"
				placeholderTextColor="#aaa"
				value={monthlyRent}
				onChangeText={setMonthlyRent}
			/>

			<Text style={styles.label}>Minimum Months (Min)</Text>
			<TextInput
				style={styles.input}
				keyboardType="numeric"
				placeholder="Enter minimum months"
				placeholderTextColor="#aaa"
				value={minimumDownPayment}
				onChangeText={setMinimumDownPayment}
			/>

			<Text style={styles.label}>Title</Text>
			<TextInput
				style={styles.input}
				placeholder="Search by title"
				placeholderTextColor="#aaa"
				value={title}
				onChangeText={setTitle}
			/>

			{/* Filtered Projects */}
			<FlatList
				data={filteredData}
				keyExtractor={(item) => item.id.toString()}
				renderItem={renderProject}
				ListEmptyComponent={
					<Text style={styles.noResult}>No matching projects found.</Text>
				}
				contentContainerStyle={styles.list}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0D0D0D",
		paddingHorizontal: 15,
		paddingTop: 20,
	},
	heading: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#DCAC36",
		textAlign: "center",
		marginBottom: 20,
	},
	label: {
		color: "#fff",
		fontSize: 16,
		marginBottom: 5,
	},
	picker: {
		backgroundColor: "#262626",
		color: "#fff",
		marginBottom: 15,
		borderRadius: 8,
	},
	input: {
		backgroundColor: "#262626",
		color: "#fff",
		padding: 10,
		borderRadius: 8,
		marginBottom: 15,
	},
	list: {
		paddingBottom: 20,
	},
	card: {
		backgroundColor: "#262626",
		marginBottom: 15,
		borderRadius: 10,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: 150,
	},
	content: {
		padding: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#DCAC36",
		marginBottom: 5,
	},
	details: {
		fontSize: 14,
		color: "rgba(255, 255, 255, 0.75)",
	},
	noResult: {
		color: "#fff",
		textAlign: "center",
		marginTop: 20,
	},
});

export default SearchFilterScreen;
