import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					contentStyle: { backgroundColor: "white" },
				}}>
				<Stack.Screen name="Products" component={ProductsScreen} />
				<Stack.Screen
					name="Product Detail"
					component={ProductDetailsScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
