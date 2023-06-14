import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";
import { useGetProductByidQuery } from "../redux/api/apiSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductDetailsScreen = ({ route, navigation }) => {
	const { _id } = route.params;
	const { data } = useGetProductByidQuery(_id);

	const item = data?.data;

	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(addToCart({ product: item }));
		navigation.navigate("Shopping Cart");
	};

	return (
		<View>
			<Image src={item?.image} alt="product-image" style={styles.imageProduct} />
			<View style={{ padding: 10 }}>
				<Text style={{ fontWeight: 700, fontSize: 28 }}>{item?.name}</Text>
				<Text style={{ fontWeight: 600 }}>${item?.price}</Text>
				<Text style={{ lineHeight: 22, paddingTop: 10 }}>
					{item?.description?.slice(0, 228)}
				</Text>
			</View>

			<Button onPress={handleAddToCart} text="Add to cart" />
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
