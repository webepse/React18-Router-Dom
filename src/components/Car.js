import { useParams } from "react-router-dom";
const Car = () => {
    let {model} = useParams()
    return ( 
        <h1>Modèle de voiture: {model}</h1>
     );
}
 
export default Car;