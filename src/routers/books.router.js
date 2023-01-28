const router = require("express").Router();

const {
  getAllBooks,
  getToOneArticlePage,
  getCreateBook,
  postCreateBook,
  getEditBookById,
  postEditBookById,
  deleteBook,
  addLike,
  getAllBlog,
  addLikeB,
  getToOneArticlePage3
} = require("../controller/books.controller");

const {
  getCommentById
} = require('../controller/comment.controller')

router.get("/all", getAllBooks);
router.get("/blog",getAllBlog)
router.get("/edit/:id", getEditBookById);
router.post("/edit/:id", postEditBookById);
router.get("/create", getCreateBook);
router.post("/create", postCreateBook);
router.delete("/delete/:id", deleteBook);
router.post("/editlikes/:id",addLike)
router.post("/editlikesB/:id",addLikeB)
router.get("/indie/:id",getToOneArticlePage3)
// router.get("/indie/:id",getCommentById)

module.exports = router;
