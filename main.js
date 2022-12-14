//nav bar
let open_nav = document.getElementById('open_nav');
let open_nav2 = document.getElementById('open_nav2');
let open_nav3 = document.getElementById('open_nav3');
let open_nav4 = document.getElementById('open_nav4');
let open_nav5 = document.getElementById('open_nav5');
let open_nav6 = document.getElementById('open_nav6');
let open_nav7 = document.getElementById('open_nav7');
let open_nav8 = document.getElementById('open_nav8');
let open_nav9 = document.getElementById('open_nav9');
let close_nav = document.getElementById('close_nav');
let nav0 = document.getElementById('nav');

open_nav.addEventListener('click', function() {
    nav0.style.transition = '.4s';
    nav0.style.left = '0';
});
open_nav2.addEventListener('click', function() {
    nav0.style.transition = '.4s';
    nav0.style.left = '0';
});
open_nav3.addEventListener('click', function() {
    nav0.style.transition = '.4s';
    nav0.style.left = '0';
});
open_nav4.addEventListener('click', function() {
    nav0.style.transition = '.4s';
    nav0.style.left = '0';
});
open_nav5.addEventListener('click', function() {
    nav0.style.transition = '.4s';
    nav0.style.left = '0';
});
open_nav6.addEventListener('click', function() {
    nav0.style.transition = '.4s';
    nav0.style.left = '0';
});
open_nav7.addEventListener('click', function() {
    nav0.style.transition = '.4s';
    nav0.style.left = '0';
});
open_nav8.addEventListener('click', function() {
    nav0.style.transition = '.4s';
    nav0.style.left = '0';
});
open_nav9.addEventListener('click', function() {
    nav0.style.transition = '.4s';
    nav0.style.left = '0';
});
close_nav.addEventListener('click', function() {
    nav0.style.transition = '.4s';
    nav0.style.left = '-100%';
});


//Music
let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let slider = document.querySelector('#duration_slider');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let artist = document.querySelector('#artist');
let timer;
let autoplay = 0;
let index_no = 0;
let playing_song = false;

//create a audio element
let track = document.createElement('audio');

//all song list
let All_song = [{
        name: "Faded",
        path: "music/Alan_Walker_-_Faded.mp3",
        img: "Data/Rectangle 21.png",
        singer: "Alen Walker"
    },
    {
        name: "Bad Habits",
        path: "music/Ed_Sheeran_-_Bad_Habits.mp3",
        img: "Data/Rectangle 20.png",
        singer: "Ed_Sheeran"
    },
    {
        name: "Unstoppable",
        path: "music/Sia, R3HAB - Unstoppable.mp3",
        img: "Data/Rectangle 19.png",
        singer: "Sia, R3HAB"
    },
    {
        name: "We Found Love",
        path: "music/Rihanna_ft_Calvin_Harris_-_We_Found_Love.mp3",
        img: "Data/Rectangle 18.png",
        singer: "Rihanna"
    },
    {
        name: "Fall in Love",
        path: "music/HAVOQ & Max Adrian feat. Katie Sky - Fall In Love.mp3",
        img: "Data/Rectangle 17.png",
        singer: "Katie Sky"
    }
];

//Function to load the track
function load_track(index_no) {
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    timer = setInterval(range_slider, 1000);

}
load_track(index_no);

//reset  song slider
function reset_slider() {
    slider.value = 0;
}



//checking the song is playing or  not
function justplay() {
    if (playing_song == false) {
        playsong();
    } else {
        pausesong();
    }
}

//play song
function playsong() {
    track.play();
    playing_song = true;
    play.classList.remove('bx-play');
    play.classList.add('bx-pause');

}


//pause song
function pausesong() {
    track.pause();
    playing_song = false;
    play.classList.remove('bx-pause');
    play.classList.add('bx-play');
}


//next song
function next_song() {
    if (index_no < All_song.length - 1) {
        index_no += 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}



//previous song
function previous_song() {
    if (index_no > 0) {
        index_no -= 1;
        load_track(index_no);
        playsong();
    } else {
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}


//change volume
function volume_change() {
    volume_show = track.duration * (slider.value / 100);
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value / 100;
}

// change slider position
function change_duration() {
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}
//autoplay funcction
function autoplay_switch() {
    if (autoplay == 1) {
        autoplay = 0;
        auto_play.style.color = "#FFF";
    } else {
        autoplay = 1;
        auto_play.style.color = "#FACD66";
    }
}

function range_slider() {
    let position = 0;

    //update slider position
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }

    //function will run when the song is over
    if (track.ended) {
        play.classList.add('bx-play');
        if (autoplay == 1) {
            index_no += 1;
            load_track(index_no);
            playsong();
        }
    }
}


//page sections
let home = document.getElementById('home');
let radio = document.getElementById('radio');
let radio2 = document.getElementById('radio2');
let musicDiv = document.getElementById('music');
let user = document.getElementById('user');
let exit = document.getElementById('exit');
let btn_home = document.getElementById('btn_home');
let btn_radio = document.getElementById('btn_radio');
let btn_radio2 = document.getElementById('btn_radio2');
let btn_music = document.getElementById('btn_music');
let btn_user = document.getElementById('btn_user');
let btn_exit = document.getElementById('btn_exit');
let btn_tomrw = document.getElementById('tomrw');
let tomrw = document.getElementById('tomrw1');
let btn_blues = document.getElementById('blues');
let blues = document.getElementById('blues1');
let btn_golden = document.getElementById('golden');
let golden = document.getElementById('golden1');
let h = document.getElementById('h');
let r = document.getElementById('r');
let r2 = document.getElementById('r2');
let m = document.getElementById('m');
let p = document.getElementById('p');
let e = document.getElementById('e');




btn_radio.addEventListener('click', function() {
    home.style.display = 'none';
    tomrw.style.display = 'none';
    golden.style.display = 'none';
    blues.style.display = 'none';
    radio2.style.display = 'none';
    musicDiv.style.display = 'none';
    user.style.display = 'none';
    exit.style.display = 'none';
    radio.style.display = 'block';
    btn_home.classList.remove('active');
    btn_radio.classList.add('active');
    btn_music.classList.remove('active');
    btn_radio2.classList.remove('active');
    btn_user.classList.remove('active');
    btn_exit.classList.remove('active');
    h.classList.remove('active1');
    r.classList.add('active1');
    r2.classList.remove('active1');
    m.classList.remove('active1');
    p.classList.remove('active1');
    e.classList.remove('active1');
    if (window.innerWidth <= 768) {
        nav0.style.transition = '.4s';
        nav0.style.left = '-100%';
    }
})
btn_home.addEventListener('click', function() {
    home.style.display = 'block';
    radio.style.display = 'none';
    tomrw.style.display = 'none';
    golden.style.display = 'none';
    blues.style.display = 'none';
    radio2.style.display = 'none';
    musicDiv.style.display = 'none';
    user.style.display = 'none';
    exit.style.display = 'none';
    btn_home.classList.add('active');
    btn_radio.classList.remove('active');
    btn_music.classList.remove('active');
    btn_radio2.classList.remove('active');
    btn_user.classList.remove('active');
    btn_exit.classList.remove('active');
    r.classList.remove('active1');
    h.classList.add('active1');
    r2.classList.remove('active1');
    m.classList.remove('active1');
    p.classList.remove('active1');
    e.classList.remove('active1');
    if (window.innerWidth <= 768) {
        nav0.style.transition = '.4s';
        nav0.style.left = '-100%';
    }
})
btn_radio2.addEventListener('click', function() {
    home.style.display = 'none';
    tomrw.style.display = 'none';
    golden.style.display = 'none';
    blues.style.display = 'none';
    radio2.style.display = 'block';
    musicDiv.style.display = 'none';
    user.style.display = 'none';
    exit.style.display = 'none';
    radio.style.display = 'none';
    btn_home.classList.remove('active');
    btn_radio.classList.remove('active');
    btn_music.classList.remove('active');
    btn_radio2.classList.add('active');
    btn_user.classList.remove('active');
    btn_exit.classList.remove('active');
    h.classList.remove('active1');
    r.classList.remove('active1');
    r2.classList.add('active1');
    m.classList.remove('active1');
    p.classList.remove('active1');
    e.classList.remove('active1');
    if (window.innerWidth <= 768) {
        nav0.style.transition = '.4s';
        nav0.style.left = '-100%';
    }
})
btn_music.addEventListener('click', function() {
    home.style.display = 'none';
    tomrw.style.display = 'none';
    golden.style.display = 'none';
    blues.style.display = 'none';
    radio2.style.display = 'none';
    musicDiv.style.display = 'block';
    user.style.display = 'none';
    exit.style.display = 'none';
    radio.style.display = 'none';
    btn_home.classList.remove('active');
    btn_radio.classList.remove('active');
    btn_music.classList.add('active');
    btn_radio2.classList.remove('active');
    btn_user.classList.remove('active');
    btn_exit.classList.remove('active');
    h.classList.remove('active1');
    r.classList.remove('active1');
    r2.classList.remove('active1');
    m.classList.add('active1');
    p.classList.remove('active1');
    e.classList.remove('active1');
    if (window.innerWidth <= 768) {
        nav0.style.transition = '.4s';
        nav0.style.left = '-100%';
    }
})
btn_user.addEventListener('click', function() {
    home.style.display = 'none';
    tomrw.style.display = 'none';
    golden.style.display = 'none';
    blues.style.display = 'none';
    radio2.style.display = 'none';
    musicDiv.style.display = 'none';
    user.style.display = 'block';
    exit.style.display = 'none';
    radio.style.display = 'none';
    btn_home.classList.remove('active');
    btn_radio.classList.remove('active');
    btn_music.classList.remove('active');
    btn_radio2.classList.remove('active');
    btn_user.classList.add('active');
    btn_exit.classList.remove('active');
    h.classList.remove('active1');
    r.classList.remove('active1');
    r2.classList.remove('active1');
    m.classList.remove('active1');
    p.classList.add('active1');
    e.classList.remove('active1');
    if (window.innerWidth <= 768) {
        nav0.style.transition = '.4s';
        nav0.style.left = '-100%';
    }
})
btn_exit.addEventListener('click', function() {
    home.style.display = 'none';
    tomrw.style.display = 'none';
    golden.style.display = 'none';
    blues.style.display = 'none';
    radio2.style.display = 'none';
    musicDiv.style.display = 'none';
    user.style.display = 'none';
    exit.style.display = 'block';
    radio.style.display = 'none';
    btn_home.classList.remove('active');
    btn_radio.classList.remove('active');
    btn_music.classList.remove('active');
    btn_radio2.classList.remove('active');
    btn_user.classList.remove('active');
    btn_exit.classList.add('active');
    h.classList.remove('active1');
    r.classList.remove('active1');
    r2.classList.remove('active1');
    m.classList.remove('active1');
    p.classList.remove('active1');
    e.classList.add('active1');
    if (window.innerWidth <= 768) {
        nav0.style.transition = '.4s';
        nav0.style.left = '-100%';
    }
})
btn_tomrw.addEventListener('click', function() {
    home.style.display = 'none';
    radio.style.display = 'none';
    radio2.style.display = 'none';
    musicDiv.style.display = 'none';
    user.style.display = 'none';
    exit.style.display = 'none';
    tomrw.style.display = 'block';
    btn_home.classList.remove('active');
    btn_radio.classList.remove('active');
    btn_music.classList.remove('active');
    btn_radio2.classList.remove('active');
    btn_user.classList.remove('active');
    btn_exit.classList.remove('active');
    h.classList.remove('active1');
    r.classList.remove('active1');
    r2.classList.remove('active1');
    m.classList.remove('active1');
    p.classList.remove('active1');
    e.classList.remove('active1');
    if (window.innerWidth <= 768) {
        nav0.style.transition = '.4s';
        nav0.style.left = '-100%';
    }
})
btn_blues.addEventListener('click', function() {
    home.style.display = 'none';
    radio.style.display = 'none';
    tomrw.style.display = 'none';
    golden.style.display = 'none';
    radio2.style.display = 'none';
    musicDiv.style.display = 'none';
    user.style.display = 'none';
    exit.style.display = 'none';
    blues.style.display = 'block';
    btn_home.classList.remove('active');
    btn_radio.classList.remove('active');
    btn_music.classList.remove('active');
    btn_radio2.classList.remove('active');
    btn_user.classList.remove('active');
    btn_exit.classList.remove('active');
    h.classList.remove('active1');
    r.classList.remove('active1');
    r2.classList.remove('active1');
    m.classList.remove('active1');
    p.classList.remove('active1');
    e.classList.remove('active1');
    if (window.innerWidth <= 768) {
        nav0.style.transition = '.4s';
        nav0.style.left = '-100%';
    }
})
btn_golden.addEventListener('click', function() {
    home.style.display = 'none';
    radio.style.display = 'none';
    tomrw.style.display = 'none';
    blues.style.display = 'none';
    radio2.style.display = 'none';
    musicDiv.style.display = 'none';
    user.style.display = 'none';
    exit.style.display = 'none';
    golden.style.display = 'block';
    btn_home.classList.remove('active');
    btn_radio.classList.remove('active');
    btn_music.classList.remove('active');
    btn_radio2.classList.remove('active');
    btn_user.classList.remove('active');
    btn_exit.classList.remove('active');
    h.classList.remove('active1');
    r.classList.remove('active1');
    r2.classList.remove('active1');
    m.classList.remove('active1');
    p.classList.remove('active1');
    e.classList.remove('active1');
    if (window.innerWidth <= 768) {
        nav0.style.transition = '.4s';
        nav0.style.left = '-100%';
    }

})