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
import {iBarItem} from "./types";
import './BarItem.scss';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarItem = ({title}: iBarItem) => {
     const options = {
        indexAxis: 'y' as const,
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
    };

    const labels = ['Answers 1', 'Answers 2', 'Answers 3', 'Answers 4'];

    const data = {
        labels,
        datasets: [
            {
                label: title,
                data: [18, 10, 24, 134],
                borderColor: 'rgb(30, 144, 255)',
                backgroundColor: 'rgba(30, 144, 255, 0.5)',
            },

        ],
    };
    return (
        <div className="bar-item">
            <Bar options={options} data={data} />
        </div>
    );
};

export default BarItem;