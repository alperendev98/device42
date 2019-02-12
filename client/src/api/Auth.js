import axios from 'axios'
const address = process.env.REACT_APP_API_ENDPOINT
export const doAuth = (username, password) => {
    return new  Promise(function(resolve, reject){
        axios.post(address + '/users/login', {
            username: username,
            password: password
        })
        .then(response => {
            resolve(response.data.success) 

        })
        .catch(error => {
            reject(error)
        })
    })
    
}

export const doRegister = (username, password) => {
    return new  Promise(function(resolve, reject){
        axios.post(address + '/users', {
            username: username,
            password: password
        })
        .then(response => {
            resolve(response.data.success) 

        })
        .catch(error => {
            reject(error)
        })
    })
    
}

export const doLoadInstance = (user_id) => {
    return new  Promise(function(resolve, reject){
        axios.get(address + '/instances/byuser/' + user_id, {})
        .then(response => {
            resolve(response.data.success)

        })
        .catch(error => {
            reject(error)
        })
    })
    
}

export const doAddInstance = (user_id, newInstance) => {
    return new  Promise(function(resolve, reject){
        axios.post(address + '/instances', {
            userid: user_id,
            name: newInstance.name,
            server_url: newInstance.address,
            username: newInstance.username,
            password: newInstance.password,
        })
        .then(response => {
            resolve(response.data.success)

        })
        .catch(error => {
            reject(error)
        })
    })
    
}

export const doDelInstance = (user_id, instance_id) => {
    return new  Promise(function(resolve, reject){
        axios.delete(address + '/instances/' + instance_id, {
        })
        .then(response => {
            resolve(response.data.success)

        })
        .catch(error => {
            reject(error)
        })
    })
    
}

