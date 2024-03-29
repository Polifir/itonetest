import style from "./test1.module.css"

import { useEffect, useState } from "react"
import { fetchData } from "./api/data"
import {CardList} from "./CardList/CardList"

export function Test1() {
    const [data, setData] = useState([])

    useEffect(() =>{
      fetchData().then(res => setData(res))
    }, [])

    return <main className={style.test1}>{ <CardList data ={data}/>}</main>
  }