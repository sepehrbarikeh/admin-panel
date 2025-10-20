"use client"
import React, { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import ordersStatsData from "../../../../public/data/charts/pieChart.json"
import { RefreshCcw, Triangle } from 'lucide-react';

export default function PieCard() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className='bg-white dark:bg-slate-950 mb-4 rounded-lg shadow-sm'>
            <div className='flex justify-between items-center border-b border-dashed border-gray-200 p-4 text-gray-800 dark:text-gray-200 font-vazir'>
                <p>آمار سفارشات</p>
                <button className='flex items-center p-2 rounded-sm text-xs dark:bg-slate-800 dark:hover:bg-slate-500 bg-gray-200 hover:bg-gray-300 transition'>
                    <p className='mx-1'>Refresh</p>
                    <RefreshCcw className='w-4 h-4 mx-1' />
                </button>
            </div>
            <div className='flex justify-center mt-4'>
                <PieChart
                    series={[
                        {
                            data: ordersStatsData.map((item) => ({
                                value: item.value,
                                color: item.color,
                            })),
                            innerRadius: 60,
                            outerRadius: 100,
                            arcLabel: (item) => `${item.value}%`,
                        },
                    ]}
                    height={250}
                    width={250}
                />
            </div>
            <div className='mb-8 grid grid-cols-2 justify-items-center gap-4 mt-4'>
                {ordersStatsData.map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="font-semibold dark:text-gray-400 text-gray-700">{item.label}</span>
                        <span className={`text-sm flex items-center ${item.change > 0 ? 'text-green-500' : 'text-rose-500'}`}>
                            {item.amount}
                            <Triangle className={`${item.change > 0 ? '' : 'rotate-180'} w-3 h-3 mx-1`} />
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
