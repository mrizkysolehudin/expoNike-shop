import {
	FlatList,
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import { productsData } from "../dataDummy/productsData";

const ProductsScreen = ({ navigation }) => {
	return (
		<FlatList
			data={productsData}
			renderItem={({ item }) => (
				<Pressable
					onPress={() => {
						navigation.navigate("Product Details", { id: item.id });
					}}
					style={styles.productCard}>
					<Image src={item.image} style={styles.imageProduct} />
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							paddingHorizontal: 9,
						}}>
						<Text style={{ fontWeight: 700, fontSize: 17 }}>
							{item.name}
						</Text>
						<Text
							style={{
								fontWeight: 700,
								color: "gray",
								fontSize: 17,
							}}>
							${item.price}
						</Text>
					</View>
				</Pressable>
			)}
			numColumns={2}
		/>
	);
};

export default ProductsScreen;

const styles = StyleSheet.create({
	productCard: {
		width: "50%",
		padding: 1,
		marginVertical: 12,
	},
	imageProduct: {
		width: "100%",
		aspectRatio: 1,
	},
});
