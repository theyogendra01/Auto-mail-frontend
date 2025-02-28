// Performance Chart
const performanceCtx = document.getElementById('performanceChart').getContext('2d');
new Chart(performanceCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Open Rate',
            data: [65, 70, 68, 72, 75, 68],
            borderColor: '#4f46e5',
            tension: 0.4
        }, {
            label: 'Response Rate',
            data: [40, 42, 45, 48, 44, 42],
            borderColor: '#10b981',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

// Timing Chart
const timingCtx = document.getElementById('timingChart').getContext('2d');
new Chart(timingCtx, {
    type: 'bar',
    data: {
        labels: ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'],
        datasets: [{
            label: 'Open Rate by Time',
            data: [45, 59, 80, 81, 56, 55, 70, 65, 40],
            backgroundColor: '#4f46e5'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
