'use client';
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Provider store={store}>
            <div className="flex flex-col min-h-screen w-full">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </Provider>
    );
}
