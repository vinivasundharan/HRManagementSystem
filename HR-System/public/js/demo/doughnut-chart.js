new Chart(document.getElementById("mixed-chart"), {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
        datasets: [{
            label: "Avg. past 5 years",
            type: "line",
            borderColor: "#4caf50",
            data: [87, 79, 92, 100, 87, 93, 86, 76, 89, 107, 89],
            fill: false
        }, {
            label: "Man-hour",
            type: "bar",
            backgroundColor: "#01579b",
            data: [90, 113, 90, 110, 78, 90, 78, 79, 98, 112, 85],
        }

        ]
    },
    options: {
        title: {
            display: false,
            text: 'Population growth (millions): Europe & Africa'
        },
        legend: { display: true }
    }
});

new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Capability -10%", "Used Resources 110%"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#4caf50", "#b71c1c"],
                data: [0, 110]
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

new Chart(document.getElementById("doughnut-chart1"), {
    type: 'doughnut',
    data: {
        labels: ["Capability 20%", "Used Resources 80%"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#78909c", "#4caf50"],
                data: [20, 80]
            }
        ]
    },
    options: {
        title: {
            display: false,
            text: 'Predicted world population (millions) in 2050'
        }
    }
});