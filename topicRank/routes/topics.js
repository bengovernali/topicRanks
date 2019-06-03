const express = require('express');
const router = express.Router();
const TopicsModel = require('../models/topicsModel');

/* GET home page. */
router.get('/', async (req, res, next) => {
    const allTopics = await TopicsModel.getAll();
    res.render('template', {
        locals: {
            title: 'Digitalcrafts Topics',
            listOfTopics: allTopics
        },
        partials: {
            partial: 'partial-display-topics'
        }
    });
});

module.exports = router;