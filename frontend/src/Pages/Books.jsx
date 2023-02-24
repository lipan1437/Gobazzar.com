import React from 'react'
import BooksList from '../Components/ProductPage/BooksList'
import SideBar from '../Components/ProductPage/SideBar'

import styles from "../Styles/Books.module.css"
export default function Books() {
  return (
    <div>
        {/* <Navbar/> */}
        <div className={styles["books-filter-container"]}>
            <div className={styles["filter-component"]}>
                {/* <SideBar/> */}
                <SideBar/>
            </div>
            <div className={styles["books-list"]}>
                <BooksList/>
            </div>
        </div>
    </div>
  )
}
