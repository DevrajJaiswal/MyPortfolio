import Header from "../Header";
import Footer from "../Footer";
import { Outlet, useLocation } from "react-router-dom";

function MainLayout() {
    const isHome = useLocation().pathname === "/";
    return (
        <>
            <Header />
            <main className={isHome ? "home-main" : "page-main"}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;
