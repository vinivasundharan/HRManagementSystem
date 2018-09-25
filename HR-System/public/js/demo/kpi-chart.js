// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("absenteeism-chart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"],
    datasets: [{
      label: "Absenteeism",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [24,45,12,46,89,34,67,98,56,34,12,98],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
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
          max: 120,
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


//doughnut chart for employee retention


new Chart(document.getElementById("retention-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Less than 1 years", "1-3 years","3-5 years","5-7 years","more than 7 years"],
        datasets: [
            {
                label: "Retention rate (millions)",
                backgroundColor: ["#d42535", "#d47f25","#b1cc2a","#439e17","#171a9e"],
                data: [300,950,400,300,100]
            }
        ]
    },
    options: {
        title: {
            display: false,
            text: 'Predicted world population (millions) in 2050'
        },
        legend: {
            display: true
        },
    }
});
