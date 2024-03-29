import { Spin } from "antd"
import { useGetServicesDetailsQuery } from "../../api/servicesApi"
import { ErrorReq } from "../ErrorReq/ErrorReq"
import { ServicesList } from "../ServicesList/ServicesList"
import { useParams } from "react-router-dom"
import { ServiceCard } from "../ServiceCard/ServiceCard"
import style from "./ServiceCardDetails.module.css"


export function ServiceCardDetails (){
    const { id } = useParams()
    const { data, isError, isLoading, refetch } = useGetServicesDetailsQuery(id || '')
  
    console.log(data)
    const handleReq = ()=> {
      refetch()
    }
    return( <main className={style.container}>
            {
                isLoading?  <Spin /> : 
                isError? <ErrorReq onClick={handleReq}/> :
                <ServiceCard service={data} details/>
            }
    </main>)
}