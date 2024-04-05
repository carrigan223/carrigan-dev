import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Navigation from "./components/navigation/Navigation";
import Head from "next/head";
import ChatbotScript from "./utils/ChatBotScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carrigan Development",
  description: "Carrigan Development is a software developmet playground",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex-col h-screen">
        <Navigation />
        <Providers>{children}</Providers>
      </body>
      <ChatbotScript chatbotId="97" domain="carrigan.dev" />
    </html>
  );
}
