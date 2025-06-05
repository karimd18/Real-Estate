import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import SingleProjectScreen from "../screens/SingleProjectScreen";
import ProjectListScreen from "../screens/ProjectListScreen";
import PostListingScreen from "../screens/PostListingScreen";
import SearchFilterScreen from "../screens/SearchFilteringScreen";

const Stack = createStackNavigator();
const ProjectsStack = () => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: { backgroundColor: "#DCAC36" },
			headerTintColor: "#fff",
			headerShown: false,
		}}
	>
		<Stack.Screen name="Projects" component={ProjectsScreen} />
    <Stack.Screen name="ProjectList" component={ProjectListScreen} />
		<Stack.Screen name="SingleProject" component={SingleProjectScreen} />
	</Stack.Navigator>
);

const MainStack = () => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: { backgroundColor: "#DCAC36" },
			headerTintColor: "#fff",
			headerShown: false,
		}}
	>
		<Stack.Screen name="Home" component={HomeScreen} />
		<Stack.Screen name="Projects" component={ProjectsScreen} />
    <Stack.Screen name="ProjectList" component={ProjectListScreen} />
		<Stack.Screen name="SingleProject" component={SingleProjectScreen} />
	</Stack.Navigator>
);

const CustomHeader = ({ title, navigation }) => (
	<View
		style={{
			height: 60,
			backgroundColor: "#DCAC36",
			flexDirection: "row",
			alignItems: "center",
			paddingHorizontal: 10,
		}}
	>
		<TouchableOpacity onPress={() => navigation.openDrawer()}>
			<Ionicons name="menu" size={28} color="#fff" />
		</TouchableOpacity>
		<Text style={{ color: "#fff", fontSize: 20, marginLeft: 10 }}>{title}</Text>
	</View>
);

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
	return (
			<Drawer.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false,
					drawerActiveTintColor: "#DCAC36",
					drawerInactiveTintColor: "#000",
					drawerStyle: { backgroundColor: "#fff", width: 250 },
				}}
			>
				<Drawer.Screen
					name="Home"
					component={MainStack}
					options={{
						header: ({ navigation }) => (
							<CustomHeader title="Home" navigation={navigation} />
						),
					}}
				/>
				<Drawer.Screen name="Projects" component={ProjectsStack} />
        <Drawer.Screen name="Post a Listing" component={PostListingScreen} />
        <Drawer.Screen name="Search Project" component={SearchFilterScreen} />
				<Drawer.Screen
					name="About"
					component={AboutScreen}
					options={{
						header: ({ navigation }) => (
							<CustomHeader title="About" navigation={navigation} />
						),
					}}
				/>
				<Drawer.Screen
					name="Contact"
					component={ContactScreen}
					options={{
						header: ({ navigation }) => (
							<CustomHeader title="Contact" navigation={navigation} />
						),
					}}
				/>
			</Drawer.Navigator>
	);
};

export default AppNavigator;
