
const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/ProjectSocietyDB",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`Connection successful`);
}).catch((e) => {
    console.log(`no connection`);
});




