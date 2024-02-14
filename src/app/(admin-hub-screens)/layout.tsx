import DashboardLayout from "@/components/layouts/admin-hub/dashboard/dashboard-layout";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "FMC Admin Hub",
  description: "FMC Admin Hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
