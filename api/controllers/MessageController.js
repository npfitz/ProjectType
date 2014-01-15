/**
 * MessageController.js 
 *
 * @description :: 
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {  
  
	"create": function(req, res){
		var data = {
			from: req.param("From"),
			body: req.param("Body"),
			fromCity: req.param("FromCity"),
			fromState: req.param("FromState"),
			fromCountry: req.param("FromCountry"),
			account_sid: req.param("AccountSid"),
			message_sid: req.param("MessageSid")
		}

		Message.create(data, function(err, message){
			if(!err){
				res.send(200);

				data.id = message.id

				Message.publishCreate(data, function(err){

				});
			}

		});
	},

	"subscribe": function(req, res){
		Message.subscribe(req.socket);

		Message.find()
		.exec(function(err, messages){
			res.send(messages);
		})

	}
};
