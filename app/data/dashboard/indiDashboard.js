import WrapperMultiLineChart from '~/kendo/charts/line/WrapperLineChart';
import WrapperMultiBarChart from '~/kendo/charts/bar/WrapperBarChart'
import { shipmentCategories_m, shipmentSeries_m, cancelCategories_m, cancelSeries_m,  } from '~/kendo/rawData/poll/indiData'

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
    Name: "International arrivals by Country",
    Value: "15",
    Trend: "up",
    TargetAch: 90,
    container: (
      <WrapperMultiLineChart
        category={cancelCategories_m}
        series={cancelSeries_m}
      />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "International air passenger arrivals to U.S.",
    Value: "357",
    Trend: "up",
    TargetAch: 75,
    container: (
      <WrapperMultiBarChart
        category={shipmentCategories_m}
        series={shipmentSeries_m}
      />
    ),
    status: "Above Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },

];

