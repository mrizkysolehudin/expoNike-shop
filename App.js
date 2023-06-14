import { StatusBar } from "expo-status-bar";
import Navigation from "./src/Navigation";
import { Provider } from "react-redux";

export default function App() {
	return (
		<Provider>
			<StatusBar style="auto" />
			<Navigation />
		</Provider>
	);
}
