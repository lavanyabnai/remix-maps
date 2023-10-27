import { useState, Fragment } from "react";
import { kpiService_m } from "~/data/survey/surveyData";
import WrapperMultiColumnChart from "~/kendo/charts/column/WrapperColumnChart";
import {
  npsCategories_m,
  npseries_m,
} from "~/data/sentiment/sentimentDashboard";
import {
  PlusIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/20/solid";

import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const stats2 = [
  {
    id: 1,
    name: "Daily Volume",
    stat: "65",
    change: "2%",
    changeType: "increase",
    to: "/demo/dashboard/overview",
  },
  {
    id: 2,
    name: "Weekly Volume",
    stat: "378",
    change: "9%",
    changeType: "increase",
    to: "/demo/dashboard/overview",
  },
  {
    id: 3,
    name: "Avg.Monthly Volume",
    stat: "1,234",
    change: "9%",
    changeType: "increase",
    to: "/demo/dashboard/overview",
  },
  {
    id: 4,
    name: "Total Reviews",
    stat: "104,160",
    change: "5%",
    changeType: "decrease",
    to: "/demo/dashboard/overview",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function AgreementAnalysisRoute() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="mt-2 mx-4 rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between p-2 ">
          <div className="m-2 flex-1">
            <h2 className="text-3xl font-bold leading-7 text-gray-900">
              Survey Analysis
            </h2>
          </div>
          <div className="mr-2 mt-4 flex md:ml-4 md:mt-0">
            <button
              type="button"
              className="rounded-full bg-rose-500 p-1.5 font-semibold text-white shadow-sm "
              onClick={() => setOpen(!open)}
            >
              <PlusIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        {/* stats */}
        <ul className="mx-4 grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2">
          <div className=" px-4 rounded-lg bg-white shadow-xl">
            <div className="mt-2">
              <h3 className="text-base font-medium text-gray-900">
                Survey Averages from Quarter
              </h3>
            </div>

            <dl className="my-4 grid grid-cols-1 gap-4  lg:grid-cols-2">
              {stats2.map((item) => (
                <div
                  key={item.id}
                  className="relative  rounded-lg bg-white p-2  shadow border"
                >
                  <dt className="ml-2 flex justify-centertruncate text-base font-medium text-gray-500">
                    {item.name}
                  </dt>
                  <dd className="ml-2 flex items-baseline pb-6 ">
                    <p className="mt-1 text-center text-4xl tracking-tight  text-gray-900">
                      {item.stat}
                    </p>
                    <p
                      className={classNames(
                        item.changeType === "increase"
                          ? "text-green-700"
                          : "text-rose-500",
                        "ml-2 flex items-center text-sm font-semibold",
                      )}
                    >
                      {item.changeType === "increase" ? (
                        <IoMdArrowDropup
                          className="h-8 w-8 flex-shrink-0 self-center text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <IoMdArrowDropdown
                          className="h-8 w-8 flex-shrink-0 self-center text-red-500"
                          aria-hidden="true"
                        />
                      )}

                      {item.change}
                    </p>
                  </dd>
                </div>
              ))}
              <p className="mt-4 test-base text-gray-400 ">
                Comparision percentages based on previous quarter.
              </p>
            </dl>
          </div>

          {/* charts */}

          {kpiService_m.map((kpi) => (
            <li
              key={kpi.Name}
              className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10"
            >
              <div className="relative  py-2 px-3">
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
          <li className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10">
            <div className="relative py-2 pl-3">
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
