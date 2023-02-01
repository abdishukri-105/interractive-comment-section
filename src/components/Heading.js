const Heading = ({username,userImage, createdAt}) => {


    return ( <div className="flex justify-start">
                <img src={userImage} alt="" className="rounded-full shadow-md mr-2" />
                <p className="mr-2 font-bold">  {username} </p> 
                <p>{createdAt}</p>
              </div>
         );
}
 
export default Heading;