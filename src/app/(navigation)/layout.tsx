import React from "react";
import NavigationMenu from "@/app/(navigation)/components/header/NavigationMenu";
import Footer from "@/app/(navigation)/components/footer/Footer";

const NavigationLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <section>
            <NavigationMenu/>
            {children}
        </section>
    );
}

export default NavigationLayout;