import { useParams } from "react-router-dom";

const MutualFundPage = () => {
    let {id} = useParams();
    
    return (  
        <h1>{id}</h1>
    );
}
 
export default MutualFundPage;