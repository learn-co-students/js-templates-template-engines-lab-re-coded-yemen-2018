function createPost() {

  var pTemplate = _.template(document.getElementById("page-template").innerHTML);
  var poTemplate = _.template(document.getElementById("post-template").innerHTML);
  var comTemplate = _.template(document.getElementById("comments-template").innerHTML);

  var poTitle = document.getElementById("postTitle").value;
  var poAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value;

  document.getElementsByTagName("main")[0].innerHTML += pTemplate();

  var blSection = poTemplate({ 'title': poTitle, 'body': post, 'poster': poAuthor });
  var comSection = comTemplate();
  var poElement = document.getElementById("post");

  poElement.innerHTML = blSection;
  poElement.getElementsByTagName("footer")[0].innerHTML = comSection;
};
function postComment() {
  var comTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var comText = document.getElementById("commentText").value;
  var comName = document.getElementById("commenter").value;

  var comSection = document.getElementById("comments");
  comSection.innerHTML += comTemplate({ 'commenter': comName, 'comment': comText });
};
