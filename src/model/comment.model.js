const db = require("../util/mysql");

module.exports = class Comment {
    constructor(Book_Id,Comment){
        this.Book_Id=Book_Id;
        this.Comment=Comment;
    }

    save() {
        const sql = "INSERT INTO Comments (Book_Id,Comment) VALUES (?,?)";
        const params = [this.Book_Id,this.Comment];
    
        return db.execute(sql, params);
      }
    
      static find() {
        const sql = "SELECT * FROM Comments ORDER BY commentID DESC";
        return db.query(sql);
      }

      static findById(id) {
        const sql = "SELECT * FROM Comments WHERE Book_Id = ?";
        return db.execute(sql, [id]);
      }
    
      static updateOne(data) {
        const sql =
          "UPDATE Comments SET Book_Id=?,Comment = ? WHERE (commentID = ?)";
        const params = [data.Book_Id,data.Comment]; //literal
        return db.execute(sql, params);
      }

    




}