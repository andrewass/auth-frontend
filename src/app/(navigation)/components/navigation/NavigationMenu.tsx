import Link from "next/link";
import AuthButton from "@/app/(navigation)/components/navigation/AuthButton";


const NavigationMenu = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>Placeholder</li>
                        <li>Clients</li>
                        <li>Profile</li>
                        <li><a>{<AuthButton/>}</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Custom Auth Server</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Placeholder</a></li>
                    <li><Link href="/clients"> Clients</Link></li>
                    <li><Link href="/profile">Profile</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">{<AuthButton/>}</a>
            </div>
        </div>
    );
}

export default NavigationMenu;