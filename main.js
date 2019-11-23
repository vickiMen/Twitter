
const tweeter = Tweeter()
const renderer = Renderer()
let render = () => renderer.renderPosts(getPosts())
render()

$('#post').click(function(){  // add a post BUTTON
    let input = $('input')
    let value = input.val()
    if (value != '') {
        tweeter.addPost(value)
        input.val('')
        render()
    }
})

$(document).on('keypress', '#input', function(e){  // add a comment ENTER
    if (e.which == '13') {
        let input = $('input')
        let value = input.val()
        if (value != '') {
            tweeter.addPost(value)
            input.val('')
            render()
        }
    }
})

$('#container').on('click', '.delPostBtn', function(){  // delete a post
    let delId = $(this).data('id')
    delId = delId.slice(1)
    let postId = 'p' + delId
    tweeter.removePost(postId)
    render()
})


$('#container').on('click', '.delCmtBtn', function(){  // delete a comment
    let delId = $(this).data('id')
    let extractId = delId.slice(1)
    let commentId = 'c' + extractId
    tweeter.removeComment(commentId)
    render()
})

$('#container').on('click', '.cmtBtn', function(){    // open a comment text box
    // debugger
    let parent = $('this').parent()
    let bla = parent.find('.input-container')
    if (bla.length == 0) {
        let postId = $(this).data('id')
        let count = $(`.post[data-id=${postId}] div`).length
        let isFirst
        if (count > 2){
            isFirst = false
        }
        else {
            isFirst = true
        }
        renderer.cmtTextBox(postId, isFirst)
    }
})

$(document).on('keypress', '.cmtTextBox', function(e){  // add a comment
    if (e.which == '13') {
        let postId = $(this).data('id')
        let newCmt = $(this).val()
        if (newCmt != ''){
            tweeter.addComment(postId ,newCmt)
            $(this).val('')
            render() 
        }
    }
})