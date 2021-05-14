import React,{useState, useEffect} from 'react';
import { Chart } from "react-google-charts";
import api from '../services/api';

export default function GrowthTending({province, decease, data}){

    

  
  
  return( <Chart
  width={'1100px'}
  height={'600px'}
  chartType="LineChart"
  loader={<div style="text-align:center">Carregando o gráfico...</div>}
  data={data}
  options={{
    hAxis: {
      title: 'Meses',
    },
    vAxis: {
      title: 'Casos',
    },
    series: {
      1: { curveType: 'function' },
    },
  }}
  rootProps={{ 'data-testid': '2' }}
/>)
}