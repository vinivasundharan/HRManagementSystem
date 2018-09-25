new Chart(document.getElementById("mixed-chart"), {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
        datasets: [{
            label: "Europe",
            type: "line",
            borderColor: "#b71c1c",
            data: [87, 79, 92, 110, 87, 93, 86, 76, 89, 112, 76],
            fill: false
        }, {
            label: "Europe",
            type: "bar",
            backgroundColor: "#01579b",
            data: [90, 120, 90, 89, 53, 90, 78, 79, 98, 65, 34, 67],
        }

        ]
    },
    options: {
        title: {
            display: false,
            text: 'Population growth (millions): Europe & Africa'
        },
        legend: { display: false }
    }
});

new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Capability", "Used Resources"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#4caf50", "#b71c1c"],
                data: [1, 110]
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

new Chart(document.getElementById("doughnut-chart1"), {
    type: 'doughnut',
    data: {
        labels: ["Capability", "Used Resources"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#4caf50", "#b71c1c"],
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



