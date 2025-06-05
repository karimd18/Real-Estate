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
import { useRoute, useNavigation } from "@react-navigation/native";
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

const ProjectList = () => {
	const route = useRoute();
	const navigation = useNavigation();
	const { category } = route.params;

	// Data Mapping
	const dataMap = {
		Villa: villaData,
		Apartment: apartmentsData,
		"Hotel Apartment": hotelApartmentsData,
		Commercial: commercialData,
		Administrative: administrativeData,
		Medical: medicalData,
		Pharmacies: pharmaciesData,
		"New Cairo": newCairoData,
	};

	const selectedData = dataMap[category] || [];
	const [filteredData, setFilteredData] = useState(selectedData);
	const [searchQuery, setSearchQuery] = useState("");

	// Handle Search
	const handleSearch = (query) => {
		setSearchQuery(query);
		const filtered = selectedData.filter((item) =>
			item.title.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredData(filtered);
	};

	const renderProject = ({ item }) => (
		<TouchableOpacity
			style={styles.card}
			onPress={() => navigation.navigate("SingleProject", { project: item })}
		>
			<Image source={{ uri: item.image }} style={styles.image} />
			<View style={styles.cardContent}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.detail}>
					Monthly Rent:{" "}
					<Text style={styles.highlight}>{item.monthlyRent} EGP</Text>
				</Text>
				<Text style={styles.detail}>
					Minimum Months:{" "}
					<Text style={styles.highlight}>{item.minimumMonths}</Text>
				</Text>
				<Text style={styles.description}>{item.description}</Text>
			</View>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>{category} Projects</Text>
			
			{/* Search Input */}
			<TextInput
				style={styles.searchBar}
				placeholder="Search projects..."
				placeholderTextColor="#ccc"
				value={searchQuery}
				onChangeText={handleSearch}
			/>

			<FlatList
				data={filteredData}
				renderItem={renderProject}
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
		padding: 15,
	},
	heading: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#DCAC36",
		textAlign: "center",
		marginBottom: 10,
	},
	searchBar: {
		backgroundColor: "#262626",
		color: "#fff",
		padding: 10,
		borderRadius: 8,
		marginBottom: 15,
		fontSize: 16,
	},
	list: {
		paddingBottom: 20,
	},
	card: {
		backgroundColor: "#262626",
		marginBottom: 15,
		borderRadius: 10,
		overflow: "hidden",
		elevation: 2,
	},
	image: {
		width: "100%",
		height: 150,
	},
	cardContent: {
		padding: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#DCAC36",
		marginBottom: 5,
	},
	detail: {
		fontSize: 14,
		color: "#fff",
		marginBottom: 5,
	},
	highlight: {
		color: "#DCAC36",
		fontWeight: "bold",
	},
	description: {
		fontSize: 12,
		color: "rgba(255, 255, 255, 0.75)",
		marginTop: 5,
	},
});

export default ProjectList;
