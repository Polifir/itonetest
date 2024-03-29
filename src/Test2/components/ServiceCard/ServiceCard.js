import { Link } from "react-router-dom"
import style from "./ServiceCard.module.css"


export function ServiceCard({service, details =false}) {
    return(
        <li className={style.container}>
            <h3 className={style.name}>{service.name}</h3>
            <div>{service.price}</div>
            {details? <p> {service?.content}</p> :<Link to={`/test2/${service.id}/details`} className={style.link}>Подробнее</Link> }
        </li>
    )
  }