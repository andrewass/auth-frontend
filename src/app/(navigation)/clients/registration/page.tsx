import LeftMenu from "@/app/(navigation)/clients/registration/LeftMenu";
import RightMenu from "@/app/(navigation)/clients/registration/RightMenu";


export default function ClientRegistration() {

    return (
        <div className="flex">
            <div className="flex-none">
                <LeftMenu/>
            </div>
            <div className="flex-1">
                <RightMenu/>
            </div>
        </div>
    );

}