import React from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";

type ButtonProps = {
	label: string;
	onPress?: () => void;
	style?: ViewStyle;
};

export function SGButton({ label, onPress, style }: ButtonProps) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[{ padding: 12, borderRadius: 8, backgroundColor: "#3b82f6" }, style]}>
				<Text style={{ color: "white", fontWeight: "600", textAlign: "center" }}>{label}</Text>
			</View>
		</TouchableOpacity>
	);
}