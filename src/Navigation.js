import { Text, Pressable } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import TrackOrderScreen from "./screens/TrackOrderScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					contentStyle: { backgroundColor: "white" },
				}}>
				<Stack.Screen
					name="Products"
					component={ProductsScreen}
					options={({ navigation }) => ({
						headerLeft: () => (
							<MaterialCommunityIcons
								onPress={() =>
									navigation.navigate("Track Order")
								}
								name="truck-delivery"
								size={23}
								color="gray"
								style={{ marginTop: 4, marginRight: 10 }}
							/>
						),
						headerRight: () => (
							<Pressable
								onPress={() =>
									navigation.navigate("Shopping Cart")
								}
								style={{ flexDirection: "row" }}>
								<FontAwesome5
									name="shopping-cart"
									size={18}
									color="gray"
									style={{ marginTop: 10 }}
								/>
								<Text
									style={{
										marginTop: -2,
										fontWeight: 500,
										fontSize: 16,
										marginLeft: 4,
									}}>
									1
								</Text>
							</Pressable>
						),
					})}
				/>
				<Stack.Screen
					name="Product Details"
					component={ProductDetailsScreen}
					options={{ presentation: "modal" }}
				/>
				<Stack.Screen
					name="Shopping Cart"
					component={ShoppingCartScreen}
				/>
				<Stack.Screen name="Track Order" component={TrackOrderScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
