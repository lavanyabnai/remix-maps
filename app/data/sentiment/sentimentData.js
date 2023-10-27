import WrapprWordChart from "~/kendo/charts/wordcloud/WrapperWordChart";
import WrapperMultiStackBarChart from "~/kendo/charts/stackbar/WrapperStackBarChart";
import WrapperMultiBarChart from "~/kendo/charts/bar/WrapperBarChart";
import WrapperMultiColumnChart from "~/kendo/charts/column/WrapperColumnChart";
import {
  sentimentProCategories_m,
  sentimentProSeries_m,
  sampleCategories_m,
  sampleSeries_m,
  npsCategories_m,
  npseries_m,
} from "~/data/sentiment/sentimentDashboard";
// import { wordSeries } from "~/data/sentiment/wordDashboard";


const chartColor = [
  "rgb(240, 249, 33)",
  "rgb(223, 99, 98)",
  "rgb(201, 69, 122)",
  "rgb(150, 20, 160)",
  "rgb(91, 2, 163)",
  "rgb(32, 6, 143)",
];


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
    Name: "Samples by Topic",
    container: (
      <WrapperMultiBarChart
        categories={sampleCategories_m}
        series={sampleSeries_m}
        color={chartColor}
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


