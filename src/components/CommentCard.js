import Heading from "./Heading";
import Vote from "./Vote"
import Reply from "./Reply";
import Comment from "./Comment";
import Replies from "./Replies";
// import Modal from "./Modal";

import { useState } from "react";
const CommentCard = ({data}) => {

  const [showForm, setShowForm] = useState(false);
  
  const handleClick = () => {
    setShowForm(true);
  };

 const displayCard = data.map(dat => {
 return  <div>
    <div className="container  p-3 w-7/12 ml-72 mt-10 shadow-lg rounded-xl" key={dat.id} > 
                  
                <div className=" flex ">
                  <div className=" w-12  bg-slate-100 rounded-xl h-1/3 p-2"> 
                  <Vote votes={dat.score} />
                  </div>
                  <div className=" p-2">
                    <div className="flex justify-between pb-2  ">
                        <div className=" ">
                            <Heading  userImage = {dat.user.image.webp} username = {dat.user.username} createdAt = {dat.createdAt}/>
                        </div>
                        <div className=" ">
                            <Reply handleClick={handleClick} />
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
              return <div  className="container  p-3 w-7/12 ml-80 mt-10 shadow-lg rounded-xl " key={reply.id}>
                 {/* <Replies key={reply.id} content={reply.content} votes = {reply.score}  /> */}
                 <div className=" flex ">
                  <div className=" w-12   bg-slate-100 rounded-xl h-1/3 p-2"> 
                  <Vote votes={reply.score}/>
                  </div>
                  <div className=" p-2">
                    <div className="flex justify-between pb-2  ">
                        <div className=" ">
                            <Heading  userImage = {reply.user.image.webp} username = {reply.user.username} createdAt = {reply.createdAt}/>
                        </div>
                        <div className=" ">
                            <Reply data={dat} handleClick={handleClick}/>
                        </div>
                    </div>
                    <div className=" p-2">
                      <Comment content = {reply.content}/>
                    </div>
                  </div> 
                </div>
              </div>
            })}
          </div>
          {showForm && (
          <form className="mt-6 flex">
            <textarea placeholder="Write a reply" className="ml-80 mr-5 h-24 w-6/12 p-2 border-2 border-gray-300 rounded-lg" />
            <button type="submit" className="bg-blue-500 text-white p-2  rounded-lg">
              Send
            </button>
          </form>
        )}
 </div>
    }) 



    return ( 
        
        <div className="  ">
             {displayCard}
        </div>
     );
}
 
export default CommentCard;