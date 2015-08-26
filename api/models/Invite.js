/**
* Invite.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

/**
* @Invite.js
* @Author       : Mayank Sahu
* @Dated        : 24-08-2015
* @description ::  This file for making invite model.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	    firstName: {
            type: 'string',
            required: true
        },
        lastName: {
            type: 'string',
            required: true,
           
        },
        email: {
            type: 'email',
            required: true
            // unique: true
        },

        phoneNo: {
            type: 'string',
            required: true
        },
        token:{
        	type:'string',
        	required:true
        }
  }
};
