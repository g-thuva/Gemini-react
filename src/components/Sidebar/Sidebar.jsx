import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
const Sidebar = () => {

    const[extended,setExtended]=useState(false)

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt=''/>
            <div className="new-chat">
                <img src={assets.plus_icon}/>
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?
                <div className="recent">
                <div className="recent-title">
                    <p className="recent-entry">Recent</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon}/>
                        <p>What is React</p>
                    </div>
                </div>
            </div>:null
            }
            
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon}/>
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon}/>
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon}/>
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar