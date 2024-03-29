import { useOutletContext } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
// Interface
import { IChartProps, IData } from "./Chart";
// API
import { fetchCoinChart } from "../api";
// Atom
import { isDarkAtom } from "../atoms";
// Components
import Loader from "../components/Loader";
import NoData from "../components/NoData";

export default function Price() {
  // Theme
  const isDark = useRecoilValue(isDarkAtom);
  // parameter
  const { coinId } = useOutletContext<IChartProps>();
  // react-query
  const { isLoading, data } = useQuery<IData[]>(["price", coinId], () =>
    fetchCoinChart(coinId)
  );
  const isError = !Array.isArray(data);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <NoData />
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: data?.map((price) => [
                price.time_close * 1000,
                Number(price.open),
                Number(price.high),
                Number(price.low),
                Number(price.close),
              ]),
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              width: 500,
              height: 500,
              background: "transparent",
              toolbar: {
                show: false,
              },
            },
            xaxis: {
              labels: { show: true },
              type: "datetime",
            },
            tooltip: {
              x: {
                format: "yy-MM-dd, ddd",
              },
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#f53b57",
                  downward: "#34e7e4",
                },
              },
            },
          }}
        />
      )}
    </>
  );
}
