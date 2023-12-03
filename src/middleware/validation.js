import joi from 'joi'
export const generalFields={
    email:joi.string().email().required().min(5).messages({
        'string.empty':"email is required",
        'string.email':"plz enter a valid email"
    }),
    password:joi.string().required().min(3).message({
        'string.empty':"password is required",
    }),
    file:joi.object({
        size: joi.number().positive().required(),
        path:joi.string().required(),
        filename: joi.string().required(),
        destination:joi.string().required(),
        mimetype: joi.string().required(),
        encoding: joi.string().required(),
        originalname: joi.string().required(),
        filedname:joi.string().required(),
        dest:joi.string(),
    })
}
export const validation =(schema)=>{
    return (req,res,next)=>{
        const inputsDate={...req.body,...req.params,...req.query};
        if(req.file || req.files){
            inputsDate.file=req.file || req.files;
        }
        const validationResult= schema.validate(inputsDate,{abortEarly:false});
        if(validationResult.error?.details){
            return res.status(400).json({message:"validation error",validationError:validationResult.error?.details})
        }
        next();
    }
}