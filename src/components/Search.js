import React from 'react'
import axios from 'axios'
import { TextField } from '@mui/material'
const Search = ({apiHandler}) => {
  
  const youtubeApi = (querry) => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBDGo15lZYmSOFP41qQz7Hy35g66WfHZUA&part=snippet&type=video&q=${querry}`)
    .then(data => 
      // console.log(data)
      apiHandler(data.data)
      ).catch(err=>{
      console.log(err);
    });
    // pass the data to the App level where the querry function exists.
  }

  const searchHandler = (e) =>{
    if (e.key === 'Enter') {
      console.log('Enter pressed',e.target.value)
      youtubeApi(e.target.value);
    }
  }
  
  return (
    <>
      <TextField sx={{width: '100%'}} label='Search' onKeyDown={searchHandler} />  
    </>
  )
}

export default Search