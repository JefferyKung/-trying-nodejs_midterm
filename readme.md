https://node-js-jeffery-mid-jefferykung.vercel.app/

# 1. Project's Title
Jeffery's mid-term project for NodeJS (V2)

# 2. Project Description
<!-- briefing from teacher https://docs.google.com/document/d/1xil0eM4Yogxj1Zd6VyTyygJbSaqZwjju5XvZkfyIRX8/edit -->
It's a CRUD application for a easy table thread/blog. 

* Node.js in MVC structure(backend),   
* EJS, CSS and JavaScript (frontend),   
* MySQL (database)--- host on railway app:  


# 3. How to Install and Run the Project

npm i
// to install dependencies 

npm run dev
// run with nodemon

# 4. How to Use the Project

--new V2--
(1) click "Blig Articles" for going to a blog format page, it's more like a blog we are used to. 
(1-1)I cut article less than 180 words for preview
(2)Click "Read more" for going to respective page
(3)you can write comment in the text area and click the blue "add comment" button to push the lastest one on to the page.

-- v1 --
(1.)login page with user authentication. I connect it to a MySQL database and store all the credencials. 
If you successfully log in, you'll be redirect to the article page. If you don't, a JSON message will show you 'no match'
(1-1) you can also click sign up to a register page. email and password will be store in database on railway.  
(2-1)you can read the article page with all content so far.  
(2-2)Click "add" to create new article, the input date must be a YYYYMMDD.  
(2-3)Click the yellow "Edit" button to edit the particular post.  
(2-4)Click delete to delete the particular post.  
(2-5)Click the "+" button for like  
(3) Click "log out" to return to the login page  






# 5. Include Credits

--v1--
My teacher Francois's styling and table structure.  

[styling] login page -> I used his code on lecture which is NODEJS LAB5  
<!-- https://github.com/A-0522/NodeJS-W1-Lab-5 -->  

[structure of blog] Basically I didn't restructure the blog part. It's more like a thread/ table. -> NODEJS 202  
<!-- https://github.com/A-0522/NodeJS-W2-D2 -->  

<!-- <div class="mt-4 mb-4 px-4 px-lg-5 h5">
    <% modelC.forEach(c => { %>
    <ul>
        <li><%=c.commentID %></li>
        <li><%=c.Comment %></li>
    </ul>
    
    
    <% }) %>  
</div> -->