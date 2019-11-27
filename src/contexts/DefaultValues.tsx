import { DemoContextType } from './DemoContext'

const values: DemoContextType = {
  folders: [
    {name: "3D Objects", icon: "stereo"},
    {name: "Desktop", icon: "desktop", selected: true},
    {name: "Documents", icon: "documents"},
    {name: "Downloads", icon: "downloads"},
    {name: "Music", icon: "music"},
    {name: "Pictures", icon: "images"},
    {name: "Videos", icon: "video"},
  ],
  drives: [
    {name: "Local Disk", letter: "C", icon: "disk", size: 111, free: 81.2, scale: "GB"},
    {name: "DVD Drive", letter: "H", icon: "usb", size: 4.57, free: 0, scale: "GB", hint: "CENA_X64FREE_EN-US_DV9", selected: true},
    {name: "GreenteaOS", letter: "G", icon: "gos", size: 7.43, free: 7.23, scale: "GB"},
    {name: "RAMDisk", letter: "R", icon: "ram", size: 396, free: 180, scale: "MB"}
   ]
}

export default values
