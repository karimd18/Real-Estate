import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

const SingleProjectScreen = () => {
	const route = useRoute();
	const { project } = route.params;

	return (
		<ScrollView style={styles.container}>
			<Image source={{ uri: project.image }} style={styles.image} />
			<View style={styles.content}>
				<Text style={styles.title}>{project.title}</Text>
				<View style={styles.detailsContainer}>
					<Text style={styles.detailText}>
						<Text style={styles.label}>Monthly Rent: </Text>
						{project.monthlyRent}
					</Text>
					<Text style={styles.detailText}>
						<Text style={styles.label}>Minimum Months: </Text>
						{project.minimumMonths}
					</Text>
				</View>
				<Text style={styles.description}>{project.description}</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: { 
		flex: 1, 
		backgroundColor: "#0D0D0D" 
	},
	image: { 
		width: "100%", 
		height: 250, 
		marginBottom: 15 
	},
	content: { 
		padding: 15 
	},
	title: {
		fontSize: 26,
		fontWeight: "bold",
		color: "#DCAC36",
		marginBottom: 15,
		textAlign: "center",
		textTransform: "uppercase",
	},
	detailsContainer: {
		marginBottom: 15,
	},
	detailText: {
		fontSize: 16,
		color: "rgba(255, 255, 255, 0.9)",
		marginBottom: 8,
	},
	label: {
		fontWeight: "bold",
		color: "#DCAC36",
	},
	description: {
		fontSize: 14,
		color: "rgba(255, 255, 255, 0.75)",
		lineHeight: 22,
		textAlign: "justify",
	},
});

export default SingleProjectScreen;
