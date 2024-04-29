import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const arr = [{id:1,name:"Item 1"},{id:2, name:"Item 2"},{id:3, name:"Item 3"}]
const ItemList = () => {
  return (
    <div><h1>Item List</h1>
    {arr.map((item,index)=>(<li key={index}><Link to={`/items/${item.id}`}>{item.name}</Link></li>))}
    <Outlet/>
    </div>
  )
}

export default ItemList