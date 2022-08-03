import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
    scales: {
        x: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Precision',
                color: '#911',
                font: {
                    family: 'Comic Sans MS',
                    size: 16,
                    weight: 'bold',
                },
            },
        },
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Recall',
                color: '#911',
                font: {
                    family: 'Comic Sans MS',
                    size: 16,
                    weight: 'bold',
                },
            },
        },
    },
};

// const data = {
//     datasets: [
//         {
//             label: 'Dataset 1',
//             data: Array.from({ length: 10 }, () => ({
//                 x: faker.datatype.float({ min: 0, max: 1.0 }),
//                 y: faker.datatype.float({ min: 0, max: 1.0 }),
//             })),
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         },
//         {
//             label: 'Dataset 2',
//             data: Array.from({ length: 10 }, () => ({
//                 x: faker.datatype.float({ min: 0, max: 1.0 }),
//                 y: faker.datatype.float({ min: 0, max: 1.0 }),
//             })),
//             backgroundColor: 'rgba(215, 19, 165, 0.5)',
//         },
//     ],
// };

const ScatterChart = ({datasets}) => {
    const data = {
        datasets: datasets,
    }

    return <Scatter options={options} data={data} />;
}


export default ScatterChart;