// https://d01.yt-dl.click/27b2ee9b-1e9c-400c-b81a-1db625f241ba/320/pdV1bgv1YXc
let videoId
function search() {
    videoId = document.getElementById('video').value
    document.getElementById('thumb').innerHTML = `<img src='https://i.ytimg.com/vi/${videoId}/hqdefault.jpg'>`

    $.ajax({
        url: "https://d4.ymcdn.website/check.php?v=7bDg7n-chhU",
        type: 'GET',
        CORS: true ,
        contentType:'application/json',
        secure: true,
        headers: {
        'Access-Control-Allow-Origin': '*',
        },
    }).done(
        // function() {
        //     $( this ).addClass( "done" );
        // }
        console.log('hehehe')
        );
}

function download() {
    console.log(videoId)
    window.location.href = `https://d01.yt-dl.click/27b2ee9b-1e9c-400c-b81a-1db625f241ba/320/${videoId}`
}