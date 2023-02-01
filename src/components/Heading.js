const Heading = ({username,userImage, createdAt}) => {


    return ( <div className="flex justify-start">
                <img src={userImage} alt="user" className="rounded-full shadow-md mr-2" />
                <p className="mr-2">  {username} </p> 
                <p>{createdAt}</p>
              </div>
         );
}
 
export default Heading;