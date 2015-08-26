/**
 * QuestionController
 *
 * @description :: Server-side logic for managing jobs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    /**
     * question function for redirect the question page on client side
     */

    /**
     * createQuestion function for create the question
     */
    createQuestion: function(req, res, user) {
        var stringg = JSON.stringify(req.body);
        var jsonObject = JSON.parse(stringg);
        for (var i = 0; i < jsonObject.question.length; i++) {


            Question.create({
                question: jsonObject.question[i].question,
                jobid:req.body.jobid
                
            }
            
            , function userCreated(err, newQuestion) {


                if (err) {

                    console.log("err: ", err);
                    console.log("err.invalidAttributes: ", err.invalidAttributes)
                        // Otherwise, send back something reasonable as our error response.
                    return res.negotiate(err);
                }



                // Send back the  response
                return res.ok();
            });
        }
     Job.update({id: req.body.jobid}, {timeForQuestion:req.body.timeForQuestion,totalQuestion:req.body.totalQuestion}).exec(function(e1, r1){
                   return res.ok();
               });
    }

};