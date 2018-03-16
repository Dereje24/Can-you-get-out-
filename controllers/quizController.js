var db = require('../models');

module.exports = {
  index: function(req,res){
    db.quiz.find({}, function(err, allQuizes){
      if(err){res.status(500).json({"ERROR":"Database Error"})}
      console.log("allQuizes: \n", allQuizes)
      res.status(200).json({"quizs": allQuizes})
    });
  },

  show: function(req,res){
    var quizId = req.params.id;
    db.quiz.findOne({_id: quizId}, function(err, foundQuiz){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("foundQuiz: \n", foundQuiz);
      res.status(200).json({"quiz": foundQuiz});
    });
  },

  create: function(req, res){
    var newquiz = req.body;
    db.quiz.create(newQuiz, function(err, newQuiz){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("newQuiz: \n", newQuiz);
      res.status(200).json({"quiz": newQuiz});
    });
  },

  update: function(req, res){
    var updatedQuiz = req.body;
    var quizId = req.params.id
    db.quiz.findOneAndUpdate({_id: quizId}, updatedQuiz, {new:true}, function(err, updatedquiz){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("updatedQuiz: \n", updatedQuiz);
      res.status(200).json({"quiz": updatedQuiz});
    });
  },

  destroy: function(req, res){
    var quizId = req.params.id
    db.quiz.remove({_id: quizId}, function(err, removedQuiz){
      if(err){res.status(500).json({"ERROR":"Database Error"});}
      console.log("removedQuiz: \n", removedQuiz);
      res.status(200).json({"quiz": removedQuiz});
    });
  }
};
