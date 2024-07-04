import joi from 'joi'

const registerValidation =(data)=>{ 
    const Schema =joi.object({ 
        name:joi.string().required(),
        email:joi.string().email().required(),
        phone:joi.string().required(),
        password:joi.string().min(8).max(15)
    })
    return Schema.validate(data)
}

const loginValidation=(data)=>{ 
    const Schema=joi.object({ 
        email:joi.string().required(),
        password:joi.string().required()
    })
    return Schema.validate(data)
}

export {registerValidation ,loginValidation}