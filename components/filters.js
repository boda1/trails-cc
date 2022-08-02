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
        <div className={styles.filterContainer}>
            <div className={styles.filterButton}>
                <button onClick={() => setRoutes(showAllRoutes(routesList))}>All</button>
            </div>

            <div className={styles.filterButton}>
                <button onClick={() => setRoutes(showRoutesUnderHundred(routesList))}>Routes under 100k</button>
            </div>

            <div className={styles.filterButton}>
                <button onClick={() => setRoutes(showRoutesHighElevation(routesList))}>Lots of hills</button>
            </div>
          </div>
        </>
)}

export default Filters