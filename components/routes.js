// import handler from '../utils/read-routes.js';
// import { routes } from '../routes/routesfile'/
import { promises as fs } from 'fs';
import path from 'path';


function Routes({ routesList }) {    
    return (
    <div>
        <div>the routes</div>
        <div>{ routesList }</div>
    </div>
)}


export default Routes

