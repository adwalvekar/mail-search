/**
 * DefaultController
 *
 * @description :: Server-side logic for managing Defaults
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var request = require('request');
module.exports = {
	verify: verifyAction,
	home: homeAction
};

function verifyAction(req,res){
	if(req.session.codes == undefined){
		res.view('index');	
	}
	else{
		res.redirect('/home')
	}

}

function homeAction(req,res){
	if(req.session.codes == undefined){
		res.redirect('/');	
	}
	else{
		res.send("Added!")
	}
}