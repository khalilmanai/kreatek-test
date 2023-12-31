import SidePanel from "@/components/sidePanel/SidePanel";
import "./globals.css";
import { CartProvider } from "@/context/context";

export const metadata = {
  title: "Kreatek Application",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <body>
          <SidePanel />
          {children}
        </body>
      </html>
    </CartProvider>
  );
}
