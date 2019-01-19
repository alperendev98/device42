// widgets data
import ChartConfig from 'Constants/chart-config';

// helpers
import { hexToRgbA } from 'Helpers/helpers';

// Daily Sales
export const dailySales = {
    label: 'Daily Sales',
    chartdata: [100, 200, 125, 250, 200, 150, 200],
    labels: ['9', '10', '11', '12', '13', '14', '15'],
}

// Space Used
export const spaceUsed = {
    chartData: {
        labels: ['Space Used', 'Space Left'],
        datasets: [{
            data: [275, 100],
            backgroundColor: [
                ChartConfig.color.primary,
                ChartConfig.color.info
            ],
            hoverBackgroundColor: [
                ChartConfig.color.primary,
                ChartConfig.color.info
            ]
        }]
    },
}

//Traffic Channel
export const trafficChannel = {
    label: 'Direct User',
    labels: ['Direct User', 'Referral', 'Facebook', 'Google', 'Instagram'],
    chartdata: [8.5, 6.75, 5.5, 7, 4.75]
}

// top selling products
export const topSellingProducts = {
    totalSales: '12,550',
    earning: '$35,000',
    products: [
    ]
}

// site visitors
export const siteVisitors = [
    { name: 'Page A', uv: 4000, pv: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398 },
    { name: 'Page C', uv: 2000, pv: 9800 },
    { name: 'Page D', uv: 2780, pv: 3908 },
    { name: 'Page E', uv: 1890, pv: 4800 },
    { name: 'Page F', uv: 2390, pv: 3800 },
    { name: 'Page G', uv: 3490, pv: 4300 },
]

// visitors data
export const visitorsData = {
    chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [600, 500, 650, 470, 520, 700, 500, 650, 580, 500, 650, 700]
    },
    monthly: 7233,
    weekly: 5529
}

// sales data
export const salesData = {
    chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [600, 500, 650, 470, 520, 700, 500, 650, 580, 500, 650, 700]
    },
    today: 6544,
    totalRevenue: 9125
}

// orders data
export const ordersData = {
    chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        data: [600, 500, 650, 470, 520, 700, 500, 650, 580, 500, 650, 700]
    },
    today: 5652,
    totalRevenue: 8520
}

// email statistics Data
export const emailStatisticsData = {
    labels: ['Opened', 'Bounced', 'Spam', 'Unsent'],
    datasets: [
        {
            label: 'Series A',
            backgroundColor: ChartConfig.color.white,
            borderColor: ChartConfig.color.primary,
            borderWidth: 0,
            hoverBackgroundColor: ChartConfig.color.white,
            hoverBorderColor: ChartConfig.color.white,
            data: [53, 15, 30, 7]
        }
    ]
}

// data use
export const dataUsed = {
    labels: ['0.00', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '11.0', '12.0', '13.0', '14.0', '15.0'],
    datasets: [
        {
            label: 'Series A',
            backgroundColor: ChartConfig.color.white,
            borderColor: ChartConfig.color.white,
            borderWidth: 4,
            hoverBackgroundColor: ChartConfig.color.white,
            hoverBorderColor: ChartConfig.color.white,
            data: [65, 59, 80, 81, 56, 55, 40, 45, 35, 45, 65, 70, 75, 80, 30, 45]
        }
    ],
    totalUsed: '200 GB'
}

// product stats
export const productStats = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
    datasets: [
        {
            label: 'Series A',
            fill: false,
            tension: 0,
            backgroundColor: ChartConfig.color.primary,
            borderColor: ChartConfig.color.primary,
            borderWidth: 4,
            hoverBackgroundColor: ChartConfig.color.primary,
            hoverBorderColor: ChartConfig.color.primary,
            data: [2500, 900, 400, 1100, 1250, 900, 2100, 3400, 1950, 2000, 700, 740]
        },
        {
            label: 'Series B',
            fill: false,
            tension: 0,
            backgroundColor: ChartConfig.color.info,
            borderColor: ChartConfig.color.info,
            borderWidth: 4,
            hoverBackgroundColor: ChartConfig.color.info,
            hoverBorderColor: ChartConfig.color.info,
            data: [3800, 3300, 2300, 3500, 2800, 3200, 3100, 4100, 3500, 3000, 2500, 2300]
        }
    ],
    customLegends: [
        {
            name: 'Admin Theme',
            class: 'badge-primary'
        },
        {
            name: 'Wordpress Theme',
            class: 'badge-info'
        }
    ]
}

// email statistics
export const emailStatisticsV2Data = {
    chartData: {
        open: {
            data: [80, 180, 165, 220, 130, 255, 245, 325],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug'],
        },
        bounce: {
            data: [275, 215, 235, 120, 190, 145, 170, 90],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug']
        },
        unsubscribe: {
            data: [275, 215, 235, 120, 190, 145, 170, 90],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug']
        }
    }
}

// total revenue
export const totalRevenue = {
    chartData: {
        labels: ['Last Week', 'Target'],
        datasets: [{
            data: [100, 260],
            backgroundColor: [
                ChartConfig.color.info,
                ChartConfig.color.primary
            ],
            hoverBackgroundColor: [
                ChartConfig.color.info,
                ChartConfig.color.primary
            ]
        }]
    },
    target: '$566',
    lastWeek: '$100'
}

// online visitors data
export const onlineVisitorsData = {
    markers: [
        { latLng: [41.90, 12.45], name: 'Vatican City' },
        { latLng: [43.73, 7.41], name: 'Monaco' },
        { latLng: [-0.52, 166.93], name: 'Nauru' },
        { latLng: [-8.51, 179.21], name: 'Tuvalu' },
        { latLng: [43.93, 12.46], name: 'San Marino' },
        { latLng: [47.14, 9.52], name: 'Liechtenstein' },
        { latLng: [7.11, 171.06], name: 'Marshall Islands' },
        { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
        { latLng: [3.2, 73.22], name: 'Maldives' },
        { latLng: [35.88, 14.5], name: 'Malta' },
        { latLng: [12.05, -61.75], name: 'Grenada' },
        { latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines' },
        { latLng: [13.16, -59.55], name: 'Barbados' },
        { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
        { latLng: [-4.61, 55.45], name: 'Seychelles' },
        { latLng: [7.35, 134.46], name: 'Palau' },
        { latLng: [42.5, 1.51], name: 'Andorra' },
        { latLng: [14.01, -60.98], name: 'Saint Lucia' },
        { latLng: [6.91, 158.18], name: 'Federated States of Micronesia' },
        { latLng: [1.3, 103.8], name: 'Singapore' },
        { latLng: [1.46, 173.03], name: 'Kiribati' },
        { latLng: [-21.13, -175.2], name: 'Tonga' },
        { latLng: [15.3, -61.38], name: 'Dominica' },
        { latLng: [-20.2, 57.5], name: 'Mauritius' },
        { latLng: [26.02, 50.55], name: 'Bahrain' },
        { latLng: [0.33, 6.73], name: 'São Tomé and Príncipe' }
    ],
    totalVisitors: '1655+'
}

// traffic sources
export const trafficSources = {
    totalActiveUsers: '359,234',
    chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [40, 30, 85, 50, 90, 45, 55, 45, 80, 72, 78, 63]
    }
}

// total earns v2
export const totalEarnsV2 = {
    chartData: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        data: [10, 120, 50, 150, 120, 70, 140, 150, 110, 130, 180, 85],
        label: 'Earns'
    },
    legend: {
        name: 'Total Earns',
        class: 'badge-primary'
    }
}

// traffic Status
export const trafficStatus = {
    chartLabels: ['0.00', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'],
    chartDatasets: [
        {
            label: 'Series A',
            backgroundColor: ChartConfig.color.primary,
            borderColor: ChartConfig.color.primary,
            borderWidth: 1,
            hoverBackgroundColor: ChartConfig.color.primary,
            hoverBorderColor: ChartConfig.color.primary,
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'Series B',
            backgroundColor: ChartConfig.color.default,
            borderColor: ChartConfig.color.default,
            borderWidth: 1,
            hoverBackgroundColor: ChartConfig.color.default,
            hoverBorderColor: ChartConfig.color.default,
            data: [45, 39, 40, 60, 35, 25, 60]
        }
    ],
    onlineSources: '3500',
    today: '17,020',
    lastMonth: '20.30%'
}

// total earns
export const totalEarns = {
    labels: ['Jan 1', 'Jan 7', 'Jan 14', 'Jan 21', 'Jan 28', 'Feb 4', 'Feb 11', 'Feb 18', 'Feb 25', 'Feb 28', 'Mar 2', 'Mar 6'],
    datasets: [
        {
            label: 'Sales',
            fill: true,
            lineTension: 0,
            fillOpacity: 0.5,
            backgroundColor: hexToRgbA(ChartConfig.color.primary, 0.8),
            borderColor: ChartConfig.color.primary,
            pointBorderColor: ChartConfig.color.white,
            pointBackgroundColor: ChartConfig.color.white,
            pointBorderWidth: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: hexToRgbA(ChartConfig.color.primary, 1),
            pointHoverBorderColor: hexToRgbA(ChartConfig.color.primary, 1),
            pointHoverBorderWidth: 8,
            pointRadius: 0,
            pointHitRadius: 10,
            data: [250, 350, 270, 420, 380, 220, 400, 550, 480, 190, 390, 380]
        },
        {
            label: 'Visitors',
            fill: true,
            lineTension: 0,
            fillOpacity: 0.5,
            backgroundColor: hexToRgbA(ChartConfig.color.warning, 0.4),
            borderColor: ChartConfig.color.warning,
            pointBorderColor: ChartConfig.color.white,
            pointBackgroundColor: ChartConfig.color.white,
            pointBorderWidth: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: hexToRgbA(ChartConfig.color.warning, 1),
            pointHoverBorderColor: hexToRgbA(ChartConfig.color.warning, 1),
            pointHoverBorderWidth: 8,
            pointRadius: 0,
            pointHitRadius: 10,
            data: [600, 400, 500, 350, 650, 630, 450, 480, 650, 500, 530, 550,]
        }
    ]
}

// total sales
export const totalSales = {
    label: 'Sales',
    chartdata: [250, 310, 150, 420, 250, 450],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
}

// net profit
export const netProfit = {
    label: 'Net Profit',
    chartdata: [250, 310, 150, 420, 250, 450],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
}

// tax stats
export const taxStats = {
    label: 'Tax',
    chartdata: [250, 310, 150, 420, 250, 450],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
}

// expenses stats
export const expenses = {
    label: 'Expenses',
    chartdata: [250, 310, 150, 420, 250, 450],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
}
//Project Task Management
export const projectTaskData = {
    'BookingKoala': [
        {
            id: 1,
            title: "Wireframing for dashboard sidebar and topbar",
            date: 1528368468,
            status: "Planning",
            color: "primary",
            team: [
                {
                    id: 1,
                    name: "Maggie",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                },
                {
                    id: 2,
                    name: "Lisa",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                },
                {
                    id: 3,
                    name: "Lucile",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                }
            ]
        },
        {
            id: 2,
            title: "Wireframing for dashboard sidebar and topbar",
            date: 1529346600,
            status: "In Progress",
            color: "success",
            team: [
                {
                    id: 1,
                    name: "Maggie",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                },
                {
                    id: 2,
                    name: "Lisa",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                },
                {
                    id: 3,
                    name: "Lucile",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                }
            ]
        }
    ],
    'Reactify': [
        {
            id: 1,
            title: "Create video placeholder for website",
            date: 1529951400,
            status: "In Progress",
            color: "success",
            team: [
                {
                    id: 1,
                    name: "Maggie",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                },
                {
                    id: 2,
                    name: "Lisa",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                },
                {
                    id: 3,
                    name: "Lucile",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                }
            ]
        },
        {
            id: 2,
            title: "Social media ads banner for launching",
            date: 1531161000,
            status: "On Hold",
            color: "success",
            team: [
                {
                    id: 1,
                    name: "Maggie",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                },
                {
                    id: 2,
                    name: "Lisa",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                },
                {
                    id: 3,
                    name: "Lucile",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                }
            ]
        }
    ],
    'Adminify': [
        {
            id: 1,
            title: "Create new design for frontend website",
            date: 1530729000,
            status: "Completed",
            color: "danger",
            team: [
                {
                    id: 1,
                    name: "Maggie",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                },
                {
                    id: 2,
                    name: "Lisa",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                },
                {
                    id: 3,
                    name: "Lucile",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                }
            ]
        },
        {
            id: 2,
            title: "Update new logo everywhere",
            date: 1532716200,
            status: "Completed",
            color: "danger",
            team: [
                {
                    id: 1,
                    name: "Maggie",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                },
                {
                    id: 2,
                    name: "Lisa",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                },
                {
                    id: 3,
                    name: "Lucile",
                    avatar: "http://reactify.theironnetwork.org/data/images/user-1.jpg",
                }
            ]
        }
    ]
}