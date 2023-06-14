import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

const CartItemCard = ({ item }) => {
	const [count, setCount] = useState(0);

	const handlePlus = () => {
		setCount(count + 1);
	};

	const handleMinus = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<View style={{ flexDirection: "row", margin: 10 }}>
			<Image
				src={item?.image}
				style={{ width: 160, height: 160, marginRight: 10 }}
			/>

			<View
				style={{
					flexDirection: "column",
					justifyContent: "space-between",
				}}>
				<View>
					<Text style={{ fontWeight: 700, fontSize: 20 }}>{item?.name}</Text>
					<Text>Size: {item?.sizes[0]}</Text>
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
						<Text style={{ marginHorizontal: 6, fontSize: 16 }}>{count}</Text>
						<Feather
							onPress={handleMinus}
							name="minus-circle"
							size={22}
							color="gray"
						/>
					</View>
					<Text style={{ fontWeight: "700", fontSize: 16 }}>${item?.price}</Text>
				</View>
			</View>
		</View>
	);
};

export default CartItemCard;
