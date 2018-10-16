function createPost(){
  let ti=document.getElementById('postTitle').value;
   let bo=document.getElementById('postbody').value;
    let au=document.getElementById('author').value;
}

function postComment(){
  let commenter =document.getElementById('commenterName').value;
  let comment =document.getElementById('commentText').value;
   let commentTemplate =
    '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
 
  let templateFn = _.template(commentTemplate);
 
  let commentsDiv = document.getElementById('comments');
 
 
  let templateHTML = templateFn({ comment: comment, commenter: commenter });
 
 
  commentsDiv.innerHTML += templateHTML;

}