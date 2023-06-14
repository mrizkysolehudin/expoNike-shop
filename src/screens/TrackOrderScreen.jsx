import {
	View,
	TextInput,
	ActivityIndicator,
	Text,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useGetOrderQuery, useGetOrdersQuery } from "../redux/api/apiSlice";

const TrackOrderScreen = () => {
	const [ref, setRef] = useState("");

	const {
		data: dataRef,
		isLoading: isLoadingRef,
		error: errorRef,
	} = useGetOrderQuery(ref);

	const customer = dataRef?.data?.customer;
	const items = dataRef?.data;

	const { data, isLoading, error } = useGetOrdersQuery();

	return (
		<ScrollView style={{ padding: 5, margin: 10 }}>
			<TextInput
				value={ref}
				onChangeText={setRef}
				placeholder="Input your order reference"
				style={{
					borderWidth: 1,
					paddingHorizontal: 10,
					paddingVertical: 4,
					fontSize: 16,
					borderRadius: 7,
				}}
			/>

			{isLoadingRef && <ActivityIndicator />}
			{errorRef && <Text>Order not found</Text>}
			{dataRef?.status === "OK" && (
				<View>
					<Text>{JSON.stringify(customer, null, 2)}</Text>
					<Text>{JSON.stringify(items)}</Text>
				</View>
			)}

			{isLoading && <ActivityIndicator />}
			{error && <Text>Order not found</Text>}
			{/* jika input ref kosong, maka get all orders  */}
			{!ref && data?.status === "OK" && (
				<View>
					<Text style={{ marginBottom: 6, fontWeight: 600 }}>All orders</Text>
					{data?.data?.map((item, index) => (
						<View style={{ marginTop: 3 }}>
							<Text key={index} style={{ color: "gray" }}>
								{" "}
								order ke-{index + 1}:{" "}
								<Text style={{ color: "red" }}>
									{JSON.stringify(item?.items[0]?.product?.name)?.replace(/"/g, "")}
								</Text>
							</Text>

							<Text> {JSON.stringify(item?.customer)}</Text>
						</View>
					))}
				</View>
			)}
		</ScrollView>
	);
};

export default TrackOrderScreen;
