import React, {useState, useEffect} from 'react'
import Folders from './Folders'
import Drives from './Drives'

export default () => {
  const [dragging, setDragging] = useState(false)
  const [position, setPosition] = useState({left: 40, top: 40})
  const [lastPosition, setLastPosition] = useState({left: 0, top: 0})

  useEffect(() => {

    const onMouseMove = (e: any) => {
      setPosition({
        left: position.left + e.pageX - lastPosition.left,
        top: Math.max(0, position.top + e.pageY - lastPosition.top)
      })
      setLastPosition({left: e.pageX, top: e.pageY})
    }

    const onMouseUp = () => {
      setDragging(false)
    }

    if (dragging) {
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [dragging])

  const onMouseDown = (e: any) => {
    setLastPosition({left: e.pageX, top: e.pageY})
    setDragging(true)
  }

  return (
    <>
      <div className="explorer"
        style={{
          left: position.left + "px",
          top: position.top + "px",
        }}
      >
        <div className="titlebar" onMouseDown={onMouseDown} style={{}}>
          <div className="title">
            <div className="icon"></div>
            <span>This PC</span>
          </div>
          <div className="buttons" onMouseDown={(e)=>{e.stopPropagation()}}>
            <input type="button" title="Minimize" className="minimize"/><input type="button" title="Maximize" className="maximize"/><input type="button" title="Close" className="close"/>
          </div>
        </div>
        <div className="ribbon">
          <ul>
            <li>File</li>
            <li>Computer</li>
            <li>View</li>
          </ul>
          <div className="other">
            <input type="button" className="open"/><input type="button" className="help"/>
          </div>
        </div>
        <div className="navbar">
          <div className="buttons">
            <input type="button" className="back"/><input type="button" className="forward"/><input type="button" className="history"/><input type="button" className="up active"/>
          </div>
          <div className="adress">
            <div className="icon"></div>
            <div className="dropdown_arrow"></div>
            <span>This PC</span>
            <input type="button" title="Previous Locations" className="dropdown"/>
            <input type="button" title='Refresh "This PC" (F5)' className="refresh"/>
          </div>
          <input type="text" className="search" placeholder="Search This PC"/>
        </div>
        <div className="content">
          <div className="sidebar">
            <ul>
              <li>
                <div className="drop"></div>
                <div className="favorites icon"></div>
                <span>Quick access</span>
              </li>
              <li>
                <div className="drop" style={{visibility: "hidden"}}></div>
                <div className="oneDrive icon"></div>
                <span>OneDrive</span></li>
              <li className="current">
                <div className="drop"></div>
                <div className="thisPC icon"></div>
                <span>This PC</span>
              </li>
              <li className="open">
                <div className="drop" style={{visibility: "hidden"}}></div>
                <div className="network icon"></div>
                <span>Network</span>
              </li>
            </ul>
          </div>
          <div className="folderView">
            <Folders/>
            <Drives/>
          </div>
        </div>
        <div className="statusbar">
          <span title="Total item count">11 items</span>
          <span title="Selected item count and size">2 items selected</span>
          <input type="button" title="Displays information about each item in the window. (Ctrl+Shift+6)" className="unknown1"/>
          <input type="button" title="Displays items by using large thumbnails. (Ctrl+Shift+2)" className="unknown2"/>
        </div>
      </div>
    </>
  )
}
