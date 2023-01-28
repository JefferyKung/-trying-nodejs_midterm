const router = require("express").Router();

const{
    getAllComments,
    getCreateComment,
    PostCreateComment,
    deleteComment,
    getCommentById
} = require("../controller/comment.controller")

router.get("/indie/:id",getCommentById);
// router.get()


module.exports = router;