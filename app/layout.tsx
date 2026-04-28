import Header from "./header";
import Footer from "./footer";
import "./globals.css"
import { ThemeProvider } from "next-themes";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}){
    return (
        <html lang="ko">
            <body>
                <ThemeProvider attribute="class">
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}