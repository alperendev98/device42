
import config from 'config';
export const getColumnByType = (type) => {
    let result = config.menus.map((menu, key) => {
		if (menu.submenus) {
			return menu.submenus.map((submenu, key) => {

				if (submenu.child_routes) {
					return submenu.child_routes.map((child_route) => {
						if (child_route.path === ('/app/dashboard/data/' + type)) {
							return child_route.column
						}else {
							return null
						}	
					}).filter((e) => (
						e !== undefined && e !== null
					))[0]	
				}else {
					if (submenu.path === ('/app/dashboard/data/' + type)) {
						return submenu.column
					}else {
						return null
					}
				}
			}).filter((e) => (
				e !== undefined && e !== null
			))[0]
		}else {
			return null
		}
	}).filter((e) => (
		e !== undefined && e !== null
	))[0]

	console.log(result)
	return result
}

export const getDoql = (type) => {
    let result = config.menus.map((menu) => {
		if (menu.submenus) {
			return menu.submenus.map((submenu) => {
				if (submenu.child_routes) {
					return  submenu.child_routes.map((child_route) => {
						let path = '/app/dashboard/data/' + type
						
						if (child_route.path === path) {
							return child_route.doql
						}else {
							return 'noql'
						}	
					})
				}else {
					let path = '/app/dashboard/data/' + type
					
					if (submenu.path === path) {
						return submenu.doql
					}else {
						return 'noql'
					}
				}
				
			})
		}else {
			return 'noql'
		}
	})

	var result1 = String(result)
	result1 = result1.split("noql,").join("")
	result1 =result1.split(",noql").join("")
	return result1
}