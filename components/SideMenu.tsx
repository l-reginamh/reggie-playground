import { siteConfig } from "@/config/site"
import Link from "next/link";

export default function SideMenu() {
    const menus = siteConfig.pages;
    return (
        <div className="flex flex-col">
            {
                menus.map((menu, i) => (
                    <div key={i} className="">
                        <Link href={menu.path} className="w-full flex p-5">
                            <span className="w-full">{menu.title}</span>
                        </Link>
                        {menu.description}
                        {menu.path}
                    </div>
                ))
            }
        </div>
    )
}