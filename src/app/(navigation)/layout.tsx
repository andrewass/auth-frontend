import React from "react";
import HeaderMenu from "@/app/(navigation)/components/header/HeaderMenu";
import Footer from "@/app/(navigation)/components/footer/Footer";
import LeftMenu from "@/app/(navigation)/components/leftmenu/LeftMenu";

const NavigationLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-none">
                <HeaderMenu/>
            </div>
            <div className="flex-1 flex">
                <div className="flex-none">
                    <LeftMenu/>
                </div>
                <div className="flex-1 flex mt-24 justify-center">
                    {children}
                </div>
            </div>
            <div className="flex-none">
                <Footer/>
            </div>
        </div>
    );
}

export default NavigationLayout;