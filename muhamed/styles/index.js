var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://raw.githubusercontent.com/emrahokic/Web1/master/data.json' // the path to the animation json
})

