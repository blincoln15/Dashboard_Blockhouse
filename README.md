# Dashboard Application
This project is a simple dashboard application built with Next.js and Django. It features four types of charts: Candlestick, Line, Bar, and Pie, with data fetched from a Django API.

## Setup and Running the Application

### Prerequisites
* Node.js (v14 or later)
* Python (v3.8 or later)
* Django (v4.0 or later)
* Django REST Framework (v3.14 or later)

### Backend Setup (Django)
1. Clone the Repository
```bash
git clone https://github.com/blincoln15/Dashboard_Blockhouse.git
cd DashBoard_Blockhouse_
```
2. Navigate to the Django Directory
```bash
cd myproject
```
3. Create and Activate a Virtual Environment
```bash
python -m venv env
source env/bin/activate
```
4. Install Dependencies
```bash
pip install djangorestframework
pip install django-cors-headers
```
5. Run Migrations
```bash
python manage.py migrate
```
6. Start the Django Server
```bash
python manage.py runserver
```

The Django server will be running on http://localhost:8000

## Frontend Setup (Next.js)
1. Navigate to the Next.js Directory
```bash
cd ../frontend
```
2. Install Dependencies
```bash
npm install
npm install react-chartjs-2 chart.js
npm install chartjs-chart-financial
```
3. Start the Next.js Application
```bash
npm run dev
```

The Next.js application will be running on http://localhost:3000.

## Libraries and Tools Used
* **Frontend:**
    * Next.js: A React framework for server-side rendering and static site generations.
    * React Chart.js 2: A wrapper for Chart.js to use with React.
    * Axios: A promise-based HTTP client for making API requests.
* **Backend:**
    * Django: A high-leevl Python web framework.
    * Django REST Framework: A toolkit for building Web APIs
    * chartjs-chart-financial: A Chart.js plugin for financial charts

## Approach and Though Process
### Frontend
1. **Set Up Next.js Application**:
    * Created a new Next.js app and installed necessary libraries like react-chartjs-2 for charting.
    * Implemented charts (Line, Bar, Pie, Candlestick) using react-chartjs-2 and configured them to fetch data from the Django API.
2. **Styling**:
    * Used inline styles for simplicity, ensuring the layout is responsive and visually appealing.
    * Designed the dashboard with a grid layout to organize charts effectively.
### Backend
1. **Set Up Django Project**:
    * Created a Django project and app for serving APIs.
    * Added Django REST Framework to handle API requests.
2. **Implemented API Endpoints**:
    * Defined endpoints to provide data for different types of charts.
    * Used hardcoded data for simplicity, with each endpoint returning JSON data in the expected format for the respective chart.

This project demonstrates the integration of a modern frontend framework with a robust backend API to build a dynamic and responsive dashboard application.
    
    
