import React from "react";

export default function DashLayout({ children }: { children: React.ReactNode }) {
	return <section className="p-6 max-w-5xl mx-auto">{children}</section>;
}