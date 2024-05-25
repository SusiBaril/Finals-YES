// Chart 1
const ctxLine = document.getElementById('myChart');

new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [{
                label: 'Brand',
                data: [3000, 2500, 3000, 5000, 4000, 3000, 3500],
                borderColor: '#FF66C4',
                borderWidth: 2
            },
            {
                label: 'Tools',
                data: [2000, 1500, 2000, 3000, 2000, 1500, 2400],
                borderColor: '#A375FF',
                borderWidth: 2
            },
            {
                label: 'Stock',
                data: [1000, 1500, 2000, 2500, 3000, 2000, 1000],
                borderColor: '#FF914D',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'white' // set legend text color to white
                  }
            }
        }
    }
});

// Chart 2
const ctxPie = document.getElementById('pieChart');

new Chart(ctxPie, {
    type: 'doughnut',
    data: {
        labels: ['Car Accesories', 'Oil', 'Degreaser', 'Auto Parts', 'Fluid'],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100, 50, 20],
            backgroundColor: [
                '#FF66C4',
                '#A375FF',
                '#FF914D',
                '#FFBD59',
                '#5271FF'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'white',
                  }
            }
        }
    }
});

// Products Section

const ctxBar = document.getElementById('barchart');

new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [{
                label: 'Oil',
                data: [3000, 2500, 3000, 5000, 4000, 3000, 3500],
                borderColor: '#F1B356',
                borderWidth: 2
            },
            {
                label: 'Car Accesories',
                data: [2000, 1500, 2000, 3000, 2000, 1500, 2400],
                borderColor: '#A375FF',
                borderWidth: 2
            },
            {
                label: 'Fluid',
                data: [1000, 500, 2000, 2500, 3000, 2000, 1000],
                borderColor: '#7ED957',
                borderWidth: 2
            },
            {
                label: 'Auto Parts',
                data: [900, 5500, 3000, 4500, 6200, 2100, 1600],
                borderColor: '#FF66C4',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'white' // set legend text color to white
                  }
            }
        }
    }
});

// Sales Section

const ctxLine1 = document.getElementById('linechart');

new Chart(ctxLine1, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [{
                label: 'Brand',
                data: [3000, 2500, 3000, 5000, 4000, 3000, 3500],
                borderColor: '#FF66C4',
                borderWidth: 2
            },
            {
                label: 'Tools',
                data: [2000, 3500, 3500, 3000, 2000, 1500, 2400],
                borderColor: '#A375FF',
                borderWidth: 2
            },
            {
                label: 'Stock',
                data: [1000, 1500, 2000, 2500, 3000, 2000, 1000],
                borderColor: '#FF914D',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'white' // set legend text color to white
                  }
            }
        }
    }
});

const ctxPie1 = document.getElementById('pieschart');

new Chart(ctxPie1, {
    type: 'doughnut',
    data: {
        labels: ['Car Accesories', 'Oil', 'Degreaser', 'Auto Parts', 'Fluid'],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100, 50, 20],
            backgroundColor: [
                '#FF66C4',
                '#A375FF',
                '#FF914D',
                '#FFBD59',
                '#5271FF'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'white',
                  }
            }
        }
    }
});



