import React from 'react'
import Desktop from './Desktop'
import ExplorerWindow from './ExplorerWindow'
import TaskBar from './TaskBar'

export default () => (
  <>
    <div className="workspace">
      <Desktop/>
      <ExplorerWindow/>
    </div>
    <TaskBar/>
  </>
)
