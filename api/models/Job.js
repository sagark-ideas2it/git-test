/**
 * job.js
 * @Author  : sagar                                                            
 * @Dated   : 12/08/2015.  
 * @description :: This doc contains job info
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {

    attributes: {

      
        name: {
            type: 'string',
            required: true
        },

        designation: {
            type: 'string',
            required: true
        },

        expiriance: {
            type: 'string',
            required: true
        },


        salary: {
            type: 'string',
            required: true
        },
        
timeForQuestion:{
            type:'string',
            //required:true
        },
        totalQuestion:{
            type:'string',
            //required:true
        },

    }
};
