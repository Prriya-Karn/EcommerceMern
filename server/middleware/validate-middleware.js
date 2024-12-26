
const validateMiddleware = (zodSchema)=>async(req,res,next)=>{
    try{
        const validateInputDataCheck = await zodSchema.parseAsync(req.body);
       req.body = validateInputDataCheck
        next();
    }catch(error){
        res.status(400).json({
            msgZodError : error
        })
    }
}


module.exports = validateMiddleware;



