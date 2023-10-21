import WrapperMultiColumnChart from "~/kendo/charts/column/WrapperColumnChart";
import WrapperScatterBubbleChart from "~/kendo/charts/bubble/WrapperScatterBubbleChart";
import WrapperPieChart from "~/kendo/charts/pie/WrapperPieChart";
import WrapperStackColChart from "~/kendo/charts/stackcol/WrapperStackColChart"
import {
  statewiseCategories_m,
  statewiseSeries_m,
  conVsStateData,
  sunburst_Data,
  win_19Categories_m,
  win_19Series_m,
  winlossCategories_m,
  winlossSeries_m,
  winGenderCategories_m,
  winGenderSeries_m,
  nominees_Data,
  eduWin_Data,
  ageGenderCategories_m,
  ageGenderSeries_m,
  partWinCategories_m,
  partWinSeries_m,
criminalCategories_m,
crimanalSeries_m,
assetsData,
assetsWinData
} from "~/kendo/rawData/poll/edaData";

export const reviewTabs = [
  { name: "Month", href: "#", current: true },
  { name: "Quarter", href: "#", current: false },
  { name: "Year", href: "#", current: false },
];

export const meetingTabs = [
  { name: "Daily", href: "#", current: true },
  { name: "Weekly", href: "#", current: false },
];

export const kpiService_m = [
  {
    Name: "Statwise distribution of the Constituencies all over India",
    Value: "",
    Trend: " ",
    TargetAch: 75,
    container: (
      <WrapperMultiColumnChart
        category={statewiseCategories_m}
        series={statewiseSeries_m}
      />
    ),
    status: "Above Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Sunburst Image of State and Constituency by Voters",
    Value: "",
    Trend: "",
    TargetAch: 90,
    container: <WrapperPieChart series={sunburst_Data} />,
    status: "On Track",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Constituency vs Statewise participation for the most contesting Political Parties ",
    Value: "",
    Trend: "",
    TargetAch: 90,
    container: <WrapperScatterBubbleChart data={conVsStateData} />,
    status: "Below Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },

  {
    Name: "Statewise report card for Poltical Parties in India",
    Value: "",
    Trend: "down",
    TargetAch: 50,
    container: (
      <WrapperMultiColumnChart
        category={win_19Categories_m}
        series={win_19Series_m}
      />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Win Counts by a Poltical Party in 2019",
    Value: "",
    Trend: "up",
    TargetAch: 75,
    container: (
      <WrapperMultiColumnChart
        category={win_19Categories_m}
        series={win_19Series_m}
      />
    ),
    status: "Above Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Win vs Loss Analysis for the Top Parties",
    Value: "",
    Trend: "up",
    TargetAch: 90,
    container: (
      <WrapperStackColChart
        category={winlossCategories_m}
        series={winlossSeries_m}
      />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Participation vs Win Counts analaysis for the Genders",
    Value: "",
    Trend: "down",
    TargetAch: 90,
    container: (
      <WrapperMultiColumnChart
        category={winGenderCategories_m}
        series={winGenderSeries_m}
      />
    ),
    status: "On Track",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Overall Education Qualification of all the Nominees",
    Value: "",
    Trend: "down",
    TargetAch: 50,
    container: <WrapperPieChart series={nominees_Data} />,
    status: "Below Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Education Qualification of the winners",
    Value: "",
    Trend: "down",
    TargetAch: 50,
    container: <WrapperPieChart series={eduWin_Data} />,
    status: "Below Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Age Counts Distribution among the politicians",
    Value: "",
    Trend: "down",
    TargetAch: 50,
    container: (
      <WrapperStackColChart
        category={ageGenderCategories_m}
        series={ageGenderSeries_m}
      />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Particiption vs Win Counts for the Category in Politics",
    Value: "",
    Trend: "down",
    TargetAch: 50,
    container: 
      <WrapperMultiColumnChart
        category={partWinCategories_m}
        series={partWinSeries_m}
      />
    ,
    status: "Below Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Criminal Casrs Counts Distibution among the politicans",
    Value: "",
    Trend: "down",
    TargetAch: 50,
    container: (
      <WrapperMultiColumnChart
        category={criminalCategories_m}
        series={crimanalSeries_m}
      />
    ),
    status: "Below Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Assets vs Liabilities for the Winning Polticians",
    Value: "",
    Trend: "down",
    TargetAch: 50,
    container: <WrapperScatterBubbleChart data={assetsData} />,
    status: "Below Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Assets vs Liabilities for the Winning Polticians",
    Value: "",
    Trend: "down",
    TargetAch: 50,
    container: <WrapperScatterBubbleChart data={assetsWinData} />,
    status: "Below Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
];
