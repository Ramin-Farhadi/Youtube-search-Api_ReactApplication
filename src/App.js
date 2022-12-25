import { useState } from 'react';

import Search from './components/Search'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import VideoItems from './components/VideoItems';
import Player from './components/Player';

function App() {
  const [youTubeSearchListRes, setYouTubeSearchListRes] =  useState('');
  const [videoId,setVideoId] = useState('');

  const apiHandler = (OBJ) => {
    setYouTubeSearchListRes(OBJ.items);
  }
console.log('from app',videoId)

  return (
    <>
    <Grid2 container>
      <Grid2 xs={1} />
        <Grid2 container spacing={2} xs={10}>
          <Grid2 xs={12} sx={{mt:'50px'}}>
            <Search apiHandler={apiHandler} />
          </Grid2>
          <Grid2 xs={7}> 
              {/* Where player loads */}
              <Player videoId={ videoId ? videoId : youTubeSearchListRes? youTubeSearchListRes[0].id.videoId :''}/>       
          </Grid2>
          <Grid2 xs={5}>
              <VideoItems items={youTubeSearchListRes} videoIdHandler={setVideoId}/>
          </Grid2>
        </Grid2>
      <Grid2 xs={1} />
    </Grid2>  
    </>
  );
}

export default App;
