const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false);
//mongoose.connect(process.env.MONGODB_URI, {
    mongoose.connect('mongodb+srv://camo:camo123@industria.s123y.mongodb.net/industria?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
 .then(db => console.log('Base Conectada'))
 .catch(err => console.log(err));
