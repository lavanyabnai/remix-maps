import WrapperMultiLineChart from '~/kendo/charts/line/WrapperLineChart';
import { shipmentCategories_m, shipmentSeries_m, cancelCategories_m, cancelSeries_m, mapeCategories_m, mapeSeries_m, locationCategories_m, locationSeries_m, } from '~/kendo/rawData/poll/pollData'

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
    Name: "Party 1",
    Value: "357",
    Trend: "up",
    TargetAch: 75,
    container: ( <WrapperMultiLineChart category={shipmentCategories_m} series={shipmentSeries_m}/> ),
    status: "Above Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Party 2",
    Value: "15",
    Trend: "up",
    TargetAch: 90,
    container: ( <WrapperMultiLineChart category={cancelCategories_m} series={cancelSeries_m} /> ),
    status: "Below Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Party 3",
    Value: "80",
    Trend: "down",
    TargetAch: 90,
    container: (
      <WrapperMultiLineChart
        category={mapeCategories_m}
        series={mapeSeries_m}
      />
    ),
    status: "On Track",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Party 4",
    Value: "27",
    Trend: "down",
    TargetAch: 50,
    container: (
      <WrapperMultiLineChart
        category={locationCategories_m}
        series={locationSeries_m}
      />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
];

