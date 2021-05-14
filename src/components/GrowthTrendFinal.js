import React,{useState, useEffect} from 'react';
import { Chart } from "react-google-charts";
import api from '../services/api';
//http://localhost/srad/casos/casospordata/{doenca}
export default function GrowthTending({province, decease, data}){
  const [total, setTotal] = useState([]);
  let arr = []
    api.get("http://localhost/srad/casos/casospordata/1").then((response) => {
      setTotal(response.data)
      console.log("meu total ", total)
    
  });
  arr.push(['x', 'Mortes', 'Recuperados'])
  total.forEach((elem)=>{
    console.log("o for ", elem)
    arr.push([elem.date, elem.mortos, elem.recuperados])
  })
  
  return( <Chart
    width={'1200px'}
    height={'600px'}
    chartType="LineChart"
    loader={<div>Carregando o gráfico</div>}
    data={[
      ['x', 'Mortes', 'Recuperados'],
      ['01/20', 0, 0],
      ['01/20', 10, 5],
      ['01/20', 23, 15],
      ['01/20', 17, 9],
      ['01/20', 18, 10],
      ['01/20', 9, 5],
      ['01/20', 11, 3],
      ['01/20', 27, 19],
    ]}
    options={{
      hAxis: {
        title: 'Data',
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