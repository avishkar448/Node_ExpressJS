const joi =require('joi')

const registerValidation=(data)=>{ 
  const Schema=joi.object({ 
        name:joi.string().required(),
        email:joi.string().email().required(),
        mobile:joi.number().integer().min(1000000000).max(9999999999),
        password:joi.string().min(8).max(15)
    })

    return Schema.validate(data)
}

const loginValidation=(data)=>{ 
    const Schema=joi.object({ 
          email:joi.string().email().required(),
          password:joi.string().min(8).max(15)
      })
      return Schema.validate(data)
  }
  

module.exports.registerValidation=registerValidation
module.exports.loginValidation=loginValidation