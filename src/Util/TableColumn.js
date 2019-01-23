export const getColumnByType = (type) => {
    if (type === 'asset') {
        return [ 
			{
				name: 'Instance',
				options: {
					display: false
				}
			},
			{
				name: "ID",
				options: {
					filter: false
				}
			},
			{
				name: "Name",
				options: {
					filter: false
				}
			}, 
			"Service Level", "Type", 
			{
				name: 'Object Category',
				options: {
					display: false
				}
			},
			{
				name: "Location",
				options: {
					filter: false
				}
			},
			"Building", 
			{
				name: "Serial #",
				options: {
					filter: false
				}
			},
			{
				name: "Asset #",
				options: {
					filter: false
				}
			},
			{
				name: "Vender",
				options: {
					filter: false
				}
			},
			{
				name: "Image",
				options: {
					filter: false
				}
			},
		];
    }else if (type === 'device') {
        return [ 
			{
				name: 'Instance',
				options: {
					display: false
				}
			},
			{
				name: "Name",
				options: {
					filter: false
				}
			}, 
			"Type", "Service Level", "In Service", 
			{
				name: "Asset #",
				options: {
					filter: false
				}
			},
			"Serial #", "Location", "Hardware", "OS", "Customer"];
    }
}