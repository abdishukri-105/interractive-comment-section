import Heading from "./Heading";
import Vote from "./Vote"
import Reply from "./Reply";
import Comment from "./Comment";
// import Modal from "./Modal";


const CommentCard = ({data}) => {

 const displayCard = data.map(dat => {
    return  <div className="container  p-3 w-7/12 ml-80 mt-10 shadow-lg rounded-xl" > 
                  
                <div className=" flex ">
                  <div className=" w-12   bg-slate-100 rounded-md p-2"> 
                  <Vote votes={dat.score}/>
                  </div>
                  <div className=" p-2">
                    <div className="flex justify-between pb-2  ">
                        <div className=" ">
                            <Heading  userImage = {dat.user.image.png} username = {dat.user.username} createdAt = {dat.createdAt}/>
                        </div>
                        <div className=" ">
                            <Reply />
                        </div>
                    </div>
                    <div className=" p-2">
                      <Comment content = {dat.content}/>
                    </div>
                  </div> 
                </div>
             </div>
    }) 



    return ( 
        
        <div className="  ">
             {displayCard}
        </div>
     );
}
 
export default CommentCard;