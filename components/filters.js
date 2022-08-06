import styles from '../styles/filters.module.css'

const Filters = ({routesList, setRoutes}) => {

    function showAllRoutes(routesList) {
        return routesList.routes.slice();
      }  
    
      function showRoutesUnderHundred(routesList) {
        return routesList.routes.slice().filter(route => parseInt(route.distance) > 100);
      }    
    
      function showRoutesHighElevation(routesList) {
        return routesList.routes.slice().filter(route => parseInt(route.elevation) > 800);
      }   

    return (
        <>
        <ul className={styles.filterContainer}>
            <li className={styles.filterButton}>
                <button onClick={() => setRoutes(showAllRoutes(routesList))}>All</button>
            </li>

            <li className={styles.filterButton}>
                <button onClick={() => setRoutes(showRoutesUnderHundred(routesList))}>Routes under 100k</button>
            </li>

            <li className={styles.filterButton}>
                <button onClick={() => setRoutes(showRoutesHighElevation(routesList))}>Lots of hills</button>
            </li>
          </ul>
        </>
)}

export default Filters