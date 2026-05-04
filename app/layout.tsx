import Header from "./header";
import Footer from "./footer";
import "./globals.css"
import { ThemeProvider } from "next-themes";
import Cursor from "./Cursor";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}){
    return (
        <html lang="ko">
            <body>
                <Cursor /> {/* 여기에 추가 */}
                <ThemeProvider attribute="class">
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}