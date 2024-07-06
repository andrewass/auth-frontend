import Link from "next/link";

const LeftMenu = () => {
    return (
        <div className="ml-10 mr-5 mt-20 gap-5 flex flex-col">
            <Link href={"/clients"}> Clients</Link>
            <Link href={"/profile"}>Profile</Link>
            <Link href={"/profile"}>Placeholder</Link>
        </div>
    );
}

export default LeftMenu;

