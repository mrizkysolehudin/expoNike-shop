import {
	ActivityIndicator,
	Alert,
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import CartItemCard from "../components/CartItemCard";
import { useDispatch, useSelector } from "react-redux";
import {
	clearCart,
	selectDeliveryPrice,
	selectSubtotal,
	selectTotal,
} from "../redux/slices/cartSlice";
import {
	useCreateOrderMutation,
	useCreatePaymentIntentMutation,
} from "../redux/api/apiSlice";
import { useStripe } from "@stripe/stripe-react-native";

const FooterCartTotal = () => {
	const subtotal = useSelector(selectSubtotal);
	const total = useSelector(selectTotal);
	const deliveryFee = useSelector(selectDeliveryPrice);

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
				<Text style={styles.gray}>{subtotal?.toFixed(2)} US$</Text>
				<Text style={styles.gray}>{deliveryFee?.toFixed(2)} US$</Text>
				<Text style={{ fontWeight: "800" }}>{total?.toFixed(2)} US$</Text>
			</View>
		</View>
	);
};

const ShoppingCartScreen = () => {
	const cartItems = useSelector((state) => state.cart.items);
	const subtotal = useSelector(selectSubtotal);
	const total = useSelector(selectTotal);
	const deliveryFee = useSelector(selectDeliveryPrice);

	const dispatch = useDispatch();
	const [createOrder, { isLoading }] = useCreateOrderMutation();

	const [createPaymentIntent] = useCreatePaymentIntentMutation();
	const { initPaymentSheet, presentPaymentSheet } = useStripe();

	const handleCheckout = async () => {
		const res = await createPaymentIntent({
			amount: Math.floor(total * 100),
		});
		if (res.error) {
			console.log(res.error);
			Alert.alert("Error create payment");
			return;
		}

		const initResponse = await initPaymentSheet({
			merchantDisplayName: "rizky@office",
			paymentIntentClientSecret: res.data.paymentIntent,
		});
		if (initResponse.error) {
			console.log(initResponse.error);
			Alert.alert("Error initialize payment sheet");
			return;
		}

		const paymentResponse = await presentPaymentSheet();
		if (paymentResponse.error) {
			console.log(paymentResponse.error);
			Alert.alert(
				`Error code: ${paymentResponse.error.code}. Error message: ${paymentResponse.error.message}`
			);
			return;
		}

		// if payment success
		handleCreateOrder();
	};

	const handleCreateOrder = async () => {
		const result = await createOrder({
			items: cartItems,
			subtotal,
			deliveryFee,
			total,
			customer: {
				name: "rizky",
				address: "Indonesia",
				email: "rizky@office.com",
			},
		});

		if (result.data?.status === "OK") {
			Alert.alert(
				"Order has been submitted",
				`Your order reference is: ${result.data.data.ref}`
			);
			dispatch(clearCart());
		}
	};

	return (
		<View style={{ position: "relative" }}>
			{cartItems.length > 0 ? (
				<>
					<FlatList
						data={cartItems}
						renderItem={({ item }) => <CartItemCard item={item} />}
						ListFooterComponent={FooterCartTotal}
					/>

					<TouchableOpacity
						onPress={handleCheckout}
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
							{isLoading && <ActivityIndicator />}
						</Text>
					</TouchableOpacity>
				</>
			) : (
				<View
					style={{
						width: "100%",
						height: "90%",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Text style={{ fontSize: 20, color: "gray", fontWeight: 500 }}>
						No items
					</Text>
				</View>
			)}
		</View>
	);
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
	gray: { color: "gray", fontWeight: 600 },
});
