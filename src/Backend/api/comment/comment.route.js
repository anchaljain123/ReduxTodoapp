const express = require('express');
const router = express.Router();
import {
  saveComment
} from './comment.controller'

router.post('/saveComment',saveComment);