const mongoose=require('mongoose')
const mongoURL="mongodb+srv://Avishkar:Avi448%40#@atlascluster.lgo9ou5.mongodb.net/Avishkar?retryWrites=true&w=majority"

mongoose.set('strictQuery',false)

mongoose.connect(mongoURL,{ 
    useNewUrlParser:true,
    useUnifiedTopology:true,
});


