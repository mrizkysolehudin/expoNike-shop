import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ text, onPress }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
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
			<Text style={{ color: "white", fontSize: 17, fontWeight: 600 }}>{text}</Text>
		</TouchableOpacity>
	);
};

export default Button;
