from django.urls import path
from . import views

urlpatterns = [
    path('api/candlestick-data/', views.get_candlestick_data),
    path('api/line-chart-data/', views.get_line_chart_data),
    path('api/bar-chart-data/', views.get_bar_chart_data),
    path('api/pie-chart-data/', views.get_pie_chart_data),
]