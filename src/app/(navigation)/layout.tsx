import React from "react";
import NavigationMenu from "@/app/(navigation)/components/navigation/NavigationMenu";

const NavigationLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <section>
            <NavigationMenu/>
            {children}
        </section>
    );
}

export default NavigationLayout;