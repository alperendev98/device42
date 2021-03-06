import axios from 'axios'

export const doLoadData = (instance, doql) => {
    return new  Promise(function(resolve, reject){

        const address_doql = instance.server_url + '/services/data/v1.0/query/?output_type=json&query='

        const client = axios.create(
            {
                
                auth: {
                    username: instance.username,
                    password: instance.password
                },
                headers: {
                    "Content-Type": "application/json"
                }
                
            }
        )

        let url = address_doql + doql
        
        client.get (url)
        .then((response) => {
            console.log('auth success')
            resolve(response.data)
        })
        .catch(error => {
            console.log('auth fail')
            resolve([])
        })
    })
    
}
