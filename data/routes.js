const db = require('./db');
const router = require('express').Router();

router.get('/', (req, res) => {
    db.find()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err => {
            res.status(500).json({
                message: "error retrieving posts",
                err: err
            })
        })
});

router.get('/:id', (req, res) => {

    db.findById(req.params.id)
        .then(postById => {
            res.status(200).json({ success: true, postById })
        })
        .catch(err => {
            res.status(500).json({ message: "failed to fetch", err });
        })
})

router.get('/:id/comments', (req, res) => {
    db.findPostComments(req.params.id)
        .then(commentsByPost => {
            res.status(200).json({ success: true, commentsByPost })
        })
        .catch(err => {
            res.status(500).json({ message: "failed to fetch", err });
        })
})

router.post('/', (req, res) => {
    const { title, contents } = req.body
    db.insert(req.body)
        .then(postId => {
            if (title && contents) {
                res.status(201).json({ success: true, postId })
            }
            else {
                res.status(500).json({ message: "failed to post, req body need to have title and contents", err })
            }
        })
        .catch(err => res.status(500).json({ message: "failed to post", err }));
})

router.post('/:id/comments', (req, res) => {
    db.insertComment(req.body)
        .then(comment => {
            res.status(201).json({ success: true, comment })
        })
        .catch(err => res.status(500).json({ message: "failed to post", err }))
})

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
    then(post => {
        res.status(204).json({ message: `post with id: ${req.params.id} is deleted` })
    })
        .catch(err => res.status(500).json({ message: "did not find id" }))
})

module.exports = router;

