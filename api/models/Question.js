/**
 * Question.js
 * @Author  : sagar                                                             
 * @Dated   : 12/08/2015.  
 * @description :: This doc contains question info
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {

    attributes: {

       question: {
            type: 'string',
            required: true
        },
        jobid:{
        	type:'string',
        	//required:true
        }

    }
};