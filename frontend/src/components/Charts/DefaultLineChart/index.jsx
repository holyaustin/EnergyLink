// Core
import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Components
import { Card } from "@mui/material";
import configs from "./configs";

/*eslint-disable react/prop-types*/
const DefaultLineChart = ({ title, description, height, chart }) => {
  const chartDatasets = chart.datasets.map((dataset) => ({
    ...dataset,
    tension: 0.4,
    borderWidth: 3,
    pointRadius: 2,
    maxBarThickness: 6,
  }));

  const { data, options } = configs(chart.labels, chartDatasets);

  const renderChart = (
    <div className="p-2">
      {(title || description) && (
        <div className={`px-${description ? 1 : 0} pt-${description ? 1 : 0}`}>
          {title && (
            <div className="mb-1">
              <p className="text-base font-semibold">{title}</p>
            </div>
          )}
          <div className="mb-2">
            <p className="font-normal text-gray-500">{description}</p>
          </div>
        </div>
      )}
      {useMemo(
        () => (
          <div style={{ height: height }}>
            <Line data={data} options={options} />
          </div>
        ),
        [chart, height]
      )}
    </div>
  );

  return title || description ? (
    <Card sx={{ "box-shadow": "none" }}>{renderChart}</Card>
  ) : (
    renderChart
  );
};

DefaultLineChart.defaultProps = {
  title: "",
  description: "",
  height: "19.125rem",
};

export default DefaultLineChart;
