import React, { useContext } from 'react';
import Container from '../../shared/Container/Container';
import AppContexts from '../../context/AppContexts';
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from 'recharts';


// create custom tooltip
const CustomTooltip = ({ active, payload, total }) => {
    if (active && payload && payload.length) {
        const data = payload[0];
        const percentage = total
            ? ((data.value / total) * 100).toFixed(1)
            : 0;

        return (
            <div className="bg-white px-3 py-2 rounded-md shadow-md border text-sm">
                <p className="font-medium text-gray-700">
                    {data.name}
                </p>
                <p className="text-gray-500">
                    {data.value} ({percentage}%)
                </p>
            </div>
        );
    }
    return null;
};


const Stats = () => {
    const { timeline } = useContext(AppContexts);

    const chartData = [
        {
            name: "Call",
            value: timeline.filter(item => item.type === "call").length
        },
        {
            name: "Text",
            value: timeline.filter(item => item.type === "text").length
        },
        {
            name: "Video",
            value: timeline.filter(item => item.type === "video").length
        }
    ];

    const COLORS = ["#1f4d3f", "#7c3aed", "#22c55e"];

    const total = chartData.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="py-10 md:py-14 lg:py-20">
            <Container>
                <div className="space-y-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#1f2937] font-bold">
                        Friendship Analytics
                    </h1>

                    {
                        timeline.length === 0 ?
                            <div className='bg-white min-h-50 flex justify-center items-center'>
                                <p className="text-[#64748b] text-lg lg:text-xl">No timeline history yet. Start adding interactions to see analytics.</p>
                            </div>
                            :
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <p className="text-base md:text-lg lg:text-xl text-[#244d3f] font-medium mb-4">
                                    By Interaction Type
                                </p>

                                {/* Chart */}
                                <div className="w-full max-w-md mx-auto h-75 sm:h-75 md:h-100 min-w-0">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <PieChart>
                                            {/* Custom total tooltip as prop */}
                                            <Tooltip content={<CustomTooltip total={total} />} />

                                            <Pie
                                                data={chartData}
                                                dataKey="value"
                                                nameKey="name"
                                                innerRadius="70%"
                                                outerRadius="90%"
                                                paddingAngle={6}
                                                cornerRadius={20}
                                                stroke="none"
                                            >
                                                {chartData.map((entry, index) => (
                                                    <Cell
                                                        key={`cell-${index}`}
                                                        fill={COLORS[index]}
                                                    />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Legend */}
                                <div className="flex justify-center gap-6 mt-4 text-sm md:text-base">
                                    {chartData.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <span
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: COLORS[index] }}
                                            ></span>
                                            <span className="text-gray-600">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                    }
                </div>
            </Container>
        </div>
    );
};

export default Stats;