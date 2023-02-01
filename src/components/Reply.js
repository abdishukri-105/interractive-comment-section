import replyImg from "../images/icon-reply.svg"
import deleteImg from "../images/icon-delete.svg"

const Reply = ({handleClick}) => {
  
  
    return (
  <div>
      <div className="flex">
        <div className="flex mr-6 hover:visible">
          <img src={deleteImg} alt="" className="mr-2" />
          <p>delete</p>
        </div>
        <img src={replyImg} alt="" onClick={handleClick} />
      
      </div>
    
 </div>
    );
  };
  
  export default Reply;
  