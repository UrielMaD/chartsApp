import React from 'react';
import Plot from 'react-plotly.js';

import '../styles/charts.css';

export default function Heatmap(){
    var colorscaleValue = [
        [0, 'white'],
        [1, '#00d47f']
      ];

    const data = [
        {
          z: [[1, 0, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
          x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          y: ['Morning', 'Afternoon', 'Evening'],
          type: 'heatmap',
          hoverongaps: false,
          colorscale: colorscaleValue,
        }
    ];

    const layout = {
        title: 'Annotated Heatmap',
        annotations: [],
        xaxis: {
            ticks: '',
            side: 'top'
        },
        yaxis: {
            ticks: '',
            ticksuffix: ' ',
            autosize: false
        }
    };
    
    const config = { responsive: true }

    return(
        <div style={{ width: '100%' }}>
            <Plot
                data={data}
                layout={layout}
                config={config}
                style={{ width: '100%' }}
            />
        </div>
    )
}