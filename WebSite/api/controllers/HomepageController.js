/**
 * HomepageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    checklist:function(req, res){
        res.view('checklist');
    }, 
    academic: function(req,res){
        res.view('academic');
    },
    campus: function(req, res){
        res.view('campus');
    }

};

