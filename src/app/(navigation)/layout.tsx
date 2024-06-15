import React from "react";
import NavigationMenu from "@/app/(navigation)/components/header/NavigationMenu";
import Footer from "@/app/(navigation)/components/footer/Footer";

const NavigationLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-none">
                <NavigationMenu/>
            </div>
            <div className="flex-1 pt-10 pl-48">
                {children}
            </div>
            <div className="flex-none">
                <Footer/>
            </div>
        </div>
    );
}

export default NavigationLayout;