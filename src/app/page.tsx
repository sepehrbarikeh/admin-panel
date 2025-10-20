"use client"

import BrandList from "@/components/brandList";
import FeedBack from "@/components/feedback";
import Footer from "@/components/footer";
import BarCard from "@/components/shared/chart/barCard";
import GaugeCard from "@/components/shared/chart/gaugeCard";
import MultiLineChart from "@/components/shared/chart/multiLineCard";
import PieCard from "@/components/shared/chart/pieCard";
import ProgressiveCard from "@/components/shared/chart/progressiveCard";
import TopSell from "@/components/topsell";




export default function Home() {

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-8 mx-8">
        {/* Card */}
        <GaugeCard Title={"کل سفارش‌ها"} Color={"#f93b3b"} Value={687.3} Percent={65} Text={"65K"} />
        <ProgressiveCard Title={"کل درامد"} Percent={32} Value={"$5.42M"} bg={"bg-green-500"} className={"bg-green-200"} style={"border-green-500"} up={true} />
        <GaugeCard Title={"کاربران جدید"} Color={"#f9c851"} Value={45.3} Percent={75} Text={"75K"} />
        <ProgressiveCard Title={"رضایت مشتری"} Percent={5.7} Value={"94.3%"} bg={"bg-sky-500"} className={"bg-sky-200"} style={"border-sky-500"} up={false} ProgreddivePercent={94.3} />
        <PieCard />
        <BarCard />
      </div>
      <MultiLineChart />
      <FeedBack />
      <BrandList />
      <TopSell />
      <Footer />
    </>
  );
}
