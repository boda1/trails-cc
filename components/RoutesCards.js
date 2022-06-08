// import handler from '../utils/read-routes.js';
// import { routes } from '../routes/routesfile'
// import { promises as fs } from 'fs';
// import path from 'path';

const RoutesCards = ({routesList}) => {    
    return (
    <div>
        <ul className="route-cards" >
            {routesList.routes.map(route =>  
            <li className='route-card' key={route.id}>
                {route.route}
            </li>
            )}
        </ul>
    </div>
)}

export default RoutesCards