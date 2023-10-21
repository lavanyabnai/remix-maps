import WrapperMultiColumnChart from "~/kendo/charts/column/WrapperColumnChart";
import { shipCategories_m,
shipSeries_m,
tankerCategories_m,
tankerSeries_m  } from '~/kendo/rawData/poll/chartData'

export const reviewTabs = [
  { name: 'Month', href: '#', current: true },
  { name: 'Quarter', href: '#', current: false },
  { name: 'Year', href: '#', current: false },
]

export const meetingTabs = [
  { name: 'Daily', href: '#', current: true },
  { name: 'Weekly', href: '#', current: false },  
]

export const kpiService_m = [
  {
    Name: "Number of Cargo ships Ports, vessels",
    Value: "",
    Trend: "",
    TargetAch: 90,
    container: (
      <WrapperMultiColumnChart
        category={shipCategories_m}
        series={shipSeries_m}
      />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Number of Tankers leaving Ports,vessels",
    Value: "",
    Trend: "",
    TargetAch: 75,
    container: (
      <WrapperMultiColumnChart
        category={tankerCategories_m}
        series={tankerSeries_m}
      />
    ),
    status: "Above Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
];

