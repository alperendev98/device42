
export const convertData = (type, data) => {
    let convertedData = []
    const dataArray = data.data
    const instanceArray = data.instances
    for (var k=0; k < dataArray.length; k++) {
        const assets = dataArray[k]
        const instance = instanceArray[k]
        for (var i=0; i < assets.length; i++) {
            let dataItem = assets[i]

            if (type === 'asset') {
                let location = ''
                if (dataItem.ra_name === null && dataItem.r_name === null) {
                    location = ''
                }else if (dataItem.ra_name === null) {
                    location = dataItem.r_name
                }else if (dataItem.r_name === null) {
                    location = dataItem.ra_name
                }else {
                    if (dataItem.b_name === null) {
                        location = dataItem.ra_name + ' (in ' + dataItem.r_name + ' )'
                    }else {
                        location = dataItem.ra_name + ' (in ' + dataItem.r_name + '@ ' + dataItem.b_name + ')'
                    }
                }
    
                let building = '(None)'
                if (dataItem.b_name === null || dataItem.b_name === '') {
                    building = '(None)'
                }else {
                    building = dataItem.b_name
                }
    
                let vender = '(None)'
                if (dataItem.v_name === null || dataItem.v_name === '') {
                    vender = '(None)'
                }else {
                    vender = dataItem.v_name
                }
    
                let objectCategory = 'None'
                if (dataItem.o_name !== null) {
                    objectCategory = dataItem.o_name
                }
    
                convertedData.push([instance, dataItem.asset_pk, dataItem.name, dataItem.service_level_name, 
                    dataItem.t_name, 
                    objectCategory,
                    location,
                    building,
                    dataItem.serial_no, dataItem.asset_no,
                    vender,
                    "None"])
            }else if (type === 'device') {
                let hardware = ''
                if (dataItem.v_name === null && dataItem.h_name === null) {
                    hardware = '(None)'
                }else if (dataItem.v_name === null) {
                    hardware = dataItem.h_name
                }else if (dataItem.h_name === null) {
                    hardware = dataItem.v_name
                }else {
                    hardware = dataItem.h_name + ', ' + dataItem.v_name
                }

                let location = ''
                if (dataItem.ra_name === null && dataItem.r_name === null) {
                    location = ''
                }else if (dataItem.ra_name === null) {
                    location = dataItem.r_name
                }else if (dataItem.r_name === null) {
                    location = dataItem.ra_name
                }else {
                    location = dataItem.ra_name + ' - ' + dataItem.r_name
                }

                let customer = dataItem.c_name === null ? '(None)' : dataItem.c_name

                let in_service = dataItem.in_service ? 'true' : 'false'
                convertedData.push([instance, dataItem.name, dataItem.type, dataItem.service_level, in_service, dataItem.asset_no, dataItem.serial_no,
                    location,  hardware, dataItem.o_name, customer])
            }
            
        }
    }
    
    return convertedData
}