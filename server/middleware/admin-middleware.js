const adminMiddleware = async(req,res,next)=>{
    try{
        const data = req.body;
        if(data.isAdmin == "true") return next()
            res.status(400).json("you are not admin")
    }catch(error){
        console.log(error)
    }
}

module.exports = adminMiddleware;