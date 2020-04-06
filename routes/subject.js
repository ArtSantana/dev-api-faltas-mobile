const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
  db.find({}).sort({id:1}).exec((err, data) => {
    if(err) res.sendStatus(404);
    else res.json(data);
  })
})

router.post('/', (req, res) => {
  db.insert({
    id: req.body.id, 
    subject: req.body.subject,
    teacher: req.body.teacher,
    maxFaltas: req.body.maxFaltas,
    faltas: req.body.faltas,
  })
  
  res.sendStatus(201);
})

router.delete('/', (req, res) => {
  db.remove({_id: req.body._id});
  db.loadDatabase();

  res.sendStatus(201);
})

module.exports = router;