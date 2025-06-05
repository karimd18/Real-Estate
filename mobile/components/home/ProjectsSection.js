import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
	Image,
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import {
	projectsData,
	villaData,
	apartmentsData,
	hotelApartmentsData,
	commercialData,
	administrativeData,
	medicalData,
	pharmaciesData,
	newCairoData,
} from "../../data/data";

const ProjectsSection = () => {
	const navigation = useNavigation();

	const categoryDataMap = {
		Villa: villaData,
		Apartment: apartmentsData,
		"Hotel Apartment": hotelApartmentsData,
		Commercial: commercialData,
		Administrative: administrativeData,
		Medical: medicalData,
		Pharmacies: pharmaciesData,
		"New Cairo": newCairoData,
	};

	const handleNavigateToList = (projectTitle) => {
		const categoryData = categoryDataMap[projectTitle];
		if (categoryData) {
			navigation.navigate("ProjectList", {
				projectData: categoryData,
				categoryTitle: projectTitle,
			});
		}
	};

	const renderItem = ({ item }) => (
		<TouchableOpacity
			key={item.id}
			style={styles.card}
			onPress={() => handleNavigateToList(item.title)}
		>
			<Image
				source={{ uri: item.image }}
				style={styles.image}
				resizeMode="cover"
			/>
			<View style={styles.content}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.description}>{item.description}</Text>
				<Text style={styles.link}>See More!</Text>
			</View>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Projects</Text>
			<FlatList
				data={projectsData}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.projectsList}
				snapToAlignment="center"
				decelerationRate="fast"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0D0D0D",
	},
	heading: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#DCAC36",
		textAlign: "center",
		marginVertical: 20,
	},
	projectsList: {
		alignItems: "center",
		paddingHorizontal: 10,
	},
	card: {
		backgroundColor: "#262626",
		borderRadius: 10,
		overflow: "hidden",
		width: 300, // Fixed card width
		marginHorizontal: 10, // Space between cards
	},
	image: {
		width: "100%",
		height: 200,
	},
	content: {
		padding: 15,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#fff",
		textTransform: "uppercase",
		marginBottom: 10,
	},
	description: {
		fontSize: 14,
		color: "rgba(255, 255, 255, 0.75)",
		marginBottom: 10,
	},
	link: {
		fontSize: 14,
		color: "#DCAC36",
		fontWeight: "bold",
	},
});

export default ProjectsSection;
