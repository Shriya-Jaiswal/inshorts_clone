import News from './model/news.js'
import { data } from './constants/data.js'; 

const DefaultData = async () =>{
    try{
        await News.deleteMany({});  //remove duplicating data
       await News.insertMany(data);
       console.log('Data imported successfully');
    }
    catch(error){
        console.log('Error', error.message);
    }
}


export default DefaultData;