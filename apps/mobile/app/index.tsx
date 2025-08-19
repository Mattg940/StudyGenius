import { Link } from "expo-router";
import { Text, View } from "react-native";
import { t } from "@study-genius/i18n";

export default function Home() {
	const lang = 'en';
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24, backgroundColor: "#f9fafb" }}>
			<Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 8 }}>{t('app.title', lang)}</Text>
			<Text style={{ color: "#4b5563", textAlign: "center", marginBottom: 16 }}>
				{t('app.tagline', lang)}
			</Text>
			<Link href="/onboarding" style={{ color: "#2563eb", textDecorationLine: "underline" }}>
				{t('onboarding.getStarted', lang)}
			</Link>
		</View>
	);
}