import React from 'react'
import { DemoContextConsumer } from '../contexts/DemoContext'

export default () => {
  return (
    <DemoContextConsumer>{({drives}) => (
      <div className="files">
        <div className="header">
          <div className="dropdown"></div>
          <span className="title">Devices and drives ({drives.length})</span>
          <div className="viewline"></div>
        </div>
        <ul className="struct">
          {drives.map((drive) => (
            <li key={drive.name} className={drive.selected? "selected" : ""}>
              <div className="iconwrapper">
                <div className={"icon " + drive.icon}></div>
              </div>
              <div className="infowrapper">
                <span className="name">{drive.name} ({drive.letter}:)</span>
                {
                  drive.hint?
                    <div>
                      {drive.hint}
                    </div>
                  :
                    <div className="litter">
                      <div className="busy" style={{width: (1 - (drive.free/drive.size)) * 100 + "%"}}></div>
                    </div>
                }
                <span className="free">{drive.free} {drive.free === 0? "bytes" : drive.scale} free of {drive.size} {drive.scale}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )}</DemoContextConsumer>
  )
}
