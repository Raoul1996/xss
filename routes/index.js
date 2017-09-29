const express = require('express')
const router = express.Router()
const comments = {}

function html_encode(str) {
  if (str.length === 0) return ''
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\s/g, '&nbsp;')
    .replace(/\'/g, '&#39;')
    .replace(/\"/g, '&quot;')
    .replace(/\n/g, '<br>')
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'})
})
router.get('/comment', function (req, res, next) {
  comments.v = html_encode(req.query.comment || '')
  res.json({
    res: 'successful'
  })
})
router.get('/getComment', function (req, res, next) {
  res.json({
    comment: comments.v
  })
})
module.exports = router
