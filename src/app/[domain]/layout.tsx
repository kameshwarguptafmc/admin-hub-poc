import ArcDashboardLayout from "@/components/layouts/arc-dashboard/dashboard-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FMC Arc",
  description: "FMC Arc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ArcDashboardLayout>{children}</ArcDashboardLayout>;
}
