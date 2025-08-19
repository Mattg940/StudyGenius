import { Stack } from "expo-router";
import { t } from "@study-genius/i18n";

export default function RootLayout() {
	return <Stack screenOptions={{ headerShown: true, headerTitle: t('app.title', 'en') }} />;
}