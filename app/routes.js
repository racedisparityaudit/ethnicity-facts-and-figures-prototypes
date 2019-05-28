const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/add-data-source-or-create', function (req, res) {
  let dataSource = req.session.data['data-source-title']

  if (dataSource == 'add-new') {
    res.redirect('/add-new-data-source')
  } else {
    res.redirect('/measure-linked-to-data-sources')
  }

})

router.post('/add-data-source-or-create-v2', function (req, res) {
  let dataSource = req.session.data['data-source-title']

  if (dataSource == 'add-new') {
    res.redirect('/add-new-data-source-v2')
  } else {
    res.redirect('/measure-linked-to-data-sources-v2')
  }

})

module.exports = router
