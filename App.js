import { StatusBar } from "expo-status-bar";
import Navigation from "./src/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/redux";
import { StripeProvider } from "@stripe/stripe-react-native";
import Constants from "expo-constants";

export default function App() {
	const { STRIPE_API_KEYS_TOKEN } = Constants.manifest.extra;

	return (
		<Provider store={store}>
			<StripeProvider publishableKey={STRIPE_API_KEYS_TOKEN}>
				<StatusBar style="auto" />

				<Navigation />
			</StripeProvider>
		</Provider>
	);
}
