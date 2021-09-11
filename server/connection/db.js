import mongoose from 'mongoose';

const connection = async ()=>{
    try{
        const URL = `mongodb://Shree:InshortShree@inshort-clone-shard-00-00.hpn8z.mongodb.net:27017,inshort-clone-shard-00-01.hpn8z.mongodb.net:27017,inshort-clone-shard-00-02.hpn8z.mongodb.net:27017/INSHORT-CLONE?ssl=true&replicaSet=atlas-sovito-shard-0&authSource=admin&retryWrites=true&w=majority`

        await mongoose.connect(URL, {useNewUrlParser : true})
        console.log('Database connected successfully');
    }
    catch(error){
        console.log('Error while connecting with database', error);
    }
}

export default connection;