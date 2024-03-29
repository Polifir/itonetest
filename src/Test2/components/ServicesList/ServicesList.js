import { ServiceCard } from "../ServiceCard/ServiceCard";

import style from "./ServicesList.module.css"

export function ServicesList({services}) {
    return (<ul className={style.container}>
        {services.map((service) =>(<ServiceCard key={service.id} service={service}/>))}
    </ul> )
  }