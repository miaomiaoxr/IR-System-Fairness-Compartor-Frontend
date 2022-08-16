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

const rustColor = '#9A3A06';
const leafColor = '#006630';

const options1 = {
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            callbacks: {
              label: (item) => {
                const label = 'qid:' + item.dataset.label
                const Precision = 'precision: '+item.parsed.x.toFixed(3);
                const Recall = 'recall: '+item.parsed.y.toFixed(3);
                return [label, Precision, Recall];
              },
            }
          }
    },
    scales: {
        x: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Precision',
                color: rustColor,
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
                color: rustColor,
                font: {
                    family: 'Comic Sans MS',
                    size: 16,
                    weight: 'bold',
                },
            },
        },
    },
};

const options2 = {
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            callbacks: {
              label: (item) => {
                const label = 'qid:' + item.dataset.label
                const EED = 'EE-D: '+item.parsed.x.toFixed(3);
                const EER = 'EE-R: '+item.parsed.y.toFixed(3);
                return [label, EED, EER];
              },
            }
          }
    },
    scales: {
        x: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'EE-D',
                color: leafColor,
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
                text: 'EE-R',
                color: leafColor,
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

const ScatterChart = ({ datasets,ver }) => {
    const data = {
        datasets: datasets,
    }

    const options = ver === 2 ? options2 : options1;

    return <Scatter options={options} data={data} />;
}


export default ScatterChart;