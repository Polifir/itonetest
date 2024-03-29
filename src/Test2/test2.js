import { Spin } from "antd"
import {ErrorReq} from "./components/ErrorReq/ErrorReq"
import { ServicesList } from "./components/ServicesList/ServicesList"
import style from "./test2.module.css"
import { useGetServicesQuery } from "./api/servicesApi"


export function Test2() {
    const {data =[], isLoading, isError, refetch} = useGetServicesQuery()

    const handleReq =() =>{
        refetch()
    }

    return (
        <main className={style.container}>
            {
                isLoading?  <Spin /> : 
                isError? <ErrorReq onClick={handleReq}/> :
                <ServicesList services={data}/>
            }
        </main>

    )
  }