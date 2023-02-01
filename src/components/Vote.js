import plusImage from "../images/icon-plus.svg"
import MinusImage from "../images/icon-minus.svg"
const Vote = ({votes}) => {



    return (  
        
        <div className="p-2">
          <img src={plusImage} alt="" className="mb-3 mt-1"/>  
          <p className="mb-3"> {votes}</p> 
          <img src={MinusImage} alt="" className="mb-3" />
        </div>
    );
}
 
export default Vote;