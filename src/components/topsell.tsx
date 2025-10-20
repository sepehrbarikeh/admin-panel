import { ChevronLeft, ChevronRight, Download, EllipsisVertical, FileInputIcon } from "lucide-react";
import data from "../../public/data/product/product.json"
import Image from "next/image"


export default function TopSell() {
    return (
        <>
            <div className="bg-white dark:bg-slate-950 mt-4 mb-8 rounded-lg shadow-sm mx-8">
                <div className="flex justify-between font-vazir text-gray-800 px-5 py-4 border-b border-dashed dark:border-gray-600 border-gray-200">
                    <h1 className="font-vazir dark:text-gray-300 text-gray-800">محصولات پرفروش</h1>
                    <div className="flex">
                        <button className="flex mx-2 items-center p-2 rounded-sm text-xs dark:bg-slate-800 dark:hover:bg-slate-500 dark:text-gray-300 bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
                            Import
                            <Download className="text-gray-800 dark:text-gray-300 w-4 h-4 mx-1" />
                        </button>
                        <button className="flex mx-2 items-center p-2 rounded-sm text-xs dark:bg-slate-800 dark:hover:bg-slate-500 dark:text-gray-300 bg-gray-200 text-gray-800 hover:bg-gray-300 transition">
                            Export
                            <FileInputIcon className="text-gray-800 dark:text-gray-300 w-4 h-4 mx-1" />
                        </button>
                    </div>
                </div>
                <div className="overflow-hidden ltr border border-gray-200 dark:border-gray-600 dark:bg-slate-950 bg-white">
                    <table className="min-w-full text-sm dark:text-gray-300 text-gray-700">
                        <thead className="text-gray-500 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-3 text-left">Product</th>
                                <th className="px-6 py-3 text-center">Price</th>
                                <th className="px-6 py-3 text-center">Quantity</th>
                                <th className="px-6 py-3 text-center">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product) => (
                                <tr
                                    key={product.id}
                                    className="border-b border-gray-200 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-slate-800 transition-colors"
                                >
                                    <td className="flex items-center gap-3 px-6 py-4">
                                        <div className="flex items-center justify-center h-12 w-12 border-1 border-gray-200 rounded-lg">
                                            {product.image ? (
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    src={product.image}
                                                    alt={product.productName}
                                                    className="h-9 w-9 object-cover rounded-md"
                                                />
                                            ) : (
                                                <span className="text-gray-400 text-xs font-semibold">
                                                    Logo
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-semibold dark:text-gray-300 text-gray-800">
                                                {product.productName}
                                            </div>
                                            <div className="text-gray-400 dark:text-gray-300 text-xs">
                                                {product.date}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center dark:text-gray-400 text-gray-600">
                                        {product.price.toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4 text-center">{product.quantity.toLocaleString()}</td>
                                    <td className="px-6 py-4 text-center">{product.amount.toLocaleString()}$</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center px-6 py-5 justify-between">
                    <p className="font-vazir dark:text-gray-300 text-gray-800">نمایش 5 از 10 نتیجه</p>
                    <div className="flex">
                        <ChevronRight className="border-1 w-7 h-7 mx-1 text-center rounded-md text-gray-800 dark:text-gray-300 cursor-pointer"/>
                        <p className="border-1 w-7 h-7 mx-1 text-center rounded-md text-gray-800 dark:text-gray-300 cursor-pointer">2</p>
                        <p className="border-1 w-7 h-7 mx-1 text-center rounded-md bg-gray-800 dark:bg-gray-200 dark:text-gray-800 cursor-pointer">1</p>
                        <ChevronLeft className="border-1 border-gray-400 w-7 h-7 mx-1 text-center rounded-md cursor-pointer dark:text-gray-300 text-gray-400"/>
                    </div>
                </div>
            </div>
        </>
    )
}