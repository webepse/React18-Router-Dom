import { Outlet } from "react-router-dom";

const Cars = () => {
    return ( 
        <>
            <h1>Liste des voitures</h1>
            <Outlet />
        </>
     );
}
 
export default Cars;