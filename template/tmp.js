var express = require('express');
var router  = express.Router();


router.route('/{name}')

.get(function(req, res) {
    res.json({
        id: 'all', // 以req.params.id 取得參數
        message: 'The get api for users: select all users'
    })
})

.post(function(req, res) {
    res.json({
        id: 'all',
        message: 'The post api for user:insert one user '
    })
})

router.route('/{name}/:id')

.get(function(req, res) {f
    res.json({
        id: req.params.id, // 以req.params.id 取得參數

        message: 'The get api for user: select ' + req.params.id
    })
})

.put(function(req, res) {
    res.json({
        id: req.params.id,
        message: 'The put api for user: update ' + req.params.id
    })
})

.delete(function(req, res) {
    res.json({
        id: req.params.id,
        message: 'The delete api for user: delete' + req.params.id
    })
});


module.exports = router;
