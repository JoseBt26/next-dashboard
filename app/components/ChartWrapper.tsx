import { RevenueChart } from 'anjrot-components';
import React from 'react';
import { fetchRevenue } from '../helpers/api';

const ChartWrapper = async () => {


    const revenue = await fetchRevenue();

    return <RevenueChart revenues={revenue} chartHeight={350} />

};

export default ChartWrapper; 