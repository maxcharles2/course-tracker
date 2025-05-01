const dotenv = require('dotenv').config()
// config/database.js
module.exports = {

    'url' : `mongodb+srv://maxcharlesdev:mongo-access@express-app-cluster.pmoffnv.mongodb.net/course-tracker?retryWrites=true&w=majority&appName=Express-app-cluster`, 
    'dbName': 'demo'
};
//the thing after .net/(right here)? on the url will create the name of the database when you add data into it
//'mongodb+srv://demo:demo@cluster0.q2ojb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//'mongodb+srv://maxcharlesdev:mongo-access@course-tracker-cluster.nbv4w9w.mongodb.net/?retryWrites=true&w=majority&appName=course-tracker-cluster'
//'mongodb+srv://maxcharlesdev:mongo-access@express-app-cluster.pmoffnv.mongodb.net/course-tracker?retryWrites=true&w=majority&appName=Express-app-cluster'
// `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@express-app-cluster.pmoffnv.mongodb.net/course-tracker?retryWrites=true&w=majority&appName=Express-app-cluster`