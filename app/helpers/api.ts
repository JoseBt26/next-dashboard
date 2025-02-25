const headers = {
    "Content-Type": "application/json",
    Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YmQxZGI3NjFjYzI2MzJhOWNmYzk3YyIsImVtYWlsIjoiSm9EZXZAdGVzdC5jb20iLCJuYW1lIjoiam9zZGV2IiwiaWF0IjoxNzQwNDQ3MTk2fQ.nfdpGGsvEGOuGbp6CLVFRwsipfwyj8hGvCcTG-l6yoU"
}

// Se hace la petición a la API para obtener los datos de los clientes
export const fetchCardData = async () => {
    try {
        const [getCustomersCount, getInvoicesCount, getInvoicesStatusCount] = await Promise.all([
            fetch(`${process.env.BACKEND_URL}/customer/count`, { headers }),
            fetch(`${process.env.BACKEND_URL}/invoices/count`, { headers }),
            fetch(`${process.env.BACKEND_URL}/invoices/status-count`, { headers }),

        ]);




        const resulCustomersCount = await getCustomersCount.json();
        const resulInvoicesCount = await getInvoicesCount.json();
        const resulInvoicesStatusCount = await getInvoicesStatusCount.json();

        const numberOfInvoices = Number(resulInvoicesCount ?? "0");
        const numerOfCustomers = Number(resulCustomersCount ?? "0");
        const totalPaidInvoices = resulInvoicesStatusCount.paid ?? "0";
        const totalPendingInvoices = resulInvoicesStatusCount.pending ?? "0";



        return {
            numberOfInvoices,
            numerOfCustomers,
            totalPaidInvoices,
            totalPendingInvoices
        };
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch card data");
    };
};

export const fetchRevenue = async () => {
    try {
        const fetchRevenue = await fetch(`${process.env.BACKEND_URL}/revenues`, { headers });
        const revenueResult = await fetchRevenue.json();

        return revenueResult;
    }
    catch (error) {
        console.log(error);
        throw new Error("Failed to fetch revenue data");
    }

}