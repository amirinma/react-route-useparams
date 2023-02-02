import React from "react"
import {Link} from 'react-router-dom'
import servicesData from "./servicesData"
function ServicesList() {
    const data = servicesData.map(service => (
        <div>
            <h4><Link to={`/services/${service._id}`}>{service.name}</Link> - {service.price}</h4>
        </div>
    ))
    return (
        <div>
            <h3>Serivces List Page</h3>
            {data}
        </div>
    )
}

export default ServicesList