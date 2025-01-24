import React, { useState } from 'react';
import { AgCharts } from "ag-charts-react";

// Service Data : Assuming dummy data for chart implementation
export const services = [
    { name: 'Yoga', category: 'Fitness Classes', price: 20 },
    { name: 'Cardio & Strength', category: 'Fitness Classes', price: 25 },
    { name: 'Specialized Fitness', category: 'Fitness Classes', price: 30 },
    { name: 'Mental Health', category: 'Therapy Sessions', price: 22 },
    { name: 'Physical Therapy', category: 'Therapy Sessions', price: 15 },
    { name: 'Personal Development', category: 'Personal Development', price: 21 },
    { name: 'Creative Skills', category: 'Personal Development', price: 24 },
    { name: 'Technical Skills', category: 'Personal Development', price: 28 },
    { name: 'Language Learning', category: 'Educational Programs', price: 25 },
];

const Insights = () => {
    // Assuming dummy total revenue for each category
    const getCategoryRevenue = () => {
        const categoryRevenue = services.reduce((acc, service) => {
            if (acc[service.category]) {
                acc[service.category] += service.price;
            } else {
                acc[service.category] = service.price;
            }
            return acc;
        }, {});

        return Object.keys(categoryRevenue).map((category) => ({
            category,
            revenue: categoryRevenue[category],
        }));
    };

    const getData = () => {
        const data = getCategoryRevenue();
        return data.map((item) => ({
            category: item.category,
            revenue: item.revenue,
        }));
    };

    // Chart configuration
    const [options] = useState({
        title: {
            text: "Revenue by Service Category",
        },
        subtitle: {
            text: "In U.S. Dollars",
        },
        data: getData(),
        series: [
            {
                type: "bar",
                xKey: "category",
                yKey: "revenue",
                yName: "Revenue",
            },
        ],
    });

    return (
        <div className="flex flex-col lg:py-10 md:py-8 py-5 lg:px-10 md:px-8 px-5 gap-10">
            <h1 className="text-lg font-medium">Our Service Revenue Breakdown</h1>
            <AgCharts options={options} />
        </div>
    );
};

export default Insights;
