import React from "react";
import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
const wordSeries = [
  {
    text: "Easy to Use",
    value: 84,
  },
  {
    text: "Customer support",
    value: 61,
  },
  {
    text: "New",
    value: 61,
  },
  {
    text: "Affordable",
    value: 41,
  },
  {
    text: "Upgrade",
    value: 60,
  },

  {
    text: "Great",
    value: 60,
  },
  {
    text: "Feature",
    value: 60,
  },
  {
    text: "Price",
    value: 60,
  },
  {
    text: "Design",
    value: 60,
  },
  {
    text: "Awesome",
    value: 60,
  },
  {
    text: "Price",
    value: 60,
  },
  {
    text: "Plan",
    value: 60,
  },
  {
    text: "Technology",
    value: 60,
  },
  {
    text: "Experience",
    value: 60,
  },
  {
    text: "Friendly",
    value: 60,
  },
  {
    text: "Experience",
    value: 60,
  },
  {
    text: "Bugs",
    value: 60,
  },
  {
    text: "Plans",
    value: 50,
  },
  {
    text: "Happy",
    value: 50,
  },
  {
    text: "Slow",
    value: 50,
  },
  {
    text: "Broken",
    value: 50,
  },
  {
    text: "Fast",
    value: 50,
  },
  {
    text: "Intuitive",
    value: 50,
  },
  {
    text: "Refund",
    value: 50,
  },
  {
    text: "Love",
    value: 50,
  },
  {
    text: "Help",
    value: 50,
  },
  {
    text: "Password",
    value: 50,
  },
  {
    text: "Happy",
    value: 50,
  },
  {
    text: "Frustrated",
    value: 50,
  },
  {
    text: "Love",
    value: 50,
  },
];
// const callbacks = {
//   getWordColor: word => word.value > 50 ? "blue" : "red",
//   onWordClick: console.log,
//   onWordMouseOver: console.log,
//   getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
// }
const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [5, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000,
};

// const size = [800,200];

export default function WordChartContainer() {
  return (
    <div className="flex items-center h-36 w-60" >
      <ReactWordcloud
        // callbacks={callbacks}
        options={options}
        // size={size}
        words={wordSeries}
      />
    </div>
  );
}
