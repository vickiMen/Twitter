$(document).ready(function () {

Renderer = function(){
    
    let getDetails = GetPostDetails()
    let getHtml    = CreateHTMLcontent()
    
    renderPosts = function(posts){
        $('#posts').empty()
        for (let post of posts) {
            let         text = getDetails.text(post)
            let     comments = getDetails.comments(post)
            let          _id = getDetails._id(post)
            let     postHtml = getHtml.postTemplate(text,comments,_id)
            let commentsHtml = getHtml.commentTemplate(text,comments,_id)

            $('#posts').append(postHtml)
            $('#posts').append(commentsHtml)
        }
    }

    GetPostDetails = function(post){
        let text     = post['text']
        let comments = []
        let _id      = posts['_id'][1]
        for (i=0; i<(post['comments']).length; i++){
            comments.push(post['comments'][i])
        }
        return {
            _id: _id,
            text: text,
            comments: comments
        }
    }

    CreateHTMLcontent = function(text,comments,_id){
        let commentId = comments['commentId']
        let postTemplate = `<div class='post' id='${_id}'>Post:<br>${text}</div>`
        let commentTemplate = `<div> class='comment' id='${commentId}'>Comments:<br>${comments}</div>`
        return {
            postTemplate,
            commentTemplate
        }
    }

    return renderPosts
}

});
