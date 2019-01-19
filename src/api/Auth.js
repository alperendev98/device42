import axios from 'axios'

const address = 'https://google.com'

export const doAuth = (email, password) => {
    return new  Promise(function(resolve, reject){
        axios.get(address, {
        })
        .then(response => {
            resolve(response.data) 

        })
        .catch(error => {
            reject(error)
        })
    })
    
}