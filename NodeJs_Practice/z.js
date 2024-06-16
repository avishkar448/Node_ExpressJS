const joi=require('joi')
const pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@.#$%^&-+=()])[A-Z a-z \d @.#$%^&*]{8,20}$/

const regValidation=(data)=>{ 
    const Schema=joi.object({ 
        name:joi.string().required().min(5).max(10),
        email:joi.string().email().required(),
        phone:joi.number().integer().min(1000000000).max(9999999999).required(),
        password:joi.string().regex(pattern).required()
    })

    return Schema.validate(data)
}

const loginval=(data)=>{ 
    const Schema=joi.object({ 
        email:joi.string().email().required(),
        password:joi.string().regex(pattern).required()

    })
    return Schema.validate(data)
}

module.exports.regValidation=regValidation
module.exports.loginval=loginval