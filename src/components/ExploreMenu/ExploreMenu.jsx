import React from 'react'
import style from './ExploreMenu.module.css'

const ExploreMenu = () => {
  return (
    <div className={style['explore-menu']} id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className={style['explore-menu-text']}>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.
      </p>
      {/* <div className={style['explore-menu-list']}>
        {menu_list.map((item, index) => {
          return (
            <div  key={index} className={style['explore-menu-list-item']}>
              <img src ={''} alt=''/>
              <p>{item.menu_name}</p>

            </div>
          )
        })}
      </div> */}
    </div>
  )
}

export default ExploreMenu
