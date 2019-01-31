export default {
    // username : "admin",
    // password : "adm!nd42",
    // instances: [
    //     "http://151.181.77.119", 
    //     "http://151.181.77.121"
    // ],

    menus: [
        {
            icon: "zmdi zmdi-view-dashboard",
            title: "dashboard.DataCenter",
            submenus: null
        },
        {
            icon: "zmdi zmdi-devices",
            title: "dashboard.Devices",
            submenus: [
                {
                    title: "dashboard.allDevices",
                    icon: "zmdi zmdi-devices",
                    path: "/app/dashboard/data/device",
                    child_routes: null,
                    doql: "select d.name, d.type, d.service_level, d.in_service, d.asset_no, d.serial_no, CONCAT(ra.name, r.name, b.name) as location, CONCAT(h.name, ', ', v.name) as hardware, o.name as o_name, c.name as c_name from view_device_v1 d left join view_hardware_v1 h on h.hardware_pk = d.hardware_fk left join view_vendor_v1 v on v.vendor_pk = h.vendor_fk left join view_building_v1 b on d.calculated_building_fk = b.building_pk left join view_room_v1 r on d.calculated_room_fk = r.room_pk left join view_os_v1 o on o.os_pk = d.os_fk left join view_customer_v1 c on c.customer_pk = d.customer_fk left join view_rack_v1 ra on ra.rack_pk = d.calculated_rack_fk order by d.name",
                    column : [ 
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
                        "Serial #", "Location", "Hardware", "OS", "Customer"]
                },
                {
                    title: "dashboard.Assets",
                    path: "",
                    child_routes: [
                        {
                            title: "dashboard.Assets",
                            path: "/app/dashboard/data/asset",
                            doql: "select a.asset_pk, a.name, a.service_level_name, t.name as t_name, o.name as o_name, CONCAT(ra.name, r.name, b.name) as location,  b.name as b_name, a.serial_no, a.asset_no,  v.name as v_name from view_asset_v1 a left join view_assettype_v1 t on a.assettype_fk = t.assettype_pk left join view_vendor_v1 v on v.vendor_pk = a.vendor_fk left join view_building_v1 b on a.calculated_building_fk = b.building_pk  left join view_room_v1 r on a.calculated_room_fk = r.room_pk left join view_rack_v1 ra on ra.rack_pk = a.calculated_rack_fk left join view_objectcategory_v1 o on a.objectcategory_fk = o.objectcategory_pk order by a.asset_pk",
                            column: [
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
                            ]
                        }
                        
                    ]
                }
            ]
        },
        {
            icon: "zmdi zmdi zmdi-wifi-alt",
            title: "dashboard.Network",
            submenus: null
        },
    ]
    
    
}