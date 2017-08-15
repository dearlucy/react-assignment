import React from 'react';
import ChartWidget from '../ChartWidget';
import style from './style.less';

function Dashboard() {
  return (
    <div className={style.container}>
      <ChartWidget />
    </div>
  );
}

export default Dashboard;
