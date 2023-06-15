import { StatusBar } from "expo-status-bar";
import Navigation from "./src/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/redux";
import { StripeProvider } from "@stripe/stripe-react-native";
import config from "./config";

export default function App() {
	return (
		<Provider store={store}>
			<StatusBar style="auto" />

			<StripeProvider publishableKey={config.STRIPE_API_KEYS_TOKEN}>
				<Navigation />
			</StripeProvider>
		</Provider>
	);
}
