var avgchart = document.getElementById("averagetimetogoal-chart");
var averageChart = new Chart(avgchart, {
  type: 'bar',
  data: {
    labels: ["Less than 20%", "21-40%", "41-60%", "61-80%", "81-100%", "Overperforming"],
    datasets: [{
      label: "Performance",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [3,10,16,12,40,19],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: '% of employees'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
