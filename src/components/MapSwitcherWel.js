import {PRIMARY_STATISTICS, STATISTIC_CONFIGS} from '../constants';

import classnames from 'classnames';
import React, {useState, useCallback, useEffect, useMemo} from 'react';
import ReactDOM from 'react-dom';
import {useSpring, animated, config} from 'react-spring';
import {useMeasure} from 'react-use';
import './Welcome.css'

const MapSwitcherWel = ({mapStatistic, setMapStatistic, dataCovid}) => {
  const [mapSwitcher, {width}] = useMeasure();
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [spring, set] = useSpring(() => ({
    opacity: 0,
    background: `${STATISTIC_CONFIGS[mapStatistic].color}20`,
    transform: `translateX(${
      width * PRIMARY_STATISTICS.indexOf(mapStatistic) * 0.25
    }px)`,
    config: config.gentle,
  }));

  useEffect(() => {

    
    if (width > 0) {
      ReactDOM.unstable_batchedUpdates(() => {
        set({
          transform: `translateX(${
            width * PRIMARY_STATISTICS.indexOf(mapStatistic) * 0.25
          }px)`,
          opacity: 1,
          background: `${STATISTIC_CONFIGS[mapStatistic].color}20`,
          delay: count === 0 ? 1500 : 0,
          onStart: setClicked.bind(this, true),
          onRest: setClicked.bind(this, false),
        });
      });
    }
  }, [count, mapStatistic, set, width]);

  const handleClick = useCallback(
    (statistic) => {
      setCount((prevCount) => prevCount + 1);
      setMapStatistic(statistic);
    },
    [setMapStatistic]
  );

  const trail = useMemo(() => {
    const styles = [];

    PRIMARY_STATISTICS.map((statistic, index) => {
      styles.push({
        animationDelay: `${750 + index * 250}ms`,
        textAlign: "center"
      });
      return null;
    });
    return styles;
  }, []);

  const CovidView = ({label, number, color}) => {

    return (
      <div className="label" style={{color: color}}>
        <h4 > {label} </h4>
        <h2> {number} </h2>
      </div>
    )
  }

  return (
    <div className="MapSwitcher" ref={mapSwitcher}>
      <animated.div className="highlight" style={spring}></animated.div>
  
      {PRIMARY_STATISTICS.map((statistic, index) => (
        <div
          key={index}
          className={classnames('clickable', {[`is-${statistic}`]: clicked})}
          onClick={handleClick.bind(this, statistic)}
        >
          <animated.div
            key={index}
            className={classnames('level-item', `is-${statistic}`, 'fadeInUp')}
            style={trail[index]}
          >
            {
              (index == 0)? 
                <CovidView label="Confirmados" number={dataCovid.confirmed} color="blue !important" /> 
                : 
                  (index == 1) ? 
                    <CovidView label="Activos" number={dataCovid.active}  color="#fff !important"/> 
                    : 
                      (index == 2) ? 
                        <CovidView label="Recuperados" number={dataCovid.recovered}   color="green !important"/> 
                          : (index == 3) ? 
                            <CovidView label="Falecidos" number={dataCovid.deceased}  color="green !important"/> : ""
            }
        </animated.div>
          
        </div>
      ))}
    </div>
  );
};

const isEqual = (prevProps, currProps) => {
  if (prevProps.mapStatistic !== currProps.mapStatistic) {
    return false;
  }
  return true;
};

export default React.memo(MapSwitcherWel, isEqual);
