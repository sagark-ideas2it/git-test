/**
 * FileController
 *
 * @author      :: sagar
 * @date        :: 14 Aug 2015
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	upload: function  (req, res) {
		console.log('u r in severfile controler');
		if(req.method === 'GET')
			return res.json({'status':'GET not allowed'});						
			//	Call to /upload via GET is error

		var uploadFile = req.file('uploadFile');
		console.log(uploadFile);

	    uploadFile.upload(function onUploadComplete (err, files) {				
	    //	Files will be uploaded to .tmp/uploads
	    																		
	    	if (err) return res.serverError(err);								
	    	//	IF ERROR Return and send 500 error with error
			
	    	console.log(files);
	    	res.json({status:200,file:files});
	    	res.ok();
	    });
	},
	
};

