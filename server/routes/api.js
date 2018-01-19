const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


router.post('/add', function (req, res) {
    res.send('added details', req.body);
//   // Get a Mongo client to work with the Mongo server
//   var MongoClient = mongodb.MongoClient;

//   // Define where the MongoDB server is
//   var url = 'mongodb://localhost:27017/learn';

//   // Connect to the server
//   MongoClient.connect(url, function (err, db) {
//     if (err) {
//       console.log('Unable to connect to the Server:', err);
//     } else {
//       console.log('Connected to Server');

//       // Get the documents collection
//       var collection = db.collection('students');

//       // Get the student data passed from the form
//       var student1 = {
//         student: req.body.student, street: req.body.street,
//         city: req.body.city, state: req.body.state, sex: req.body.sex,
//         gpa: req.body.gpa
//       };

//       // Insert the student data into the database
//       collection.insert([student1], function (err, result) {
//         if (err) {
//           console.log(err);
//         } else {

//           // Redirect to the updated student list
//           res.redirect("thelist");
//         }

//         // Close the database
//         db.close();
//       });

//     }
//   });

});

module.exports = router;