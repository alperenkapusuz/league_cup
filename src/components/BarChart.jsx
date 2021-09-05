import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { fetchClubTrophy } from "./apiFunction/ApiFunction";

const BarChart = ({ league }) => {
  const [leagueData, setLeagueData] = useState([]);

  useEffect(() => {
    const fetchLeagueClubTrophy = async () => {
      const data = await fetchClubTrophy(league);
      setLeagueData(data);
    };

    fetchLeagueClubTrophy();
  }, [league]);
  
  return (
    <div id="chart">
      <Chart
        options={{
          chart: {
            height: 350,
            type: "bar",        
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: leagueData.map((item) => item.Club),
          },
        }}
        series={[
            {
                name: "Championship",
                data: leagueData.map((item) => item.Championship)
            }
        ]}
        type="bar"
        height={570}
      />
    </div>
  );
};

export default BarChart;
