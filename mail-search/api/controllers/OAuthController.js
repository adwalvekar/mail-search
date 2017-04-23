/**
 * OAuthController
 *
 * @description :: Server-side logic for managing Oauths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require('request');

module.exports = {
	handleAuth: handleAuthAction,
	handletoken: handleTokenAction
};

function handleAuthAction(req,res) {
	
	return res.redirect("https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.readonly&redirect_uri=http%3A%2F%2Flocalhost%3A1337%2Ftoken&response_type=code&client_id=945275898535-94o4tp7aqbgfbjrd1feii5552m2eo1bn.apps.googleusercontent.com");
}

function handleTokenAction(req,res){
	if(req.query.code == undefined){
		return res.redirect("https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.readonly&redirect_uri=http%3A%2F%2Flocalhost%3A1337%2Ftoken&response_type=code&client_id=945275898535-94o4tp7aqbgfbjrd1feii5552m2eo1bn.apps.googleusercontent.com");
	}
	else{
		var code = req.query.code;
		var data = {
			code: code,
			client_id: '945275898535-94o4tp7aqbgfbjrd1feii5552m2eo1bn.apps.googleusercontent.com',
			client_secret: 'bXPVDMiD3tyXUsOxidPEKG3Q',
			redirect_uri: 'http://localhost:1337/token',
			grant_type: 'authorization_code'};
		var requ = request.post({url:"https://www.googleapis.com/oauth2/v4/token",form:data}, function(err,httpResponse,body){
			console.log(body)
			req.session.codes = body;
			res.redirect('/home');
	});

	}
}
