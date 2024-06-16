const joi=require('joi')

const pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const registerValidation=(data)=>{ 
    const Schema=joi.object({ 
        name:joi.string().required().min(5).max(10),
        address:joi.string().required(),
        phone:joi.number().integer().min(1000000000).max(9999999999),
        fees:joi.number().integer(),
        email:joi.string().required().email(),
        password:joi.string().min(8).max(15).required()
    })
    return Schema.validate(data)
}

module.exports.registerValidation=registerValidation;