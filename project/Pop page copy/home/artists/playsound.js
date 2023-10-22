var audio= document.getElementById('play_sound')
var icon= document.getElementById('icon')
        function start_music()
        {
            audio.play()
        }
        function stop_music()
        {
            audio.pause()
        }
icon.onclick = function(){
        if(audio.paused)
        {   start_music()
            icon. src="images/pause button.png"
        }
        else
        {
            stop_music()
            icon. src="images/play button.png"
        }
    }
