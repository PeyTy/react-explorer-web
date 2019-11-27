import React from 'react'
import { DemoContextConsumer } from '../contexts/DemoContext'

export default () => {
  return (
    <DemoContextConsumer>{({folders}) => (
      <div className="folders">
        <div className="header">
          <div className="dropdown"></div>
          <span className="title">Folders ({folders.length})</span>
          <div className="viewline"></div>
        </div>
        <ul className="struct">
          {folders.map((folder) => (
            <li key={folder.name} className={folder.selected? "selected" : ""}>
              <div className="iconwrapper">
                <div className={"icon " + folder.icon}></div>
              </div>
              <div className="infowrapper">
                <span className="name">{folder.name}</span>
                <span className="place">&nbsp;</span>
                {<div className="icon pin"></div>&&null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )}</DemoContextConsumer>
  )
}
