import { InfoCard } from 'anjrot-components';
import React from 'react';
import { fetchCardData } from '../helpers/api';



const { numerOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();
const CardWrapper = async () => {
    return (
        <>
            <InfoCard title="Collected" value={totalPaidInvoices} type="collected" currency={{ locale: "en-US", currency: "USD" }} />
            <InfoCard title="Pending" value={totalPendingInvoices} type="pending" currency={{ locale: "en-US", currency: "USD" }} />
            <InfoCard title="Total Invoices" value={numberOfInvoices} type="invoices" />
            <InfoCard title="Total Costumers" value={numerOfCustomers} type="customers" />
        </>
    );
};

export default CardWrapper;