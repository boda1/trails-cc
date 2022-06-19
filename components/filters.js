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
            <div className='filters'>
                <button onClick={() => setRoutes(showAllRoutes(routesList))}>All</button>
            </div>

            <div className='filters'>
                <button onClick={() => setRoutes(showRoutesUnderHundred(routesList))}>Routes under 100k</button>
            </div>

            <div className='filters'>
                <button onClick={() => setRoutes(showRoutesHighElevation(routesList))}>Lots of hills</button>
            </div>
        </>
)}

export default Filters