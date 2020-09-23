import React from 'react';
import ChartWidget from '../ChartWidget';
import IndicatorWidget from '../IndicatorWidget';
import style from './style.less';

const Dashboard = () => {
    return (
      <div className={style.container}>
        <ChartWidget />
        <IndicatorWidget />
      </div>
    )
}

export default Dashboard;
