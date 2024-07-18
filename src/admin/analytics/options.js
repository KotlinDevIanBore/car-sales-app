export default {
    title: 'Daily Car Clicks ',
    axes: {
      bottom: {
        scaleType: 'time',
        mapsTo: 'date',
        ticks: {
          rotation: 'always'
        }
      },
      left: {
        mapsTo: 'value'
      }
    },
    legend: {
      clickable: false
    },
    height: '400px'
  }