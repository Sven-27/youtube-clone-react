import React from 'react'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
            <TuneOutlinedIcon />
            <h2>Filter</h2>
            </div>
            <hr/>

            <ChannelRow 
            image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Clever Programmer"
            verified
            subs="695k"
            noOfVideos="382"
            description="You can find awsome programming here"
            />
            <hr/>


           <VideoRow
           title=" How To Become A Successful Youtuber in less than 90 Days"
           subs="695k"
           views="4.4K Views"
           timestamp="1 day ago" 
           channel="Clever Programmer"
           description="You can find awsome programming here"
           image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CPqY__0F&rs=AOn4CLAkxq_p0i0y69HabkCgnQiFrGf3rA"
           />
            
        </div>
    )
}

export default SearchPage
