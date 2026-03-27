const mongoose = require('mongoose');
require('dotenv').config();

const getConnectionDB = ()=>{

    let connectionUrl;
    // process.env.NODE_ENV === "development" এই লাইনটি চেক করে code ti কোন পরিবেশে চলছে।
    if (process.env.NODE_ENV === "development") {
         connectionUrl =process.env.DATABASE_LOCAL;
         connectionUrl= connectionUrl.replace(
            "<username>",
            process.env.DATABASE_LOCAL_USERNAME
         );
         connectionUrl= connectionUrl.replace(
            "<db_password>",
            process.env.DATABASE_LOCAL_PASSWORD
         );

    } else {
        connectionUrl =process.env.DATABASE_PROD;
    }
    return connectionUrl;
};

// mongodb atlas connecturl and mongodb compus connecturl
const connectDB = async() => {
    const mongoUrl =getConnectionDB();
    //mongodb url
    await mongoose.connect(mongoUrl, {dbName:process.env.DB_NAME});
    console.log("connecting to database");

    // {**mongodb compus connecturl**}
    // await mongoose.connect('mongodb://localhost:27017',{ dbName: "homifyDB"})
    // console.log("connected to database");
};

module.exports= connectDB;