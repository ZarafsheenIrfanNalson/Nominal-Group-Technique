
  document.addEventListener('DOMContentLoaded', function () {

    // Doughnut Chart
    const doughnutCtx = document.getElementById('doughnut-chart');
    if (doughnutCtx) {
      new Chart(doughnutCtx, {
        type: 'doughnut',
        data: {
          labels: ['Vendor A', 'Vendor B', 'Vendor C'],
          datasets: [{
            data: [30, 50, 20],
            backgroundColor: ['#5B2C6F', '#9B59B6', '#F5B7B1'], // Deep Violet, Lavender, Soft Pink
            hoverBackgroundColor: '#E91E63' // Magenta on hover
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }

    // Performance / Bar Chart
    const barCtx = document.getElementById('bar-chart');
    if (barCtx) {
      new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Sales',
            data: [12, 19, 10, 17, 15, 22],
            backgroundColor: '#5B2C6F', // Deep Violet
            hoverBackgroundColor: '#E91E63' // Magenta on hover
          }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      });
    }

    // Line Chart (Monthly Spend Trend)
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    let spendData = [1200, 1500, 1000, 1800, 1300, 1700];

    const lineCtx = document.getElementById('line-chart');
    if (lineCtx) {
      let lineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
          labels: months,
          datasets: [{
            label: 'Spend ($)',
            data: spendData,
            backgroundColor: 'rgba(155,89,182,0.2)', // Lavender semi-transparent fill
            borderColor: '#5B2C6F', // Deep Violet
            borderWidth: 2,
            fill: true,
            tension: 0.3,
            pointBackgroundColor: '#E91E63', // Magenta points
            pointHoverBackgroundColor: '#F5B7B1' // Soft Pink on hover
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true } }
        }
      });

      // Arrow click handlers for Monthly Spend Trend
      window.GetMonthlySpentrend = function(direction) {
        if(direction === 'last-x-months'){
          spendData = spendData.map(value => value - Math.floor(Math.random() * 200));
        } else {
          spendData = spendData.map(value => value + Math.floor(Math.random() * 200));
        }
        lineChart.data.datasets[0].data = spendData;
        lineChart.update();
      }
    }
  });
