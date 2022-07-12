import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const VerticalBarChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    const labels = ['model1', 'model2', 'model3', 'model4', 'model5'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [0.1, 0.2, 0.3, 0.4, 0.5],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [0.6, 0.7, 0.8, 0.9, 1],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ]
    }

    return (
        <Bar options={options} data={data} />
    )
}
