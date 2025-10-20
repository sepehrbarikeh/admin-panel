import Link from "next/link";


export default function Footer() {
    return (
        <>
            <div className="ltr flex justify-between border-t border-dashed border-gray-400 py-4 text-gray-800 dark:text-gray-300 mx-10">
                <div>
                    2025 ® Admin Panel By Sepehr
                </div>
                <div>
                    <Link target="_blank" className="mx-3" href={"https://sepehr-nine.vercel.app/"}>About</Link>
                    <Link target="_blank" className="mx-3" href={"https://sepehr-nine.vercel.app/"}>Support</Link>
                    <Link target="_blank" className="mx-3" href={"https://sepehr-nine.vercel.app/"}>Contact Us</Link>
                </div>
            </div>
        </>
    )
}