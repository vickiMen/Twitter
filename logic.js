Tweeter = function(){
    posts = []
    
    let postIdCounter = 0                                      //to count the number of total posts

    let commentIdCounter = 0                                //to count the number of total comments

    getPosts = function() {
        //that returns the posts array
        return posts
    } 

    addPost = function(text){                
        if (posts.length == 0) {                                 // generate id for the first time
            generateId = () => 'p1'
        }
        else {
           generateId = () => 'p' + (parseInt(posts[(posts.length)-1]._id[1]) + 1)
        }
        posts.push({
            _id: generateId(),
            text: text, 
            comments: []
        });
        (() => postIdCounter++)()                                     // increase the posts counter
    }

    removePost = function(_id){
        let index = parseInt(_id[1]) - 1
        posts.splice(posts[index],1);
        (() => postIdCounter--)() //decrease the posts counter
    }
    
    addComment = function(_id,text){
        for (i=0; i<=posts.length; i++) {
            if (posts[i]['_id'] == _id) {
                let comment = {text: text, commentId: 'c' + ((posts[i]['comments']).length+1)}
                posts[i]['comments'].push(comment);
                (() => commentIdCounter++)()                        //increase the comments counter
                return
            }
        }
    }

    removeComment = function(_id, commentId) {
        for (i=0; i<posts.length; i++) {
            if (posts[i]['_id'] == _id) {
                for (j=0; j<posts[i]['comments'].length; j++) {
                    if (posts[i]['comments'][j]['commentId'] == commentId) {
                        posts[i]['comments'].splice(j,1);
                        (() => commentIdCounter--)()                // decrease the comments counter
                        return
                }
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

let tweeter = Tweeter()

