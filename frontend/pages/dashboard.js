import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Line, Pie, Chart } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);


const Dashboard = () => {
    const [candlestickData, setCandlestickData] = useState(null);
    const [lineChartData, setLineChartData] = useState(null);
    const [barChartData, setBarChartData] = useState(null);
    const [pieChartData, setPieChartData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/candlestick-data/').then(response => setCandlestickData(response.data));
        axios.get('http://localhost:8000/api/line-chart-data/').then(response => setLineChartData(response.data));
        axios.get('http://localhost:8000/api/bar-chart-data/').then(response => setBarChartData(response.data));
        axios.get('http://localhost:8000/api/pie-chart-data/').then(response => setPieChartData(response.data));
    }, []);

    if (!candlestickData || !lineChartData || !barChartData || !pieChartData) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: "lightgrey" }}>
                <header style={{ marginBottom: '20px' }}>
                    <h1 style={{ textAlign: 'center' }}>Dashboard Overview</h1>
                </header>

            <main>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    <section style={{ backgroundColor: '#ffffff', border: '1px solid #ddd', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
                        <h2 style={{
                            fontSize: '1.5rem', fontWeight: '600',
                            color: '#555', marginBottom: '10px'
                        }}>Line Chart</h2>
                        <Line
                            data={{
                                labels: lineChartData.labels,
                                datasets: [
                                    {
                                        label: 'Line Data',
                                        data: lineChartData.data,
                                        borderColor: 'rgb(75, 192, 192)',
                                        tension: 0.1
                                    }
                                ]
                            }}
                            
                        />
                    </section>
                    <section style={{ backgroundColor: '#ffffff', border: '1px solid #ddd', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <h2 style={{
                            fontSize: '1.5rem', fontWeight: '600',
                            color: '#555', marginBottom: '10px'
                        }}>Bar Chart</h2>
                        <Bar
                            data={{
                                labels: barChartData.labels,
                                datasets: [
                                    {
                                        label: 'Bar Data',
                                        data: barChartData.data,
                                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                        borderColor: 'rgba(75, 192, 192, 1)',
                                        borderWidth: 1
                                    }
                                ]
                            }}
                            
                        />
                    </section>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <section style={{ backgroundColor: '#ffffff', border: '1px solid #ddd', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <h2 style={{
                            fontSize: '1.5rem', fontWeight: '600',
                            color: '#555', marginBottom: '10px'
                        }}> Pie Chart</h2>
                        <Pie
                            data={{
                                labels: pieChartData.labels,
                                datasets: [
                                    {
                                        label: 'Pie Data',
                                        data: pieChartData.data,
                                        backgroundColor: ['red', 'blue', 'yellow']
                                    }
                                ]
                            }}
                            
                        />
                    </section>

                    <section style={{ backgroundColor: '#ffffff', border: '1px solid #ddd', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <h2 style={{
                            fontSize: '1.5rem', fontWeight: '600',
                            color: '#555', marginBottom: '10px'
                        }}>Candlestick Chart</h2>
                        
                    </section>
                </div>
            </main>

            
        </div>
    );
};

export default Dashboard;