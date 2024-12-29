
const validateMiddleware = (zodSchema)=>async(req,res,next)=>{
    try{
        const validateInputDataCheck = await zodSchema.parseAsync(req.body);
       req.body = validateInputDataCheck
        next();
    }catch(error){
        res.status(400).json({
            msg: error.issues[0].message
        })
        console.log(error)
    }
}


module.exports = validateMiddleware;



