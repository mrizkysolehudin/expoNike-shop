import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../redux/slices/cartSlice";

const CartItemCard = ({ item }) => {
	const dispatch = useDispatch();

	const handlePlus = () => {
		dispatch(
			changeQuantity({
				productId: item?.product?._id,
				amount: 1,
			})
		);
	};

	const handleMinus = () => {
		dispatch(
			changeQuantity({
				productId: item?.product?._id,
				amount: -1,
			})
		);
	};

	return (
		<View style={{ flexDirection: "row", margin: 10 }}>
			<Image
				src={item?.product?.image}
				style={{ width: 160, height: 160, marginRight: 10 }}
			/>

			<View
				style={{
					flexDirection: "column",
					justifyContent: "space-between",
				}}>
				<View>
					<Text style={{ fontWeight: 700, fontSize: 20 }}>
						{item?.product?.name}
					</Text>
					<Text>Size: {item?.product?.sizes[0]}</Text>
				</View>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						width: "58%",
					}}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Feather onPress={handlePlus} name="plus-circle" size={22} color="gray" />
						<Text style={{ marginHorizontal: 6, fontSize: 16 }}>
							{item?.quantity}
						</Text>
						<Feather
							onPress={handleMinus}
							name="minus-circle"
							size={22}
							color="gray"
						/>
					</View>
					<Text style={{ fontWeight: "700", fontSize: 16 }}>
						${item?.product?.price}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default CartItemCard;
