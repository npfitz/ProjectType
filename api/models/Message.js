/**
 * Message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	schema: true,

	attributes: {

		from: "string",
		body: "string",
		fromCity: "string",
		fromState: "string",
		fromCountry: "string",
		account_sid: "string",
		message_sid: "string"
	}

};