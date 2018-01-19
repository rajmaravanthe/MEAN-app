var express = require('express');
var router = express.Router();
var schema = require('../schema/flightSchema');
var mongodb = require('mongodb');

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log("Came to GET");
  res.send('respond with a GET');
});

router.get('/thelist', function (req, res) {

  // Get a Mongo client to work with the Mongo server
  var MongoClient = mongodb.MongoClient;

  // Define where the MongoDB server is
  var url = 'mongodb://localhost:27017/flightapp';

  // Connect to the server
  MongoClient.connect(url, (err,database) => {
    const myAwesomeDB = database.db('flightapp');
    if (err) {
      console.log('Unable to connect to the Server', err);
    } else {
      // We are connected
      console.log('Connection established to', url);

      // Get the documents collection
      var collection = myAwesomeDB.collection('flight');

      // Find all flights
      collection.find({}).toArray(function (err, result) {
        if (err) {
          res.send(500, err);
        } else if (result.length) {
          console.log(result);
          res.send(result);
        } else {
          res.send('No documents found');
        }
        //Close connection
        database.close();
      });
    }
  });
});

/* POST users listing. */
router.post('/', function (req, res, next) {
  // Get a Mongo client to work with the Mongo server
  var MongoClient = mongodb.MongoClient;

  // Define where the MongoDB server is
  var url = 'mongodb://localhost:27017/flightapp';

  // Connect to the server
  MongoClient.connect(url, (err,database) => {
    const myAwesomeDB = database.db('flightapp');
    if (err) {
      console.log('unable to connect');
    } else {
      var collection = myAwesomeDB.collection('flight');
     // Insert the student data into the database
      collection.insert([req.body], function (err, result) {
        if (err) {
          console.log(err);
        } else {

          // Redirect to the updated student list
          res.send({success: "added successfully"});
        }

        // Close the database
        database.close();
      });
    }
  })
});

/* POST users listing. */
router.post('/flights', function (req, res, next) {
  // Get a Mongo client to work with the Mongo server
  var MongoClient = mongodb.MongoClient;
  console.log(req.body);
  // Define where the MongoDB server is
  var url = 'mongodb://localhost:27017/flightapp';

  // Connect to the server
  MongoClient.connect(url, (err,database) => {
    const myAwesomeDB = database.db('flightapp');
    if (err) {
      console.log('unable to connect');
    } else {
      var collection = myAwesomeDB.collection('flight');
      // Find all flights
      collection.find({"dateTimeDeparture": {"$regex": req.body.dateTimeDeparture.substring(0,10)}, "flightFrom": req.body.flightFrom, "flightTo": req.body.flightTo }).toArray(function (err, result) {
        if (err) {
          res.send(500, err);
        } else if (result.length) {
          console.log(result);
          res.send(result);
        } else {
          res.send('No documents found');
        }
        //Close connection
        database.close();
      });
    }
  })
});

module.exports = router;
