import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip, 
    Legend, 
} from 'chart.js/auto';
import { Line } from 'react-chartjs-2'

const GoalsCharts = ({user, days}) => {



    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        title: {
            display: true,
            text: 'Weight trends'
        }
    }

    const labels = days.map( day => day.date)

    const daysData = days.map(day => day.user.currentWeight)


    const data = {
        labels,
        datasets: [{
            label: 'currentWeight',
            data: daysData
        }]
    }


        return(
            <>
            <Line options={options} data={data} />
            </>
        )
    }

    export default GoalsCharts;