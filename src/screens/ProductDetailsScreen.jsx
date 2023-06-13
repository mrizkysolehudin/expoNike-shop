import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { productsData } from "../dataDummy/productsData";
import Button from "../components/Button";

const ProductDetailsScreen = ({ route }) => {
	const { id } = route.params;

	const item = productsData[id];

	return (
		<View>
			<Image
				src={item?.image}
				alt="product-image"
				style={styles.imageProduct}
			/>
			<View style={{ padding: 10 }}>
				<Text style={{ fontWeight: 700, fontSize: 28 }}>
					{item?.name}
				</Text>
				<Text style={{ fontWeight: 600 }}>${item?.price}</Text>
				<Text style={{ lineHeight: 22, paddingTop: 10 }}>
					{item?.description.slice(0, 228)}
				</Text>
			</View>

			<Button text="Add to cart" />
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
