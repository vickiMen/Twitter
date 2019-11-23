// $(document).ready(function () {

Tweeter = function(){
    
    posts = [
        {
            _id: 'p1',
            text: 'This is the first Post',
            comments: [
                {
                    commentId: 'c1',
                    text: 'great post!'   
                },
                {
                    commentId: 'c2',
                    text: 'You go girl'
                }
            ]
        },
        {
            _id: 'p2',
            text: 'This is the second Post',
            comments: [
                {
                    commentId: 'c3',
                    text: 'likeee!!!!111'
                }
            ]
        }
    ]
    
    let postIdCounter = 0                                      
    
    let commentIdCounter = 0                               

    getPosts = function() {
        return posts
    } 

    addPost = function(text){                
        if (posts.length == 0) {
            generateId = () => 'p1'
        }
        else {
            let newId = posts[(posts.length)-1]._id
            newId = newId.slice(1)
            generateId = () => 'p' + (parseInt(newId) + 1) 
        }
        posts.push({
            _id: generateId(),
            text: text, 
            comments: []
        })
        postIdCounter++
        return
    }

    removePost = function(postId){
        let removedPost
        for (i=0; i<posts.length; i++) {
            if (posts[i]['_id'] == postId) {
                removedPost = posts[i]
                break
            }
        }
        let index = posts.indexOf(removedPost)
        posts.splice(index,1);
        postIdCounter--
        return
    }
    
    addComment = function(_id,text){
        for (i=0; i<=posts.length; i++) {
            if (posts[i]['_id'] == _id) {
                let comment = {
                    text: text, 
                    commentId: 'c' + (commentIdCounter+1)
                }
                posts[i]['comments'].push(comment);
                commentIdCounter++
                return
            }
        }
    }

    removeComment = function(commentId) {
        for (i=0; i<posts.length; i++) {
            for (j=0; j<posts[i]['comments'].length; j++) {
                if (posts[i]['comments'][j]['commentId'] == commentId) {
                    posts[i]['comments'].splice(j,1);
                    commentIdCounter--
                    return
                }
            }
        }
    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }

}

// })
