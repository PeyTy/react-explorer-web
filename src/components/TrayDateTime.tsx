import React, { useState, useEffect } from 'react'

export default () => {
  const getDateTime = () => new Date().toLocaleString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const getDate = () => new Date().toLocaleDateString()

  const [dateTime, setDateTime] = useState(getDateTime())
  const [time, setTime] = useState(getTime())
  const [date, setDate] = useState(getDate())

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getDateTime())
      setTime(getTime())
      setDate(getDate())
    }, 1000)
    return () => clearInterval(interval);
  }, [dateTime, time, date])

  return (
    <div className="date_time" title={dateTime}>
      <span className="time">{time}</span>
      <span className="date">{date}</span>
    </div>
  )
}
