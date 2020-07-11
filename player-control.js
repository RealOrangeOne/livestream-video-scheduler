var SRC_ATTR = 'src';
var STANDARD_BG = 'genericbg.png';
var MATCH_DIR = "./match_videos/";
var MATCH_FILE_FORMAT = ".mkv";


var video = document.getElementById('match-player');
var source = document.createElement('source');
source.setAttribute('src', '');
video.appendChild(source);

function setBg(bgImg){
  document.getElementById('background').setAttribute('src',bgImg);
}

function playVideo(vidSrc, bgImg = STANDARD_BG) {
  setBg(bgImg);
  video.pause();
  source.setAttribute(SRC_ATTR, vidSrc);
  video.load();
  showPlayer(true);
  video.play();
}

function pauseVideo(vidSrc, bgImg = STANDARD_BG) {
    video.pause();
}

function showPlayer(show){
    if(show){
        video.style.setProperty("visibility", "visible", "important");
    }
    else{
        video.style.setProperty("visibility", "hidden", "important");
    }
}

function playMatch(matchNum){
    console.log("Playing match",matchNum);
    playVideo(getMatchFile(matchNum));
    //playVideo(getMatchFile(0));
}

function getMatchFile(matchNum){
    return MATCH_DIR.concat(matchNum).concat(MATCH_FILE_FORMAT);
}

