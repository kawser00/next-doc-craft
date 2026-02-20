import { getDocuments } from "@/lib/doc";
import { Inter } from "next/font/google";
import "./globals.css";
import Loading from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DocuCraft - A documentation website by Protocol",
  description: "A documentation website by Protocol",
};

export default function RootLayout({ children }) {
  const allDocuments = getDocuments();
  console.log(allDocuments);

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <div className="h-screen lg:ml-72 xl:ml-80">
          <Loading />
          {/* {children} */}
        </div>
      </body>
    </html>
  );
}
