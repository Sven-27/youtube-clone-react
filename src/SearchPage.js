import React from 'react'
import ChannelRow from './ChannelRow'
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

            
        </div>
    )
}

export default SearchPage
