import React, { useCallback } from 'react';
import ReactWordcloud from 'react-wordcloud';

export default function Heatmap(){
    const words = [
        {
            text: 'told',
            value: 13,
        },
        {
            text: 'mistake',
            value: 17,
        },
        {
            text: 'thought',
            value: 16,
        },
        {
            text: 'compañere',
            value: 19,
        },
        {
            text: 'perreo',
            value: 22,
        },
        {
            text: 'bad',
            value: 17,
        },
        {
            text: 'Y la 🧀 ❌ 🍵',
            value: 20,
        },
    ]

    const rotate = useCallback((word) => 0, []);
    const options = {
        rotations: 0,
        rotationAngles: [0, 0],
        fontSizes: [30, 50],
        scale: "sqrt",
      };

    return(
        <div style={{ width: '100%' }}>
            <ReactWordcloud 
                words={words} 
                rotate={rotate}
                options={options}
            />
        </div>
    )
}