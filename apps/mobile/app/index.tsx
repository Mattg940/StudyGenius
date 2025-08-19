import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
			<Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 8 }}>Study Genius</Text>
			<Text style={{ color: "#4b5563", textAlign: "center", marginBottom: 16 }}>
				All-in-one learning: AI tutor, chat, assignments.
			</Text>
			<Link href="/onboarding" style={{ color: "#2563eb", textDecorationLine: "underline" }}>
				Get started
			</Link>
		</View>
	);
}