import axios from 'axios';

export default async function handler(req, res) {
    const response = await axios.get('http://localhost:8000/api/pie-chart-data/');
    res.status(200).json(response.data);
}