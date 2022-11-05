window.onload = function() {
    let playBut2 = document.getElementById("play2");
//上一首
    let prev2 = document.getElementById("prev2");
//下一首
    let Next2 = document.getElementById("next2");
//歌名
    let song2 = document.getElementById("song2");
//歌手
    let author2 = document.getElementById("name2")
//播放器
    let myAudio2 = document.getElementById("myAudio2");
//控件
    let controlDom2 = document.getElementById('control2');
//音乐信息
    let infoBar2 = document.getElementById('info2');

    playBut2.addEventListener("click", playF2);
    Next2.addEventListener("click", nextF2);
    prev2.addEventListener("click", prevF2);

    function playF2() {
        //判断当前是否在播放
        let flag = Array.from(controlDom2.classList).some(function (item) {
            return item == "active";
        });
        if (flag) {
            //播放中点击暂停
            controlDom2.classList.remove('active');
            infoBar2.classList.remove('active');
            myAudio2.pause();
        } else {
            //播放
            controlDom2.classList.add('active');
            infoBar2.classList.add('active');
            myAudio2.play();
        }
    }

    let arrys1 = ["audio/pianai.mp3", "audio/lydy.mp3"];


//获取Audio对象
    let AudioDom2 = document.getElementById("myAudio2");
//设置播放源
    let currMp3 = arrys1[0];
    AudioDom2.src = arrys1[0];

//监听 Audio 的 timeupdate方法来实时获取播放进度
    AudioDom2.addEventListener("timeupdate", function () {

        //获取当前播放的百分比  当前进度/总进度
        let percent = AudioDom2.currentTime / AudioDom2.duration

        //计算进度条的因子,百分比需要*该因子,最后才能到100%
        let sp = 600 / 100;

        //拼接进度条的width
        let swidth = (percent * 27 * sp) + "px";
        console.log(percent * 100, swidth)

        //设置进度条的播放进度
        document.getElementById("playProgressBar2").style.width = swidth;

        //保留2位小数
        document.getElementById("ptxt2").innerText = ((percent * 100).toFixed(2)) + "%"

    })

    function nextF2() {
        let tmpMp3 = "";
        arrys1.forEach(function (item, index) {
            if (item == currMp3) {
                if ((index + 1) > arrys1.length - 1) {
                    //说明是最后一个
                    tmpMp3 = arrys1[0];
                    song2.innerHTML = "偏爱";
                    console.log(song2.innerHTML);
                    author2.innerHTML = "张芸京";
                } else if ((index + 1) > arrys1.length - 2) {
                    //下一个
                    tmpMp3 = arrys1[index + 1];
                    song2.innerHTML = "忘记时间";
                    console.log(song2.innerHTML);
                    author2.innerHTML = "胡歌";
                    console.log(author2.innerHTML);
                } else {
                    tmpMp3 = arrys1[index + 1];
                    song2.innerHTML = "六月的雨";
                    console.log(song2.innerHTML);
                    author2.innerHTML = "胡歌";
                    console.log(author2.innerHTML);
                }
                console.log(tmpMp3);
                AudioDom2.src = tmpMp3;
                setTimeout(function () {
                    myAudio2.play()
                    currMp3 = tmpMp3;
                }, 500)
                return;
            }
        })
    }

//上一首
    function prevF2() {
        let tmpMp3 = "";
        arrys1.forEach(function (item, index) {
            if (item == currMp3) {
                if (index == 0) {
                    //说明是第一个
                    tmpMp3 = arrys1[arrys1.length - 1];
                    song2.innerHTML = "忘记时间";
                    console.log(song2.innerHTML);
                    author2.innerHTML = "胡歌";
                    console.log(author2.innerHTML);
                } else if ((index - 1)) {
                    //下一个
                    tmpMp3 = arrys1[index - 1];
                    song2.innerHTML = "六月的雨";
                    console.log(song2.innerHTML);
                    author2.innerHTML = "胡歌";
                    console.log(author2.innerHTML);
                } else {
                    tmpMp3 = arrys1[index - 1];
                    song2.innerHTML = "偏爱";
                    console.log(song2.innerHTML);
                    author2.innerHTML = "张芸京";
                }
                console.log(tmpMp3);
                console.log(tmpMp3)
                AudioDom2.src = tmpMp3;
                setTimeout(function () {
                    myAudio2.play()
                    currMp3 = tmpMp3;
                }, 500)
                return;
            }
        })
    }
}