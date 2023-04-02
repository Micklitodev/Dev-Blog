const router = require('express').Router(); 
const { Comment } = require('../../models'); 

// ------------ create a comment ------------- 

router.post('/newcomment', async (req, res) => {
    try{
        const newComm = await Comment.create({
            comment_body: req.body.comment_body, 
            post_id:  req.body.post_id, 
            username: req.session.username,
        })
        res.status(200).json(newComm)
    }catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
}); 
 
module.exports = router;