import style from "./CardList.module.css"

import {Card} from "../Card/Card";

export function CardList({data}){
    return (
        <ul className={style.CardList}>
            {
                data.map((data) => {
                    return <Card key={data.header} cardData={data}/>
                })
            }
        </ul>
    )
  }