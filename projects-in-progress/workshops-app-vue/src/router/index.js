import Router from 'vue-router';
import AppHome from '../components/AppHome';
import WorkshopsList from '../components/WorkshopsList';
import WorkshopDetails from '../components/WorkshopDetails';

// EXERCISE: Set up a component WorkshopDetails that appears on /workshops/1
const router = new Router({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: AppHome
        },
        {
            name: 'workshops-list',
            path: '/workshops',
            component: WorkshopsList
        },
        {
            name: 'workshop-details',
            path: '/workshops/1',
            component: WorkshopDetails
        }
    ]
});

export default router;