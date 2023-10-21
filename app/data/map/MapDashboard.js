import madhya from "~/data/map/madhyapradesh.png";
import chha from "~/data/map/chhattisgarh.png";
import raja from "~/data/map/raja.png";
import telegana from "~/data/map/telangana.png";
import mizoram from "~/data/map/mizoram.png";
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
    Name: "Madhya Pradesh",
    Value: "",
    Trend: "",
    TargetAch: 90,
    container: <img src={madhya} alt="map" />,
    status: "Below Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Rajasthan",
    Value: "",
    Trend: "",
    TargetAch: 75,
    container: <img src={raja} alt="map" />,
    status: "Above Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Telangana",
    Value: "",
    Trend: "",
    TargetAch: 75,
    container: <img src={telegana} alt="map" />,
    status: "Above Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
  {
    Name: "Chhattisgarh",
    Value: "",
    Trend: "",
    TargetAch: 75,
    container: <img src={chha} alt="map" />,
    status: "Above Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },

  {
    Name: "Mizoram",
    Value: "",
    Trend: "",
    TargetAch: 75,
    container: <img src={mizoram} alt="map" />,
    status: "Above Target",
    Explore: "",
    Analyze: "/demo/dashboard/analysis/demandAnalysis",
  },
];
