import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

const Sidebar = () => {
  return (
    <aside id="sidebar">
    <div className='sidebar-title'>
        <div className='sidebar-brand flex gap-x-2'>
            <BsCart3  className='icon_header'/> SHOP
        </div>
        <span className='icon close_icon' >X</span>
    </div>

    <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            <a href="" className='flex gap-x-2 items-center'>
                <BsGrid1X2Fill className='icon'/> Dashboard
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="" className='flex gap-x-2 items-center'>
                <BsFillArchiveFill className='icon'/> Products
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="" className='flex gap-x-2 items-center'>
                <BsFillGrid3X3GapFill className='icon'/> Categories
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="" className='flex gap-x-2 items-center'>
                <BsPeopleFill className='icon'/> Customers
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="" className='flex gap-x-2 items-center'>
                <BsListCheck className='icon'/> Inventory
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="" className='flex gap-x-2 items-center'>
                <BsMenuButtonWideFill className='icon'/> Reports
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="" className='flex gap-x-2 items-center'>
                <BsFillGearFill className='icon'/> Setting
            </a>
        </li>
    </ul>
</aside>
  )
}

export default Sidebar