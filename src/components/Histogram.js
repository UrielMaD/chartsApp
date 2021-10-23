import React from 'react';
import Plot from 'react-plotly.js';

import '../styles/charts.css';

export default function Histogram(){
    const trace1 = {
        type: 'bar',
        x: [1, 2, 3, 4],
        y: [5, 10, 2, 8],
        marker: {
            color: '#C8A2C8',
            line: {
                width: 2.5
            }
        }
    };
    
    const data = [ trace1 ];
    
    const layout = { 
        font: {size: 18}
    };
      
    const config = {responsive: true}

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