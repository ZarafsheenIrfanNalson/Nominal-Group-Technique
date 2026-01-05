

  // Doughnut Chart 1: Activity Count
  new Chart(document.getElementById('doughnut-chart-1'), {
    type: 'doughnut',
    data: {
      labels: ['Completed', 'Pending', 'Overdue'],
      datasets: [{
        data: [12, 7, 3],
        backgroundColor: ['#5B2C6F', '#9B59B6', '#F5B7B1'], // Deep Violet, Lavender, Soft Pink
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: 'bottom' }
      }
    }
  });

  // Doughnut Chart 2: Amount by Vendor
  new Chart(document.getElementById('doughnut-chart-2'), {
    type: 'doughnut',
    data: {
      labels: ['Vendor A', 'Vendor B', 'Vendor C'],
      datasets: [{
        data: [1200, 3500, 2750],
        backgroundColor: ['#5B2C6F', '#9B59B6', '#E91E63'], // Deep Violet, Lavender, Magenta
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: 'bottom' }
      }
    }
  });

  // Line Chart: Departmental Spend Trend
  new Chart(document.getElementById('department-spend-chart'), {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
        { label: 'HR', data: [500, 700, 400, 600, 800], borderColor: '#5B2C6F', backgroundColor: '#5B2C6F', fill: false },
        { label: 'IT', data: [1000, 1200, 900, 1100, 1300], borderColor: '#9B59B6', backgroundColor: '#9B59B6', fill: false },
        { label: 'Finance', data: [800, 900, 700, 1000, 1200], borderColor: '#E91E63', backgroundColor: '#E91E63', fill: false }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: true, position: 'bottom' } }
    }
  });
