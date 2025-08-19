import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

const roles = ["student", "parent", "teacher"] as const;

export default function Onboarding() {
	const [role, setRole] = useState<(typeof roles)[number] | null>(null);
	return (
		<View style={{ flex: 1, padding: 24, gap: 12 }}>
			<Text style={{ fontSize: 20, fontWeight: "600" }}>Choose your role</Text>
			<View style={{ flexDirection: "row", gap: 8 }}>
				{roles.map((r) => (
					<TouchableOpacity key={r} onPress={() => setRole(r)} style={{ padding: 10, borderWidth: 1, borderRadius: 8 }}>
						<Text>{r}</Text>
					</TouchableOpacity>
				))}
			</View>
			<Text>Selected: {role ?? "-"}</Text>
		</View>
	);
}