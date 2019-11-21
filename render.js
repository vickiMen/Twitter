// $(main.js).ready(function () {

Renderer = function(){
    
    renderPosts = function(posts){
        // debugger
        $('#posts').empty()
        for (let post of posts) {
            
            let  currentPost = getPostDetails(post)
            let         text = currentPost.text
            let     comments = currentPost.comments
            let          _id = currentPost._id
            let  currentHTML = createHTMLcontent(text,comments,_id)
            let     postHtml = currentHTML.postTemplate
            let commentsHtml = currentHTML.commentTemplate
            
            $('#posts').append(postHtml)
            $('div').find(`[data-id='${_id}']`).append(commentsHtml)
        }
    }
    
    getPostDetails = function(post){
        let     text = post['text']
        let comments = []
        let      _id = post['_id'][1]
        for (i=0; i<(post['comments']).length; i++){
            comments.push(post['comments'][i])
        }

        let postDetails = {
            _id: _id,
            text: text,
            comments: comments
        }

        return postDetails
    }

    createHTMLcontent = function(text,comments,_id){
        
        let commentsArr = ['<br>', '<br>', 'Comments:', '<br>']
        let commentId

        for (let comment in comments){
            let commentId      = comments[comment]['commentId']
            let matchedComment = `<div class='comment' data-id='${commentId}'>${comments[comment]['text']}</div>`
            commentsArr.push(matchedComment)
        }
        
        let postTemplate = `<div class='post' data-id='${_id}'>Post:<br>${text}</div>`
        let commentTemplate = commentsArr

        let htmlContent = {
            postTemplate,
            commentTemplate
        }

        return htmlContent
    }
    
    return {renderPosts}
}

// });
