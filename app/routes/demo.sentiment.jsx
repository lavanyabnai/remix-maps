import { kpiService_m } from "~/data/sentiment/wordData";
import React from "react";
import WrapprWordChart from "~/kendo/charts/wordcloud/WrapperWordChart";
import WrapperMultiColumnChart from "~/kendo/charts/column/WrapperColumnChart";
import {
  npsCategories_m,
  npseries_m,
} from "~/data/sentiment/wordDashboard";



export default function AgreementAnalysisRoute() {
  return (
    <>
      <div className="flex flex-col">
        {/* stats */}

        {/* <dl className="mx-4 mb-2 mt-4 grid grid-cols-1 gap-6  lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.name}
              className="items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
            >
              <dt className="truncate text-center text-lg font-medium text-gray-500">
                {item.name}
              </dt>
              <dd className="mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl">
                {item.stat}
              </dd>
            </div>
          ))}
        </dl> */}
        {/* charts */}

        <ul className="mx-4 my-4 grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2">
          {kpiService_m.map((kpi) => (
            <li
              key={kpi.Name}
              className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10"
            >
              <div className="relative flex flex-1 flex-col py-2 px-3">
                <div className="flex items-baseline gap-2">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">
                      {kpi.Name}
                    </h3>
                    <h1 className="font-display text-d-h3 mb-3 text-4xl font-bold text-black">
                      {kpi.Value}
                    </h1>
                  </div>
                </div>
                <div>{kpi.container}</div>
              </div>
            </li>
          ))}
        </ul>
        <ul className="mx-4 my-4 grid grid-cols-1 gap-6 md:grid-cols-1">
         
            <li
              className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10"
            >
              <div className="relative flex flex-1 flex-col py-2 pl-3">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-base font-medium text-gray-900">
                    NPS by Sentiment by Week
                  </h3>
                </div>
                <div>
                  <WrapperMultiColumnChart
                    categories={npsCategories_m}
                    series={npseries_m}
                  />
                </div>
              </div>
            </li>
        
        </ul>
      </div>
    </>
  );
}
