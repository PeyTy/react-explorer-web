import React from 'react'
import TrayDateTime from './TrayDateTime'

export default () => {
  return (
    <>
      <div className="taskbar">
        <div className="start" title="Start"></div>
        <div className="tasks">
          <div className="app" title="This PC">
            <div className="icon"></div>
            {<div className="name">This PC</div>&&null}
          </div>
        </div>
        <div className="onedrive" title="OneDrive"></div>
        <div className="network" title="Network"></div>
        <div className="sound" title="Speakers: 32%"></div>
        <div className="current_language" title="English (United States)">
          <span className="time">ENG</span>
        </div>
        <TrayDateTime/>
        <div className="info_center" title="No new notifications"></div>
        <div className="show_desktop"></div>
      </div>
    </>
  )
}
