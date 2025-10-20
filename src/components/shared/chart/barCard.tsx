"use client";

import dynamic from "next/dynamic";
import * as React from 'react';
import { EllipsisVerticalIcon, SquareArrowDownLeft, SquareArrowUpLeft } from 'lucide-react';

const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

export default function BarCard() {

    const option = {
        tooltip: {
            trigger: 'axis', // فعال شدن روی محور X
            axisPointer: {
                type: 'shadow', // هایلایت ستون
            },
            backgroundColor: 'rgba(0,0,0,0.7)',
            textStyle: {
                color: '#fff',
            },
        },
        grid: {
            top: 20,
            left: 50,
            right: 30,
            bottom: 20,
        },
        xAxis: {
            type: "category",
            data: [2019, 2020, 2021, 2022, 2023, 2024, 2025],
            axisTick: { show: false },
            axisLine: { lineStyle: { color: "#ccc" } },
            axisLabel: { color: "#888", fontSize: 12 },
        },
        yAxis: {
            type: "value",
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { lineStyle: { color: "#eee" } },
            axisLabel: { color: "#888", fontSize: 12 },
        },
        series: [
            {
                type: "bar",
                data: [88, 98, 68, 108, 75, 83, 50],
                barWidth: 12,
                itemStyle: {
                    borderRadius: [6, 6, 0, 0],
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: "rgba(66,133,244,0.9)" },
                            { offset: 1, color: "rgba(66,133,244,0.5)" },
                        ],
                    },
                },
                emphasis: {
                    itemStyle: {
                        color: "rgba(66,133,244,1)",
                        shadowBlur: 10,
                        shadowColor: "rgba(66,133,244,0.4)",
                    },
                },
            },
        ],
        animationDuration: 800,
    };
    
    return (
        <div className='bg-white dark:bg-slate-950 mb-4 rounded-lg shadow-sm'>
            <div className='flex justify-between items-center border-b border-dashed border-gray-200 p-5'>
                <p className='text-gray-800 dark:text-gray-200 font-vazir'>آمار</p>
                <EllipsisVerticalIcon className="text-gray-400 hover:text-gray-700 transition cursor-pointer" />
            </div>

            <div className="w-full h-[300px]">
                <ReactECharts option={option} style={{ height: 300, width: "100%" }} />
            </div>

            <div className='grid grid-cols-3 border-t border-dashed border-gray-200'>
                <div className='mt-3 text-center'>
                    <p className='text-gray-800 dark:text-gray-200 font-vazir'>درآمد</p>
                    <div className='flex mb-3 justify-center items-center'>
                        <p className='text-gray-800 dark:text-gray-300 mx-2'>$29.5K</p>
                        <SquareArrowDownLeft className='text-green-500 w-4 h-4' />
                    </div>
                </div>
                <div className='border-r border-dashed text-center border-gray-200'>
                    <p className='text-gray-800 dark:text-gray-200 mt-3 font-vazir'>مخارج</p>
                    <div className='flex mb-3 justify-center items-center'>
                        <p className='text-gray-80 dark:text-gray-300 mx-2'>$15.07K</p>
                        <SquareArrowUpLeft className='text-rose-500 w-4 h-4' />
                    </div>
                </div>

                <div className='border-r border-dashed border-gray-200 text-center'>
                    <p className='text-gray-800 dark:text-gray-200 mt-3 font-vazir'>سود</p>
                    <div className='flex mb-3 justify-center items-center'>
                        <p className='text-gray-800 dark:text-gray-300 mx-2'>$71.5K</p>
                        <SquareArrowDownLeft className='text-green-500 w-4 h-4' />
                    </div>
                </div>
            </div>
        </div>
    );
}
