import Heading from "./Heading";
import Vote from "./Vote"
import Reply from "./Reply";
import Comment from "./Comment";
import Replies from "./Replies";
// import Modal from "./Modal";


const CommentCard = ({data}) => {

 const displayCard = data.map(dat => {
    return  <div>
    <div className="container  p-3 w-7/12 ml-80 mt-10 shadow-lg rounded-xl" key={dat.id} > 
                  
                <div className=" flex ">
                  <div className=" w-12   bg-slate-100 rounded-xl h-1/3 p-2"> 
                  <Vote votes={dat.score}/>
                  </div>
                  <div className=" p-2">
                    <div className="flex justify-between pb-2  ">
                        <div className=" ">
                            <Heading  userImage = {dat.user.image.webp} username = {dat.user.username} createdAt = {dat.createdAt}/>
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
          <div className="">
            {dat.replies.map(reply => {
              return <div  className="container  p-3 w-7/12 ml-80 mt-10 shadow-lg rounded-xl ">
                 <Replies key={reply.id} content={reply.content} votes = {reply.score}  />
              </div>
            })}
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