const Comment = require('../model/comment.model')

// exports.getAllComments = (req,res) =>{
//     Comment.find()
//         .then(([rows])=>{
//         console.log(rows)
//         res.render("comment",{modelC : rows[0].Comment})
//         })
//         .catch((err) => console.error(err.message));

// }

exports.getCommentById = (req,res)=>{
    const id = req.params.id;
    console.log(id)
    Comment.findById(id)
    .then(([row]) => {
        console.log(row)
        res.render("comment", { model: row });
    })
    .catch((err) => console.error(err.message));
}



