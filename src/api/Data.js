import axios from 'axios'
import config from 'config.json';

export const doLoadData = (instance, doql) => {
    return new  Promise(function(resolve, reject){

        const address_doql = instance + '/services/data/v1.0/query/?output_type=json&query='

        const client = axios.create(
            {
                
                auth: {
                    username: config.username,
                    password: config.password
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
            reject(error)
        })
    })
    
}
