import {React,useState,useEffect, useRef} from 'react'
import axios from 'axios';

const Player = (videoId) => {
  const parse = require('html-react-parser');
  const isMounted = useRef(false);
  const [videoPlayer,setVideoPlayer] = useState('');
  const [videoTitle,setVideoTitle] = useState('');

  useEffect(()=>{
    if(isMounted.current){
        let url = `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBDGo15lZYmSOFP41qQz7Hy35g66WfHZUA&part=snippet,player&id=${videoId.videoId}`;
        axios.get(url).then(res=>{
        let element = parse(res.data.items[0].player.embedHtml);
        console.log('from player', res.data)
        setVideoPlayer(element);
        setVideoTitle(res.data.items[0].snippet);
        // console.log(videoPlayer);
      });
    }else{
      isMounted.current = true;
    }
    // eslint-disable-next-line
},[videoId])
return (
    <div width="100%" height='auto'>
      {videoPlayer ? <iframe title={videoTitle.title} src={videoPlayer.props.src} width='100%' height='350px' allow={videoPlayer.props.allow} allowFullScreen='allowfullscreen'></iframe> : ''}
      <h3>{videoTitle.title}</h3><span style={{color:'gray'}}>{videoTitle.channelTitle}</span>
    </div>
    )
}

export default Player