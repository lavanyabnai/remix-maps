import WrapprWordChart from "~/kendo/charts/wordcloud/WrapperWordChart";
import WrapperMultiStackBarChart from "~/kendo/charts/stackbar/WrapperStackBarChart";
import WrapperMultiBarChart from "~/kendo/charts/bar/WrapperBarChart";
import WrapperMultiColumnChart from "~/kendo/charts/column/WrapperColumnChart";
import {sentimentProCategories_m,
sentimentProSeries_m,sampleCategories_m,
sampleSeries_m,npsCategories_m,
npseries_m } from "~/data/sentiment/wordDashboard";
// import { wordSeries } from "~/data/sentiment/wordDashboard";




export const kpiService_m = [
  {
    Name: "Keyword Cloud",
    container: <WrapprWordChart />,
  },
  {
    Name: "Sentiment by Product",
    container: (
      <WrapperMultiStackBarChart
        categories={sentimentProCategories_m}
        series={sentimentProSeries_m}
      />
    ),
  },
  {
    Name: "Overall KPIs",
    container: (
      <WrapperMultiBarChart
        categories={sampleCategories_m}
        series={sampleSeries_m}
      />
    ),
  },
  {
    Name: "NPS by Sentiment by Week",
    container: (
      <WrapperMultiColumnChart
        categories={npsCategories_m}
        series={npseries_m}
      />
    ),
  },
];


