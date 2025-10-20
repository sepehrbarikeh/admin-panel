import { ChevronsLeft, ChevronsRight, Eye, Search, SquarePen, Trash2 } from "lucide-react"
import data from "../../../public/data/invoices/invoice.json"

export default function Page() {

    const statusColor = (status: string) => {
        switch (status) {
            case "Paid":
                return "bg-green-100 text-green-500"
            case "Overdue":
                return "bg-amber-100 text-amber-500"
            case "Pending":
                return "bg-amber-100 text-amber-500"
            case "Cancelled":
                return "bg-rose-100 text-rose-500"
        }
    }

    return (
        <>
            <div className="bg-white dark:bg-slate-950 ltr mx-8 rounded-lg">
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center bg-gray-100 dark:bg-slate-800 py-2 rounded-lg">
                        <input type="search" className="placeholder:text-gray-500 dark:text-gray-300 outline-none text-gray-900 px-2" placeholder="search..." />
                        <Search className="w-5 h-5 text-gray-500 mr-2" />
                    </div>
                    <button className="bg-sky-500 rounded-lg p-2 text-white font-vazir">
                        + افزودن فاکتور
                    </button>
                </div>
                <div>
                    <table className="min-w-full border-collapse bg-white rounded-lg shadow">
                        <thead className="bg-gray-50 dark:bg-gray-700 dark:text-gray-300 text-gray-600 border-b border-gray-200 text-sm">
                            <tr>
                                <th className="px-4 py-3 text-left">
                                    <input type="checkbox" />
                                </th>
                                <th className="px-4 py-3 text-left font-semibold">INVOICE ID</th>
                                <th className="px-4 py-3 text-left font-semibold">CATEGORY</th>
                                <th className="px-4 py-3 text-left font-semibold">CREATED ON</th>
                                <th className="px-4 py-3 text-left font-semibold">INVOICE TO</th>
                                <th className="px-4 py-3 text-left font-semibold">AMOUNT</th>
                                <th className="px-4 py-3 text-left font-semibold">DUE DATE</th>
                                <th className="px-4 py-3 text-left font-semibold">STATUS</th>
                                <th className="px-4 py-3 text-left font-semibold">ACTION</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700  text-sm divide-y">
                            {data.map((rows) => (

                                <tr key={rows.invoiceId} className="hover:bg-gray-50 dark:bg-slate-950 dark:hover:bg-slate-800 border-gray-200">
                                    <td className="px-4 py-3">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="px-4 py-3 font-medium text-blue-600">{rows.invoiceId}</td>
                                    <td className="px-4 py-3  dark:text-gray-300">{rows.category}</td>
                                    <td className="px-4 py-3 text-gray-400">{rows.createdOn}</td>
                                    <td className="px-4 py-3  dark:text-white flex items-center gap-2">
                                        <img src={rows.avatar} alt="avatar" className="w-7 h-7 rounded-full" />
                                        {rows.invoiceTo}
                                    </td>
                                    <td className="px-4 py-3  dark:text-gray-200">{rows.amount}</td>
                                    <td className="px-4 py-3  dark:text-gray-300">{rows.dueDate}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${statusColor(rows.status)}`}>{rows.status}</span>
                                    </td>
                                    <td className="px- py-3 flex gap-2">
                                        <button className="text-blue-500 bg-blue-100 p-2 rounded-full hover:text-blue-700"><Eye className="h-3 w-3" /></button>
                                        <button className="text-green-500 bg-green-100 p-2 rounded-full hover:text-green-700"><SquarePen className="h-3 w-3" /></button>
                                        <button className="text-red-500 bg-red-100 rounded-full p-2 hover:text-red-700"><Trash2 className="h-3 w-3" /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex px-6 py-4">
                    <ChevronsLeft className="border-1 w-7 h-7 border-gray-400  dark:text-gray-400 text-center rounded-l-md text-gray-800 cursor-pointer" />
                    <p className="border-1 w-7 h-7 border-gray-400 text-center dark:text-gray-400 text-gray-800 cursor-pointer">1</p>
                    <p className="border-1 w-7 h-7 border-sky-400 text-center text-white bg-sky-500 cursor-pointer">2</p>
                    <p className="border-1 w-7 h-7 border-gray-400 text-center dark:text-gray-400 text-gray-800 cursor-pointer">3</p>
                    <ChevronsRight className="border-1 w-7 h-7 border-gray-400 dark:text-gray-400 text-center rounded-r-md text-gray-800 cursor-pointer" />
                </div>
            </div>
        </>
    )
}