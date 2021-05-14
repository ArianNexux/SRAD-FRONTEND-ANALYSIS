import {API_ROOT_URL} from '../constants';
import useIsVisible from '../hooks/useIsVisible';
import useStickySWR from '../hooks/useStickySWR';
import {fetcher} from '../utils/commonFunctions';
import MapAngola from './MapAngola'
import classnames from 'classnames';
import React, {useEffect,useState, useRef, lazy, Suspense} from 'react';
import {Helmet} from 'react-helmet';
import {useLocation} from 'react-router-dom';
import {useLocalStorage, useSessionStorage, useWindowSize} from 'react-use';
import api from '../services/api';
import {
  Grid
} from '@material-ui/core';
import LatestOrders from './LatestOrders'
import GrowthTending from './GrowthTending'
import TableMaterial from './TableMaterial';
import CardMaterial from './CardMaterial';
import './Welcome.css'
const TimeseriesExplorer = lazy(() => import('./TimeseriesExplorer'));
const MapExplorer = lazy(() => import('./MapExplorer'));
const Actions = lazy(() => import('./Actions'));
const Table = lazy(() => import('./Table'));
const Minigraphs = lazy(() => import('./Minigraphs'));
const Footer = lazy(() => import('./Footer'));
const Search = lazy(() => import('./Search'));
const Level = lazy(() => import('./Level'));
const MapSwitcherWel = lazy(() => import('./MapSwitcherWel'));
const StateHeader = lazy(() => import('./StateHeader'));

function Welcome() {

  
    const [doencas, setDoencas] = useState([]);
    const [dados, setDados] = useState()
    const [selectedDoenca, setSelectedDoenca] = useState(1)
    const [firstTime, setFirstTime] = useState(true)
    const [counties, setCounties] = useState([])
    const [confirmed, setConfirmed] = useState(0)
    const [countiesDataGraph, setCountiesDataGraph] = useState([])
    const [active, setActive] = useState(0)
    const [activeDataGraph, setActiveDataGraph] = useState([])
    const [desease, setDesease] = useState(0)
    const [deseaseDataGraph, setDeseaseDataGraph] = useState([])
    const [recovered, setRecovered] = useState(0)
    const [recoveredDataGraph, setRecoveredDataGraph] = useState(0)
    const [monthsCase, setMonthsCase] = useState([])
    const [updated, setUpdated] = useState("")
    const [actualProvince, setActualProvince] = useState({
      nome:"Luanda",
      id:11
    })
    let newArrayMonths = [];
    let arrMonths = [];
  
 
      
  
const datas = {
  // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: "Activos",
      type: "bar",
      data: activeDataGraph,
      fill: false,
      fontColor: "#fff",
      borderColor: "#290212",
      backgroundColor: "#0066ff",
      pointBorderColor: "#0066ff",
      pointBackgroundColor: "#0066ff",
      pointHoverBackgroundColor: "#0066ff",
      pointHoverBorderColor: "#0066ff",
      yAxisID: "y-axis-2",
    },
    {
      type: "bar",
      label: "Mortos",
      data: deseaseDataGraph,
      fill: false,
      backgroundColor: "#ff4d4d",
      borderColor: "#ff4d4d",
      hoverBackgroundColor: "#ff4d4d",
      hoverBorderColor: "#ff4d4d",
      yAxisID: "y-axis-1",
    },
    {
      type: "bar",
      label: "Recuperados",
      data:recoveredDataGraph,
      fill: false,
      backgroundColor: "orange",
      borderColor: "orange",
      hoverBackgroundColor: "orange",
      hoverBorderColor: "orange",
      yAxisID: "y-axis-1",
    },
  ],
};
const handleTableCounties = (province_id) =>{
  if(selectedDoenca != 0){
    api.get(`/doencas/casospormunicipios/${province_id}/${selectedDoenca}`).then((response) => {
      setCounties(response.data);
      
    });

    api.get(`/provincias/${province_id}`).then((response) => {
      setActualProvince(response.data)
    });

    api.get(`/casos/casosemdataprovincias/${actualProvince.id}/${selectedDoenca}/`).then((response)=>{
      arrMonths.forEach((element,index, array)=>{
         newArrayMonths.push([element, response.data[index].mortes == null ? 0 : response.data[index].mortes, response.data[index].recuperados == null ? 0 : response.data[index].recuperados, response.data[index].activos == null ? 0 : response.data[index].activos])
      })
    })
    setFirstTime(false)

  }
}


useEffect(() => {
    api.get('/doencas').then((response) => {
        setDoencas(response.data);
    });

    api.get('/ultimoupdate').then((response) => {
      setUpdated(response.data.data);
  });
    
    newArrayMonths.push(['x', 'Activo', 'Morto', 'Recuperado'])
    
    arrMonths = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez"
    ];
    
    handleTableCounties(11)
    setMonthsCase(newArrayMonths)

},[]);

useEffect(()=>{
  if(!firstTime){
    handleTableCounties(actualProvince.id)    

  }
},[selectedDoenca])

useEffect(() => {
  let conf = 0, act=0, des=0, rec=0;
  let countDataGraph = [], actDataGraph=[], desDataGraph=[], recDataGraph=[];
  counties.map((index, key)=>{
       conf += parseInt(verifyValue(index.Mortes)) + parseInt(verifyValue(index.Recuperados)) + parseInt(verifyValue(index.Activos))
       act += parseInt(verifyValue(index.Activos))
       actDataGraph.push(parseInt(verifyValue(index.Activos)))
       recDataGraph.push(parseInt(verifyValue(index.Recuperados)))
       desDataGraph.push(parseInt(verifyValue(index.Mortes))) 
       countDataGraph.push(index.municipio_nome)

       des += parseInt(verifyValue(index.Mortes))
       rec += parseInt(verifyValue(index.Recuperados))
      })  
        console.log(conf)
        setConfirmed(conf)
        setActive(act)
        setDesease(des)
        setRecovered(rec)
        setCountiesDataGraph(countDataGraph)
        setRecoveredDataGraph(recDataGraph)
        setDeseaseDataGraph(desDataGraph)
        setActiveDataGraph(actDataGraph)  
        setMonthsCase(newArrayMonths)

},[counties, selectedDoenca]);

  const [regionHighlighted, setRegionHighlighted] = useState({
    stateCode: 'TT',
    districtName: null,
  });

  
  const [anchor, setAnchor] = useLocalStorage('anchor', null);
  const [expandTable, setExpandTable] = useLocalStorage('expandTable', false);
  const [mapStatistic, setMapStatistic] = useSessionStorage(
    'mapStatistic',
    'active'
  );

const [date, setDate] = useState('');
const location = useLocation();
const verifyValue = function(index){
   return (index == null ?  0 :  index)
}

const {data} = useStickySWR(
    `${API_ROOT_URL}/data${date ? `-${date}` : ''}.min.json`,
    fetcher,
    {
      revalidateOnMount: true,
      refreshInterval: 100000,
    }
  );

const homeRightElement = useRef();
const isVisible = useIsVisible(homeRightElement);
const {width} = useWindowSize();

  return (
    <React.Fragment>
       
      <Helmet>
        <title>Rastreador de Doenças</title>
        <meta
          name="title"
          content="Coronavirus em Angola: Latest Map and Case Count"
        />
      </Helmet>
      
      <div className="Home">
      
  
        <div className={classnames('home-left', {expanded: expandTable})}>
          <div className="header">
            {
              /*
              
              <Suspense fallback={<div />}>
              <Search />
            </Suspense>
              
              */ 
            }
            
            <h1>Angola</h1>
            <span>Última actualização {updated}</span> 
            <Suspense fallback={<div />}>
                <select name='id_doenca' className="selectSwitch" onChange={(e)=> setSelectedDoenca(e.target.value)}>
                    {
                        doencas.map((item, index) => (
                            <option {...item.id == 11 ? 'selected' : ''} value={item.id}> {item.nome} </option>
                        ))
                    }
                </select>
            </Suspense>           
          </div>
         
            
          <div style={{position: 'relative', marginTop: '1rem'}}>
              <Suspense fallback={
              <div style={{height: '50rem'}} />}>
                    
                  <div style={{display:'flex', flexDirection:'row', width:'390px'}}>
                    <CardMaterial color="red" bgcolor='rgba(255,0,0,.2)' label = "Confirmados" value={confirmed}/>
                    <CardMaterial color="green" bgcolor='rgba(0,255,0,.2)' label = "Recuperados" value={recovered}/>
                    <CardMaterial color="#007bff" bgcolor='rgba(0,0,255,.2)' label = "Activos" value={active}/>
                    <CardMaterial color="black" label = "Mortes" value={desease}/>
                  </div>
                  <h1>{actualProvince.nome}</h1>
              </Suspense>
              
          </div>
              <TableMaterial counties={counties}/>
              
                  
        </div>
        
        <MapAngola handleTableCounties = {handleTableCounties} /> 
        <h1>Gráficos de Casos por Municípios</h1>
        <Grid
          container
          style={{ width: '100%',height: "65vh" , marginLeft: "20%",}}
          spacing={3}
        >
        <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders
              data={datas}
              label={countiesDataGraph}
            />
          </Grid>
          </Grid>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default Welcome;