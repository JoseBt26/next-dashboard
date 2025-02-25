
import CardWrapper from "../components/CardWrapper";
import ChartWrapper from "../components/ChartWrapper";
import { bebasNeueFont, } from "../ui/fonts";



const DashboardPage = () => {



    return (
        <main>
            <h1 className={`${bebasNeueFont.className} mb-4 text-xl `}> Dashboard </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <CardWrapper />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 mg:grid-cols-4 lg:grid-cols-8 ">
                <div className="w-full md:col-span-4">
                    <h2 className={`${bebasNeueFont.className} mb-4 text-xl `}>Recent Revenues</h2>
                    <ChartWrapper />

                </div>
                <div className="w-full md:col-span-4">
                    <h2 className={`${bebasNeueFont.className} mb-4 text-xl `}>Latest Invoices </h2>

                </div>
            </div>


        </main>
    );
}

export default DashboardPage;

