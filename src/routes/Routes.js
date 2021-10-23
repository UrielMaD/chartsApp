import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Histogram from '../components/Histogram'
import Heatmap from '../components/Heatmap';
import WordCloud from '../components/WordCloud';

export default function Rutes(props){
    
    return(
        <Switch>
            <Route path='/histogram' exact>
                <Histogram />
            </Route>
            <Route path='/heatmap' exact>
                <Heatmap />
            </Route>
            <Route path='/wordcloud' exact>
                <WordCloud />
            </Route>
        </Switch>
    )
}