import axios from 'axios'

export const doLoadDevice = (instance) => {
    return new  Promise(function(resolve, reject){

        const address = instance + '/services/data/v1.0/'
        const address_doql = address + 'query/?output_type=json&query='

        const client = axios.create(
            {
                
                auth: {
                    username: 'admin',
                    password: 'adm!nd42'
                },
                headers: {
                    "Content-Type": "application/json"
                }
                
            }
        )

        let url = address_doql + 'select ra.name as ra_name, d.name, d.in_service, d.type_id, d.type, d.service_level, d.where, d.asset_no, d.serial_no, h.name as h_name, v.name as v_name, o.name as o_name, b.name as b_name, r.name r_name, c.name as c_name from view_device_v1 d left join view_hardware_v1 h on h.hardware_pk = d.hardware_fk left join view_vendor_v1 v on v.vendor_pk = h.vendor_fk left join view_building_v1 b on d.calculated_building_fk = b.building_pk left join view_room_v1 r on d.calculated_room_fk = r.room_pk left join view_os_v1 o on o.os_pk = d.os_fk left join view_customer_v1 c on c.customer_pk = d.customer_fk left join view_rack_v1 ra on ra.rack_pk = d.calculated_rack_fk order by d.name'
        
        client.get (url)
        .then((response) => {
            console.log('auth success')
            resolve(response.data) 
        })
        .catch(error => {
            console.log('auth fail')
            reject(error)
        })
    })
    
}
