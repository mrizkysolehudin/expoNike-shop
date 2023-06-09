import {
	Button,
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { productsData } from "../dataDummy/productsData";

const ProductDetailsScreen = () => {
	const item = productsData[0];

	return (
		<View>
			<Image
				src={item.image}
				alt="product-image"
				style={styles.imageProduct}
			/>
			<View style={{ padding: 10 }}>
				<Text style={{ fontWeight: 700, fontSize: 28 }}>
					{item.name}
				</Text>
				<Text style={{ fontWeight: 600 }}>${item.price}</Text>
				<Text style={{ lineHeight: 22, paddingTop: 10 }}>
					{item.description.slice(0, 228)}
				</Text>
			</View>

			<TouchableOpacity
				activeOpacity={0.8}
				style={{
					position: "absolute",
					bottom: -110,
					width: "90%",
					backgroundColor: "black",
					alignSelf: "center",
					padding: 14,
					borderRadius: 30,
					alignItems: "center",
				}}>
				<Text style={{ color: "white", fontSize: 17, fontWeight: 600 }}>
					Add to cart
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
	imageProduct: {
		width: "100%",
		aspectRatio: 1,
	},
});
