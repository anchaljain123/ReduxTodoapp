const express = require('express');
const router = express.Router();
const commentController = require('./comment.controller');

router.post('/saveComment',commentController.saveComment);
router.get('/getComments',commentController.getComments);
router.delete('/deleteComment',commentController.deleteComment);

module.exports = router;