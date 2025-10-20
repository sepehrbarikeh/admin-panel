import Image from "next/image"
import data from "../../public/data/brand/brand.json"
import { ChevronLeft, ChevronRight, EllipsisVertical, Plus } from "lucide-react"

function statusColor(status: string) {
    switch (status) {
        case "Active":
            return "#10c469"
        case "Pending":
            return "#f9c851"
        case "Inactive":
            return "#ff5b5b"
    }
}

export default function BrandList() {
    return (
        <>
            <div className="bg-white dark:bg-slate-950 mt-4 mb-8 rounded-lg shadow-sm mx-8">
                <div className="flex justify-between font-vazir text-gray-80 px-5 py-4">
                    <h1 className="font-vazir text-gray-800 dark:text-gray-200">لیست برند ها</h1>
                    <button className="flex items-center p-2 rounded-sm text-xs dark:text-gray-200 bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-500 text-gray-800 hover:bg-gray-300 transition">
                        افزودن برند
                        <Plus className="text-gray-800 dark:text-gray-200 w-4 h-4 mx-1" />
                    </button>
                </div>
                <p className="bg-gray-100 dark:bg-gray-700 py-2 font-vazir text-sm text-center dark:text-gray-300 text-gray-800">75 برند فعال از 120 برند</p>
                <div className="overflow-hidden ltr border border-gray-200 dark:border-gray-600  dark:bg-slate-950 bg-white">
                    <table className="min-w-full text-sm text-gray-700">
                        <thead className="text-gray-500  dark:text-gray-300 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-3 text-left">Brand</th>
                                <th className="px-6 py-3 text-center">Established</th>
                                <th className="px-6 py-3 text-center">Stores</th>
                                <th className="px-6 py-3 text-center">Products</th>
                                <th className="px-6 py-3 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((brand) => (
                                <tr
                                    key={brand.id}
                                    className="border-b border-gray-200 dark:border-gray-600 dark:hover:bg-slate-800 hover:bg-gray-50 transition-colors"
                                >
                                    <td className="flex items-center gap-3 px-6 py-4">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-full  dark:bg-slate-600 bg-gray-100">
                                            {brand.logo ? (
                                                <Image
                                                width={30}
                                                height={30}
                                                    src={brand.logo}
                                                    alt={brand.name}
                                                    className="h-10 w-10 rounded-full object-cover"
                                                />
                                            ) : (
                                                <span className="text-gray-400 text-xs font-semibold">
                                                    Logo
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-semibold  dark:text-white text-gray-800">
                                                {brand.name} – {brand.country}
                                            </div>
                                            <div className="text-gray-400  dark:text-gray-600 text-xs">
                                                {brand.category}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center dark:text-gray-300 text-gray-600">
                                        Since {brand.established}
                                    </td>
                                    <td className="px-6 py-4 text-center dark:text-gray-300">{brand.stores.toLocaleString()}</td>
                                    <td className="px-6 py-4 text-center dark:text-gray-300">{brand.products.toLocaleString()}</td>
                                    <td className="px-6 py-4 text-center flex items-center justify-center gap-2">
                                        <span className={`w-3 h-3 rounded-full  ${statusColor(brand.status)}`} style={{ backgroundColor: statusColor(brand.status) }} />
                                        <span className="font-medium dark:text-gray-300 text-gray-700">
                                            {brand.status}
                                        </span>
                                    </td>
                                    <td>
                                        <EllipsisVertical className="text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 hover:text-gray-800" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center px-6 py-5 justify-between">
                    <p className="font-vazir dark:text-gray-300 text-gray-800">نمایش 5 از 20 نتیجه</p>
                    <div className="flex">
                        <ChevronRight className="border-1 w-7 h-7 mx-1 text-center rounded-md text-gray-800 dark:text-gray-300 cursor-pointer"/>
                        <p className="border-1 w-7 h-7 mx-1 text-center rounded-md text-gray-800 dark:text-gray-300 cursor-pointer">3</p>
                        <p className="border-1 w-7 h-7 mx-1 text-center rounded-md text-gray-800 dark:text-gray-300 cursor-pointer">2</p>
                        <p className="border-1 w-7 h-7 mx-1 text-center rounded-md bg-gray-800 dark:bg-gray-200 dark:text-gray-800 cursor-pointer">1</p>
                        <ChevronLeft className="border-1 border-gray-400 w-7 h-7 mx-1 text-center rounded-md cursor-pointer dark:text-gray-300 text-gray-400"/>
                    </div>
                </div>
            </div>
        </>
    )
}
