import React from "react"
import {useParams} from "react-router-dom"
import servicesData from "./servicesData"
function ServiceDetail(props) {
    const params = useParams()
    const serviceData = servicesData.find(service =>
        service._id === params.serviceId
    )
    console.log(params)
    return (
        <div>
            <h1>{serviceData.name} - {serviceData.price}</h1>
            <p>{serviceData.description}</p>
        </div>
    )
}

export default ServiceDetail