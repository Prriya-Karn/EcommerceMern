const adminMiddleware = async(req,res,next)=>{
    try{
        const data = req.isAdmin;
        // console.log("delete controller",data)
        if(data == "true"){
            // console.log("updated data")
            return next()
        }
            res.status(400).json("not admin")
            
    }catch(error){
        console.log(error)
    }
}

module.exports = adminMiddleware;