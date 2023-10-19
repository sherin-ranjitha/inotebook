const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook"
// const connectToMongo = () => {
//     mongoose.connect(mongoURI, () =>{
//         console.log("Connected to Mongo Successfully");
//     })
// }
const connectToMongo = () => {
    mongoose.connect(mongoURI).then(()=>{console.log("Connection  successful")}).catch((err)=>{console.log("Connection not successful")})
}
module.exports = connectToMongo;


