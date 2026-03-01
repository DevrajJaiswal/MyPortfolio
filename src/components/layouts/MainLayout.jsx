import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import Button from "../ui/Button";

function MainLayout() {
    return (
        <>
            <Header />
            <main className="">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;