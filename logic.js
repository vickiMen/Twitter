Tweeter = function(){

    /* The module that manages our posts logic
        - Storing all our twits (not the same as tweets)
        - Posting a twit
        - Commenting on twits
        - Removing twits
        - Removing comments */

    posts = []
    
    //An array of posts - this should be private. Use the dummy data below to get started
    
    let postIdCounter = 0                                      //to count the number of total posts

    let commentIdCounter = 0                                //to count the number of total comments

    getPosts = function() {
        //that returns the posts array
        return posts
    } 

    addPost = function(text){                

    /* that receives some text and adds a post object to posts 
    Each object should have three properties: id, text, and comments
    You should generate the next id correctly for each post: "p4", "p5", ...
    The comments array should be empty initially */

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
        // that receives a postID and removes the relevant post from posts   
        posts.splice(posts[_id-1],1);
        (() => postIdCounter--)() //decrease the posts counter
    }
    
    addComment = function(_id,text){

        /* let index = posts.findIndex(posts[_id-1])
        that receives a postID and text. It should push an object to the relevant post's comments array
        The object should have two properties: text and id - this is the comment's ID
        You should generate the next id correctly for each comment:"c7", "c8", ... */
        
        for (i=0; i<posts.length; i++) {
            if (posts[i]['_id'] == _id) {
                let comment = {text: text, commentId: 'c' + ((posts[i]['comments']).length+1)}
                posts[i]['comments'].push(comment);
                (() => commentIdCounter++)()                        //increase the comments counter
                return
            }
        }
    }

    removeComment = function(_id, commentId) {
        // that receives a postID and a commentID - you understand what it should do
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
console.log(tweeter.getPosts())
console.log(tweeter.addPost('hello, it\'s me'))
console.log(tweeter.postIdCounter)
// console.log(tweeter.getPosts())
console.log(tweeter.addPost('I\'ve been wondering...'))
console.log(tweeter.addPost('Hello'))
console.log(tweeter.postIdCounter)
console.log(tweeter.removePost('p1'))
console.log(tweeter.postIdCounter)
// console.log(posts)
console.log(tweeter.addComment('p2','Hiii! this is a comment!!!'))
console.log(tweeter.commentIdCounter)
console.log(tweeter.removeComment('p2','c1'))
console.log(tweeter.commentIdCounter)