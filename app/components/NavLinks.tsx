"use client";



import Link from "next/link";
import { FaFileInvoice, FaHome, FaUsers } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { twMerge } from 'tailwind-merge'


const links = [
    {
        title: "Dashboard",
        icon: <FaHome />,
        href: "/dashboard",
    },
    {
        title: "Invoices",
        icon: <FaFileInvoice />,
        href: "/dashboard/invoices",
    },
    {
        title: "Customers",
        icon: <FaUsers />,
        href: "/dashboard/customers",
    },

];
/* `"flex h-[48px] grow items-center justify-center gap-2 rounded-md 
                        bg-slate-700 text-lg text-white font-bold hover:bg-slate-500 
                        hover:text-white md:flex-none md:justify-start md:p-2 md:px-3"` */

const NavLinks = () => {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <>
            {links.map(x => {
                return (
                    <Link
                        key={x.title}
                        href={x.href}
                        className={twMerge(`flex h-[48px] grow items-center justify-center gap-2 rounded-md 
                        bg-slate-700 text-lg text-white font-bold hover:bg-slate-500 
                        hover:text-white md:flex-none md:justify-start md:p-2 md:px-3 `, pathname === x.href && "bg-slate-500")}
                    >
                        {x.icon}
                        <p>{x.title}</p>
                    </Link>


                );
            })}
        </>
    );
};

export default NavLinks;