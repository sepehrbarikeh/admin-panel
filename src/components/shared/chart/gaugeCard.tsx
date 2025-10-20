"use client";

import { Gauge } from "@mui/x-charts/Gauge";
import { EllipsisVerticalIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  Title: string;
  Color: string;
  Value: number;
  Percent: number;
  Text: string;
}

export default function GaugeCard(props: Props) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    setIsDark(document.documentElement.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white dark:bg-slate-950 flex-1 rounded-lg max-w-3xl hover:shadow-lg dark:hover:shadow-gray-800 transition-all duration-300">
      <div className="p-5">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-700 dark:text-gray-100 font-vazir text-base md:text-lg">
            {props.Title}
          </h2>
          <EllipsisVerticalIcon className="text-gray-400 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition cursor-pointer" />
        </div>

        {/* Content */}
        <div className="flex justify-between items-center relative">
          <div className="relative w-[110px] h-[110px] flex items-center justify-center">
            <Gauge
              width={110}
              height={110}
              value={props.Percent}
              text=""
              sx={{
                "& .MuiGauge-valueArc": { fill: props.Color },
                "& .MuiGauge-referenceArc": { fill: isDark ? "#1e293b" : "#f0f0f0" },
              }}
            />
            <span className={`absolute text-sm md:text-base font-semibold ${isDark ? "text-gray-100" : "text-gray-800"}`}>
              {props.Text}
            </span>
          </div>

          <div className="flex flex-col items-end text-gray-700 dark:text-gray-100">
            <p className="text-2xl md:text-3xl font-semibold">{props.Value}k</p>
            <p className="text-sm md:text-base text-gray-400 dark:text-gray-500 mt-1 font-vazir">
              از ماه گذشته
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
