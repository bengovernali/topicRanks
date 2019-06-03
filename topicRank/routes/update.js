const express = require('express');
const router = express.Router();
const TopicsModel = require('../models/updateModel');

/* GET home page. */
router.get('/', async (req, res, next) => {
    const allTopics = await TopicsModel.getAll();
    res.render('template', {
        locals: {
            title: 'Digitalcrafts Topics',
            listOfTopics: allTopics
        },
        partials: {
            partial: 'partial-update-topics'
        }
    });
});

router.post('/', (req, res) => {
    const {topic, rank} = req.body;
    TopicsModel.update(topic, rank)
    .then(async () => {
        const allTopics = await TopicsModel.getAll();
        res.render('template', {
            locals: {
                title: 'Digitalcrafts Topics',
                listOfTopics: allTopics
            },
            partials: {
                partial: 'partial-update-topics'
            }
        });
    })
    .catch((err) => {
        res.sendStatus(500).send(err.message);
    });
});

module.exports = router;