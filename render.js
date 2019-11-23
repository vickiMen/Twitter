// $(document).ready(function () {

Renderer = function(){

    
    const renderPosts = function(posts){
        $('#posts').empty()
        for (let post of posts) {
            let  currentPost = getPostDetails(post)
            let         text = currentPost.text
            let     comments = currentPost.comments
            let          _id = currentPost._id
            let  currentHTML = createHTMLcontent(text,comments,_id)
            let     postHtml = currentHTML.postTemplate
            let commentsHTML = currentHTML.commentsContainer
            let  commentHtml = currentHTML.commentTemplate
            $('#posts').append(postHtml)
            if (comments.length > 0) {
                $(`.post[data-id='${_id}']`).append(commentsHTML)
                $(`.comments[data-id='${_id}']`).append(commentHtml)
                for (let comment of comments) {
                    delCmtBtn(comment['commentId'])
                }
            }
            else {
                cmtTextBox(_id, isFirst=true)
            }
            delPostBtn(_id)
            cmtBtn(_id)
        }
        return
    }
    
    const getPostDetails = function(post){
        let     text = post['text']
        let comments = []
        let      _id = post['_id']
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
    
    const createHTMLcontent = function(text,comments,_id){
        let postTemplate = `<div class='post' data-id='${_id}'>${text}</div>`
        let commentsContainer = `<div class='comments' data-id='${_id}'></div>`
        let commentTemplate = []
        for (let comment in comments){
            let commentId = comments[comment]['commentId']
            let matchedComment = `<div class='comment-container data-id='${commentId}'><div class='comment' data-id='${commentId}'>${comments[comment]['text']}</div></div>`
            commentTemplate.push(matchedComment)
        }
        let htmlContent = { postTemplate, commentsContainer, commentTemplate }
        return htmlContent
    }
    
    const delPostBtn = function(postId){
        let       post = $(`.post[data-id=${postId}]`)
        let  extractId = postId.slice(1)
        let      delId = 'd' + extractId
        let delBtnHtml = `<div class='delPostBtn' data-id='${delId}'><i class="far fa-trash-alt"></i></div>`
        post.append(delBtnHtml)
        return
    }

    const cmtBtn = function(postId){
        let       post = $(`.post[data-id=${postId}]`)
        let commentHtml = `<div class='cmtBtn' data-id='${postId}'><i class="far fa-comments"></i></div>`
        post.append(commentHtml)
        return
    }

    const delCmtBtn = function(commentId){
        let    comment = $(`.comment[data-id=${commentId}]`)
        let  extractId = commentId.slice(1)
        let      delId = 'd' + extractId
        let delBtnHtml = `<div class='delCmtBtn' data-id='${delId}'><i class="far fa-trash-alt"></i></div>`
        comment.parent().append(delBtnHtml)
        return
    }

    const cmtTextBox = function(postId, isFirst){
        let post = $(`.post[data-id=${postId}]`)
        let comments = $(`.comments[data-id=${postId}]`)
        let textBoxTemplate = `<div class='input-container'><input class='cmtTextBox' type='text' data-id='${postId}' placeholder='Write a comment...'></input></div>`
        if (isFirst) {
            post.append(textBoxTemplate)
        }
        else {
            comments.append(textBoxTemplate)
        }
        return
    }


    return {
        renderPosts,
        getPostDetails,
        createHTMLcontent,
        cmtTextBox
    }

}

// })
