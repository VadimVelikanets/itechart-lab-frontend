import React from 'react';
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

export const options = {
    indexAxis: 'y' as const,
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right' as const,
        },
        title: {
            display: true,
            text: '1. Question with few variants',
        },
    },
};

const labels = ['Answers 1', 'Answers 2', 'Answers 3', 'Answers 4'];

export const data = {
    labels,
    datasets: [
        {
            label: '1. Question with few variants',
            data: [1, 10, 24, 134],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },

    ],
};

const ResultsCommon = () => {
    return (
        <Bar options={options} data={data} />
    );
};

export default ResultsCommon;