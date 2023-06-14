import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import { productsData } from "../dataDummy/productsData";
import CartItemCard from "../components/CartItemCard";
import { useSelector } from "react-redux";

const FooterCartTotal = () => {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				marginHorizontal: 10,
				borderTopWidth: 0.2,
				borderTopColor: "gray",
				paddingTop: 5,
				marginTop: 10,
				marginBottom: 480,
			}}>
			<View>
				<Text style={styles.gray}>Subtotal</Text>
				<Text style={styles.gray}>Delivery</Text>
				<Text style={{ fontWeight: "800" }}>Total</Text>
			</View>
			<View
				style={{
					flexDirection: "column",
					alignItems: "flex-end",
				}}>
				<Text style={styles.gray}>32,20 US$</Text>
				<Text style={styles.gray}>82,00 US$</Text>
				<Text style={{ fontWeight: "800" }}>8232,20 US$</Text>
			</View>
		</View>
	);
};

const ShoppingCartScreen = () => {
	const cartItems = useSelector((state) => state.cart.items);

	return (
		<View style={{ position: "relative" }}>
			<FlatList
				data={cartItems}
				renderItem={({ item }) => <CartItemCard item={item.product} />}
				ListFooterComponent={FooterCartTotal}
			/>

			<TouchableOpacity
				activeOpacity={0.8}
				style={{
					backgroundColor: "black",
					flexDirection: "row",
					justifyContent: "center",
					paddingTop: 13,
					paddingBottom: 15,
					width: "86%",
					alignSelf: "center",
					position: "absolute",
					bottom: 30,
					borderRadius: 30,
				}}>
				<Text style={{ color: "white", fontSize: 19, fontWeight: 700 }}>
					checkout
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
	gray: { color: "gray", fontWeight: 600 },
});
