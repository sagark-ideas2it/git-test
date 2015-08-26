/**
 * JobController
 *
 * @description :: Server-side logic for managing jobs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	job: function(req, res) {
          // Create a User with the params sent from
          // the sign-up form --> signup.ejs
            console.log('hiiiiii--i am in  JobController');
            Job.create({
              name: req.param('name'),
              designation: req.param('designation'),
              expiriance: req.param('expiriance'),
              salary: req.param('salary'),
              timeForQuestion: req.param('timeForQuestion'),
              totalQuestion: req.param('totalQuestion'),
              lastLoggedIn: new Date()
            }, function jobCreated(err, newjob) {
              if (err) {

                console.log("err: ", err);
                console.log("err.invalidAttributes: ", err.invalidAttributes)

               

                // Otherwise, send back something reasonable as our error response.
                return res.negotiate(err);
              }

              // Log user in
              

              // Send back the id of the new user
              return res.json({
                id: newjob.id
              });
            });
   }
	
};

