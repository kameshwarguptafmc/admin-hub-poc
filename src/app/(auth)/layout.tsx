import AuthLayout from "@/components/layouts/auth-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FMC Arc Login",
  description: "Please login to start",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
