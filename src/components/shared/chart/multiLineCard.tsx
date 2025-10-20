"use client"

import { EllipsisVerticalIcon, SquareArrowDownLeft, SquareArrowUpLeft } from "lucide-react";
import ReactECharts from "echarts-for-react";
import data from "../../../../public/data/charts/multiLine.json"
import master from "../../../../public/images/mastercard.svg"
import discover from "../../../../public/images/discover-card.svg"
import american from "../../../../public/images/american-express.svg"
import Image from "next/image";
import { color } from "echarts";

export default function MultiLineChart() {


  const months = data.map((item) => item.month)



  const ExpensesData = {
    name: "Total Expenses",
    type: "line",
    data: data.map((item) => item.Total_Expenses),
    showSymbol: false,
  }
  const incomeData = {
    name: "Total Income",
    type: "line",
    data: data.map((item) => item.Total_Income),
    showSymbol: false,
  }

  const seriesData = [ExpensesData, incomeData]

  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Total Expenses', 'Total Income']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: months
    },
    yAxis: {
      type: 'value'
    },
    series: seriesData
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-950 mt-4 mb-8 rounded-lg shadow-sm mx-8">
        <div className='flex justify-between items-center border-b border-dashed border-gray-200 p-5'>
          <p className='text-gray-800 font-vazir'>مخارج کل</p>
          <EllipsisVerticalIcon className="text-gray-400 hover:text-gray-700 transition cursor-pointer" />
        </div>
        <div id="chart"><ReactECharts option={option} style={{ height: 400, width: "100%" }} /></div>;
        <div className='grid grid-cols-3 border-t border-dashed border-gray-200'>
          <div className='mt-3 text-center'>
            <p className='text-gray-800 dark:text-gray-200 font-vazir'>درآمد</p>
            <div className='flex mb-3 justify-center items-center'>
              <p className='text-gray-800 dark:text-gray-300 mx-2'>$45.5K</p>
              <SquareArrowDownLeft className='text-green-500 w-4 h-4' />
            </div>
          </div>
          <div className='border-r border-dashed text-center border-gray-200'>
            <p className='text-gray-800 dark:text-gray-200 mt-3 font-vazir'>مخارج</p>
            <div className='flex mb-3 justify-center items-center'>
              <p className='text-gray-800 dark:text-gray-300 mx-2'>$15.07K</p>
              <SquareArrowUpLeft className='text-rose-500 w-4 h-4' />
            </div>
          </div>

          <div className='border-r border-dashed border-gray-200 text-center'>
            <p className='text-gray-800 dark:text-gray-200 mt-3 font-vazir'>پرداخت ها</p>
            <div className='flex mb-3 justify-center items-center '>
              <Image className="w-7 h-7" src={master} alt={"mester card"} />
              <Image className="w-7 h-7" src={american} alt={"american card"} />
              <Image className="w-7 h-7" src={discover} alt={"discover card"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}