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
            submenus: [
                {//building
                    title: "dashboard.Buildings",
                    
                    path: "/app/dashboard/data/building",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.address, '' as image, b.contact_name, b.contact_phone, b.notes, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Address",
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
                        {
                            name: "Contact Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Contact Phone",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Notes",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//room
                    title: "dashboard.Rooms",                    
                    path: "/app/dashboard/data/room",
                    child_routes: null,
                    doql: "select r.room_pk, r.name, 'Show' as layout, b.name as b_name, '' as available_us, r.notes, r.tags from view_room_v1 r left join view_building_v1 b on r.building_fk = b.building_pk order by r.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Layout",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Building",
                            options: {
                                filter: true
                            }
                        },
                        {
                            name: "Available Us",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Notes",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//rack // no key building, device, available, layout
                    title: "dashboard.Racks",
                    path: "/app/dashboard/data/rack",
                    child_routes: null,
                    doql: "select r.rack_pk, r.name, 'Show' as layout, r.size, v.name as manufacturer, r.row, ro.name as ro_name, '' as b_name, '' as devices, '' as available_us, r.notes, r.tags from view_rack_v1 r left join view_vendor_v1 v on r.vendor_fk = v.vendor_pk left join view_room_v1 ro on r.room_fk = ro.room_pk order by r.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Layout",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Size",
                            options: {
                                filter: true
                            }
                        },
                        {
                            name: "Manufacturer",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Row",
                            options: {
                                filter: true
                            }
                        },
                        {
                            name: "Room",
                            options: {
                                filter: true
                            }
                        },
                        {
                            name: "Building",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "# Devices",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Available Us",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Note",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        },
                    ]
                },
                {
                    title: "dashboard.Power_units",
                    child_routes: [
                        {//Power_units //no fields vender, ismornitoring, discovery, bootstrap, power_draw
                            title: "dashboard.Power_units",
                            path: "/app/dashboard/data/pdu",
                            doql: "select p.pdu_pk, p.name, '' as v_name, pm.name as pm_name, p.type, d.serial_no, d.asset_no, '' as is_monitoring, COALESCE(ra.name, CONCAT(p.orientation, ' rack:', ra.name, ' - ', r.name)) as location, CONCAT(r.name, ' @ ', b.name ) as r_name, '' as discovery, '' as bootstrap, p.rated_power, '' as power_draw, p.tags from view_pdu_v1 p left join view_building_v1 b on p.calculated_building_fk = b.building_pk  left join view_room_v1 r on p.calculated_room_fk = r.room_pk left join view_rack_v1 ra on ra.rack_pk = p.rack_fk left join view_pdumodel_v1 pm on pm.pdumodel_pk = p.pdumodel_fk left join view_device_v1 d on d.device_pk = p.device_fk order by p.name",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "ID",
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "Name",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: 'Vender',
                                    options: {
                                        display: false,
                                        filter: true
                                    }
                                },
                                {
                                    name: 'Power Unit Model',
                                    options: {
                                        filter: true
                                    }
                                },
                                {
                                    name: "Type",
                                    options: {
                                        filter: true
                                    }
                                },
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
                                    name: "Is monitoring enabled",
                                    options: {
                                        filter: true
                                    }
                                },
                                {
                                    name: "Location",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Room",
                                    options: {
                                        filter: true
                                    }
                                },
                                {
                                    name: "Discovery Job",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Bootstrap Power",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Rated Power",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Power Draw",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Tags",
                                    options: {
                                        display: false,
                                        filter: true
                                    }
                                },
                            ]
                        },
                        {//Power_unit_models // ports, front back image
                            title: "dashboard.Power_unit_models",
                            path: "/app/dashboard/data/pdu_model",
                            doql: "select pm.pdumodel_pk, pm.name, pm.type, pm.size, pm.description, '' as ports, '' as front_image, '' as back_image, v.name as v_name from view_pdumodel_v1 pm left join view_vendor_v1 v on v.vendor_pk = pm.vendor_fk order by pm.name",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "ID",
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "Name",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: 'Type',
                                    options: {
                                        filter: true
                                    }
                                },
                                {
                                    name: 'Size',
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Description",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Ports",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Front Image",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Back Image",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Vendor",
                                    options: {
                                        filter: true
                                    }
                                },
                            ]
                        }
                        
                    ]
                },
                {//vender GOOD
                    title: "dashboard.Venders",                    
                    path: "/app/dashboard/data/organisation",
                    child_routes: null,
                    doql: "select v.vendor_pk, v.name, v.account_no, v.home_page, v.contact_info, v.escalation_1, v.escalation_2, v.notes, v.tags from view_vendor_v1 v order by v.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Account #",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Home Page",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Contact Info",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Escalation 1",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Escalation 2",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Note",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        },
                    ]
                },
                {//Hardware Model - front, back image
                    title: "dashboard.Hardware_Models",                    
                    path: "/app/dashboard/data/hardware",
                    child_routes: null,
                    doql: "select h.hardware_pk, h.name, h.hardware_type, h.size, h.depth, coalesce(h.blade_size, '(None)') as blade_size, h.watts, '' as front_image, '' as back_image, h.part_number, v.name as v_name, h.width_ratio, h.is_it_blade_host from view_hardware_v1 h left join view_vendor_v1 v on v.vendor_pk = h.vendor_fk order by h.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Type",
                            options: {
                                filter: true
                            }
                        },
                        {
                            name: "Size",
                            options: {
                                filter: true
                            }
                        },
                        {
                            name: "Depth",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Blade Size",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "PSU(W)",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Front Image",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Back Image",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Part #",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Vender",
                            options: {
                                filter: true
                            }
                        },
                        {
                            name: "Width Ratio",
                            options: {
                                display: false,
                                filter: true
                            }
                        },
                        {
                            name: "Blade Chassis?",
                            options: {
                                display: false,
                                filter: true
                            }
                        },
                    ]
                },
                {//part
                    title: "dashboard.Parts",
                    path: "",
                    child_routes: [
                        {//Model list //total_count, storage_room, port_count
                            title: "dashboard.Model_list",
                            path: "/app/dashboard/data/partmodel",
                            doql: "select pm.partmodel_pk, pm.type_name, pm.name, pm.modelno, pm.partno, coalesce(v.name, '(None)') as vname, '' as total_count, '' as storage_room, pm.location, '' as port_count, pm.tags from view_partmodel_v1 pm left join view_vendor_v1 v on v.vendor_pk = pm.vendor_fk order by pm.name",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "ID",
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "Type",
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
                                {
                                    name: 'Model #',
                                    options: {
                                        filter: true
                                    }
                                },
                                {
                                    name: 'Part #',
                                    options: {
                                        filter: true
                                    }
                                },
                                {
                                    name: "Manufacturer",
                                    options: {
                                        filter: true
                                    }
                                },
                                {
                                    name: "Total Count",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "In Storage Rooms",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Location",
                                    options: {
                                        filter: true
                                    }
                                },
                                {
                                    name: "Port Count",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Tags",
                                    options: {
                                        display: false,
                                        filter: true
                                    }
                                },
                            ]
                        },
                        {//part list
                            title: "dashboard.Parts_list",
                            path: "/app/dashboard/data/part",
                            doql: "select p.part_pk, concat(pm.type_name, ' ', pm.name, ', ', pm.modelno) as pm_name, p.pcount, p.serial_no, p.checked_out_to,  CONCAT(ra.name, r.name) as location, '' as v_name, r.name as r_name, ra.name as ra_name, p.tags, '' as cust_override from view_part_v1 p left join view_partmodel_v1 pm on pm.partmodel_pk = p.partmodel_fk left join view_room_v1 r on p.room_fk = r.room_pk left join view_rack_v1 ra on ra.rack_pk = p.rack_fk order by pm_name",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "ID",
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "Part Model",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: 'Count',
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: 'Serial #',
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Assignment",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Location",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Vendor",
                                    options: {
                                        filter: true,
                                        display: false,
                                    }
                                },
                                {
                                    name: "Room",
                                    options: {
                                        filter: true,
                                        display: false,
                                    }
                                },
                                {
                                    name: "Rack",
                                    options: {
                                        filter: true,
                                        display: false,
                                    }
                                },
                                {
                                    name: "Tags",
                                    options: {
                                        filter: true,
                                        display: false,
                                    }
                                },
                                {
                                    name: "cust_override",
                                    options: {
                                        filter: true,
                                        display: false,
                                    }
                                },
                            ]
                        }
                        
                    ]
                },
                {//Customers/Departments
                    title: "dashboard.Customers_Departments",                    
                    path: "/app/dashboard/data/customer",
                    child_routes: null,
                    doql: "select c.customer_pk, c.name, c.manager, c.type, c.contact_info, c.notes, c.tags, '' as  cust_override from view_customer_v1 c order by c.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Manager",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Type",
                            options: {
                                filter: true
                            }
                        },
                        {
                            name: "Contact Info",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Notes",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                filter: true,
                                display: false,
                            }
                        },
                        {
                            name: "cust_override",
                            options: {
                                filter: true,
                                display: false,
                            }
                        },
                    ]
                },
                {//End Users GOOD
                    title: "dashboard.End_Users",                    
                    path: "/app/dashboard/data/endusers",
                    child_routes: null,
                    doql: "select e.enduser_pk, e.name, e.email, e.contact, e.location, e.notes, TO_CHAR(e.last_updated, 'Mon. dd, yyyy, hh:mm am TZ') as last_updated, e.tags, '' as  cust_override from view_enduser_v1 e order by e.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Email",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Contact Info",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Location",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Notes",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Last updated",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                filter: true,
                                display: false,
                            }
                        },
                        {
                            name: "cust_override",
                            options: {
                                filter: true,
                                display: false,
                            }
                        },
                    ]
                },
                {//Purchases
                    title: "dashboard.Purchases",                    
                    path: "/app/dashboard/data/purchase",
                    child_routes: null,
                    doql: "select p.purchase_pk, p.order_no, TO_CHAR(p.po_date, 'Mon. dd, yyyy') as po_date, p.cost, p.completed, v.name as v_name, b.name as b_name, p.tags, '' as  cust_override from view_purchase_v1 p left join view_vendor_v1 v on v.vendor_pk = p.vendor_fk left join view_building_v1 b on p.building_fk = b.building_pk order by p.order_no",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Order Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "PO date",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Total cost for non-recurring line items",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Order Completed",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Vender",
                            options: {
                                filter: false,
                            }
                        },
                        {
                            name: "Building",
                            options: {
                                filter: false,
                                display: false,
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                filter: true,
                                display: false,
                            }
                        },
                        {
                            name: "cust_override",
                            options: {
                                filter: true,
                                display: false,
                            }
                        },
                    ]
                },
                {//Cables // origin, end point
                    title: "dashboard.Cables",                    
                    path: "/app/dashboard/data/cable",
                    child_routes: null,
                    doql: "select c.cable_pk, c.cable_id, c.origin_type, '' as origin, c.end_type, '' as end, coalesce(v.name, '(None)') as v_name,  c.tags, '' as  cust_override from view_cable_v1 c left join view_vendor_v1 v on v.vendor_pk = c.vendor_fk order by c.cable_pk",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Cable Label",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Origin Type",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Origin",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "End Point Type",
                            options: {
                                filter: false,
                            }
                        },
                        {
                            name: "End Point",
                            options: {
                                filter: false,
                            }
                        },
                        {
                            name: "Vendor",
                            options: {
                                filter: true,
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                filter: true,
                                display: false,
                            }
                        },
                        {
                            name: "cust_override",
                            options: {
                                filter: true,
                                display: false,
                            }
                        },
                    ]
                },
                {//Telco Circuits
                    title: "dashboard.Telco_Circuits",                    
                    path: "/app/dashboard/data/circuit",
                    child_routes: null,
                    doql: "select tc.telcocircuit_pk, tc.circuit_id, tc.type_name, tc.status, tc.origin_type, '' as ov_name, tc.end_point_type, '' as endpoint, coalesce(v.name, '(None)') as v_name, coalesce(c.name, '(None)') as c_name, '' as location, tc.tags, '' as  cust_override from view_telcocircuit_v1 tc left join view_vendor_v1 v on v.vendor_pk = tc.vendor_fk left join view_customer_v1 c on c.customer_pk = tc.customer_fk order by tc.telcocircuit_pk",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Circuit ID",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Type",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Status",
                            options: {
                                filter: true
                            }
                        },
                        {
                            name: "Origin Type",
                            options: {
                                fllter: false,
                            }
                        },
                        {
                            name: "Origin",
                            options: {
                                filter: false,
                            }
                        },
                        {
                            name: "End Point Type",
                            options: {
                                filter: false,
                            }
                        },
                        {
                            name: "End Point",
                            options: {
                                filter: false,
                            }
                        },
                        {
                            name: "Vendor",
                            options: {
                                filter: true,
                            }
                        },
                        {
                            name: "Customer",
                            options: {
                                filter: false,
                            }
                        },
                        {
                            name: "Location",
                            options: {
                                filter: false,
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                filter: true,
                                display: false,
                            }
                        },
                        {
                            name: "cust_override",
                            options: {
                                filter: true,
                                display: false,
                            }
                        },
                    ]
                },
                {//Power Circuits   //table not found
                    title: "dashboard.Power_Circuits",                    
                    path: "/app/dashboard/data/power_circuit",
                    child_routes: null,
                },
                {//UCS Service Profiles table not found
                    title: "dashboard.UCS_Service_Profiles",                    
                    path: "/app/dashboard/data/device_service_profile",
                    child_routes: null,
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "DN",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "UCSManager",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Device",
                            options: {
                                filter: false,
                            }
                        },
                    ]
                },
                {//Object Categories // GOOD
                    title: "dashboard.Object_Categories",                    
                    path: "/app/dashboard/data/devicecategory",
                    child_routes: null,
                    doql: "select o.objectcategory_pk, o.name, o.description from view_objectcategory_v1 o order by o.objectcategory_pk",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false,
                            }
                        },
                        {
                            name: "Description",
                            options: {
                                filter: false,
                            }
                        },
                    ]
                },
                {//Building Hierarchy //BAD
                    title: "dashboard.Building_Hierarchy",                    
                    path: "/app/dashboard/data/devicetree",
                    child_routes: null,
                    doql: "select tc.telcocircuit_pk from view_telcocircuit_v1 tc order by tc.telcocircuit_pk",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                    ]
                },
                {//Tags
                    title: "dashboard.Tags", //GOOD                    
                    path: "/app/dashboard/data/tag",
                    child_routes: null,
                    doql: "select t.taggeditem_pk, t.name, t.slug, t.type from view_taggeditem_v1 t order by t.taggeditem_pk",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false,
                            }
                        },
                        {
                            name: "Slug",
                            options: {
                                filter: false,
                            }
                        },
                        {
                            name: "Content Type(s)",
                            options: {
                                filter: false,
                            }
                        },
                    ]
                },
            ]
        },
        {
            icon: "zmdi zmdi-devices",
            title: "dashboard.Devices",
            submenus: [
                {//allDevices //GOOD
                    title: "dashboard.allDevices",                    
                    path: "/app/dashboard/data/device",
                    child_routes: null,
                    doql: "select d.device_pk ,d.name, d.type, d.service_level, d.in_service, d.asset_no, d.serial_no, CONCAT(ra.name, r.name, b.name) as location, CONCAT(h.name, ', ', v.name) as hardware, o.name as o_name, c.name as c_name from view_device_v1 d left join view_hardware_v1 h on h.hardware_pk = d.hardware_fk left join view_vendor_v1 v on v.vendor_pk = h.vendor_fk left join view_building_v1 b on d.calculated_building_fk = b.building_pk left join view_os_v1 o on o.os_pk = d.os_fk left join view_customer_v1 c on c.customer_pk = d.customer_fk left join view_room_v1 r on d.calculated_room_fk = r.room_pk left join view_rack_v1 ra on ra.rack_pk = d.calculated_rack_fk order by d.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
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
                {//Physical Devices //GOOD
                    title: "dashboard.Physical_Devices",                    
                    path: "/app/dashboard/data/device_physical",
                    child_routes: null,
                    doql: "select d.device_pk ,d.name, d.service_level, d.in_service, d.asset_no, d.serial_no, CONCAT(ra.name, r.name, b.name) as location, CONCAT(h.name, ', ', v.name) as hardware, o.name as o_name, c.name as c_name from view_device_v1 d left join view_hardware_v1 h on h.hardware_pk = d.hardware_fk left join view_vendor_v1 v on v.vendor_pk = h.vendor_fk left join view_building_v1 b on d.calculated_building_fk = b.building_pk left join view_os_v1 o on o.os_pk = d.os_fk left join view_customer_v1 c on c.customer_pk = d.customer_fk left join view_room_v1 r on d.calculated_room_fk = r.room_pk left join view_rack_v1 ra on ra.rack_pk = d.calculated_rack_fk where d.type = 'physical' order by d.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        }, 
                        "Service Level", "In Service", 
                        {
                            name: "Asset #",
                            options: {
                                filter: false
                            }
                        },
                        "Serial #", "Location", "Hardware", "OS", "Customer"]
                },
                {//Virtual Devices //GOOD
                    title: "dashboard.Virtual_Devices",                    
                    path: "/app/dashboard/data/device_virtual",
                    child_routes: null,
                    doql: "select d.device_pk ,d.name, d.service_level, d.in_service, d.asset_no, d.serial_no, CONCAT(ra.name, r.name, b.name) as location, CONCAT(h.name, ', ', v.name) as hardware, o.name as o_name, c.name as c_name from view_device_v1 d left join view_hardware_v1 h on h.hardware_pk = d.hardware_fk left join view_vendor_v1 v on v.vendor_pk = h.vendor_fk left join view_building_v1 b on d.calculated_building_fk = b.building_pk left join view_os_v1 o on o.os_pk = d.os_fk left join view_customer_v1 c on c.customer_pk = d.customer_fk left join view_room_v1 r on d.calculated_room_fk = r.room_pk left join view_rack_v1 ra on ra.rack_pk = d.calculated_rack_fk where d.type = 'virtual' order by d.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        }, 
                        "Service Level", "In Service", 
                        {
                            name: "Asset #",
                            options: {
                                filter: false
                            }
                        },
                        "Serial #", "Location", "Hardware", "OS", "Customer"]
                },
                {//Blade Devices //GOOD
                    title: "dashboard.Blade_Devices",                    
                    path: "/app/dashboard/data/device_blade",
                    child_routes: null,
                    doql: "select d.device_pk ,d.name, d.service_level, d.in_service, d.asset_no, d.serial_no, CONCAT(ra.name, r.name, b.name) as location, CONCAT(h.name, ', ', v.name) as hardware, o.name as o_name, c.name as c_name from view_device_v1 d left join view_hardware_v1 h on h.hardware_pk = d.hardware_fk left join view_vendor_v1 v on v.vendor_pk = h.vendor_fk left join view_building_v1 b on d.calculated_building_fk = b.building_pk left join view_os_v1 o on o.os_pk = d.os_fk left join view_customer_v1 c on c.customer_pk = d.customer_fk left join view_room_v1 r on d.calculated_room_fk = r.room_pk left join view_rack_v1 ra on ra.rack_pk = d.calculated_rack_fk where d.type = 'blade' order by d.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        }, 
                        "Service Level", "In Service", 
                        {
                            name: "Asset #",
                            options: {
                                filter: false
                            }
                        },
                        "Serial #", "Location", "Hardware", "OS", "Customer"]
                },
                {//Cluster Devices //GOOD
                    title: "dashboard.Cluster_Devices",                    
                    path: "/app/dashboard/data/device_cluster",
                    child_routes: null,
                    doql: "select d.device_pk ,d.name, d.service_level, d.in_service, d.asset_no, d.serial_no, CONCAT(ra.name, r.name, b.name) as location, CONCAT(h.name, ', ', v.name) as hardware, o.name as o_name, c.name as c_name from view_device_v1 d left join view_hardware_v1 h on h.hardware_pk = d.hardware_fk left join view_vendor_v1 v on v.vendor_pk = h.vendor_fk left join view_building_v1 b on d.calculated_building_fk = b.building_pk left join view_os_v1 o on o.os_pk = d.os_fk left join view_customer_v1 c on c.customer_pk = d.customer_fk left join view_room_v1 r on d.calculated_room_fk = r.room_pk left join view_rack_v1 ra on ra.rack_pk = d.calculated_rack_fk where d.type = 'cluster' order by d.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        }, 
                        "Service Level", "In Service", 
                        {
                            name: "Asset #",
                            options: {
                                filter: false
                            }
                        },
                        "Serial #", "Location", "Hardware", "OS", "Customer"]
                },
                {//Unknown Devices //GOOD
                    title: "dashboard.Unknown_Devices",                    
                    path: "/app/dashboard/data/device_unknown",
                    child_routes: null,
                    doql: "select d.device_pk ,d.name, d.service_level, d.in_service, d.asset_no, d.serial_no, CONCAT(ra.name, r.name, b.name) as location, CONCAT(h.name, ', ', v.name) as hardware, o.name as o_name, c.name as c_name from view_device_v1 d left join view_hardware_v1 h on h.hardware_pk = d.hardware_fk left join view_vendor_v1 v on v.vendor_pk = h.vendor_fk left join view_building_v1 b on d.calculated_building_fk = b.building_pk left join view_os_v1 o on o.os_pk = d.os_fk left join view_customer_v1 c on c.customer_pk = d.customer_fk left join view_room_v1 r on d.calculated_room_fk = r.room_pk left join view_rack_v1 ra on ra.rack_pk = d.calculated_rack_fk where d.type = 'unknown' order by d.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        }, 
                        "Service Level", "In Service", 
                        {
                            name: "Asset #",
                            options: {
                                filter: false
                            }
                        },
                        "Serial #", "Location", "Hardware", "OS", "Customer"]
                },
                {//Other Devices
                    title: "dashboard.Other_Devices",                    
                    path: "/app/dashboard/data/device_other",
                    child_routes: null,
                    doql: "select d.device_pk ,d.name, d.service_level, d.in_service, d.asset_no, d.serial_no, CONCAT(ra.name, r.name, b.name) as location, CONCAT(h.name, ', ', v.name) as hardware, o.name as o_name, c.name as c_name from view_device_v1 d left join view_hardware_v1 h on h.hardware_pk = d.hardware_fk left join view_vendor_v1 v on v.vendor_pk = h.vendor_fk left join view_building_v1 b on d.calculated_building_fk = b.building_pk left join view_os_v1 o on o.os_pk = d.os_fk left join view_customer_v1 c on c.customer_pk = d.customer_fk left join view_room_v1 r on d.calculated_room_fk = r.room_pk left join view_rack_v1 ra on ra.rack_pk = d.calculated_rack_fk where d.type = 'other' order by d.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        }, 
                        "Service Level", "In Service", 
                        {
                            name: "Asset #",
                            options: {
                                filter: false
                            }
                        },
                        "Serial #", "Location", "Hardware", "OS", "Customer"]
                },
                {//Assets
                    title: "dashboard.Assets",
                    path: "",
                    child_routes: [
                        {//Assets
                            title: "dashboard.Assets",
                            path: "/app/dashboard/data/asset",
                            doql: "select a.asset_pk, a.name, a.service_level_name, t.name as t_name, o.name as o_name, CONCAT(ra.name, r.name, b.name) as location,  b.name as b_name, a.serial_no, a.asset_no,  v.name as v_name from view_asset_v1 a left join view_assettype_v1 t on a.assettype_fk = t.assettype_pk left join view_vendor_v1 v on v.vendor_pk = a.vendor_fk left join view_building_v1 b on a.calculated_building_fk = b.building_pk  left join view_room_v1 r on a.calculated_room_fk = r.room_pk left join view_rack_v1 ra on ra.rack_pk = a.calculated_rack_fk left join view_objectcategory_v1 o on a.objectcategory_fk = o.objectcategory_pk order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                        },
                        {//Racked Asset Templates // BAD
                            title: "dashboard.Racked_Asset_Templates",
                            path: "/app/dashboard/data/rackassettemplate",
                            doql: "select a.asset_pk, a.name, a.service_level_name, t.name as t_name, o.name as o_name, CONCAT(ra.name, r.name, b.name) as location,  b.name as b_name, a.serial_no, a.asset_no,  v.name as v_name from view_asset_v1 a left join view_assettype_v1 t on a.assettype_fk = t.assettype_pk left join view_vendor_v1 v on v.vendor_pk = a.vendor_fk left join view_building_v1 b on a.calculated_building_fk = b.building_pk  left join view_room_v1 r on a.calculated_room_fk = r.room_pk left join view_rack_v1 ra on ra.rack_pk = a.calculated_rack_fk left join view_objectcategory_v1 o on a.objectcategory_fk = o.objectcategory_pk order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                        },
                        {//Patch Panel Models // GOOD
                            title: "dashboard.Patch_Panel_Models",
                            path: "/app/dashboard/data/patch_panel_model",
                            doql: "select a.patchpanelmodel_pk, a.name, a.type, a.port_type_name, v.name as v_name, '' as image, a.number_of_ports from view_patchpanelmodel_v1 a left join view_vendor_v1 v on v.vendor_pk = a.vendor_fk  order by a.patchpanelmodel_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                                "Type", 
                                {
                                    name: 'Port Type',
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Manufacturer",
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
                                {
                                    name: "Number of ports",
                                    options: {
                                        filter: false
                                    }
                                },
                            ]
                        },
                        {//Patch Panel Module Models // GOOD
                            title: "dashboard.Patch_Panel_Module_Models",
                            path: "/app/dashboard/data/patch_panel_module_model",
                            doql: "select a.patchpanelmodulemodel_pk, a.name, a.port_type_name, a.number_of_ports from view_patchpanelmodulemodel_v1 a order by a.patchpanelmodulemodel_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                                "Port Type",
                                {
                                    name: 'Number of ports',
                                    options: {
                                        filter: false
                                    }
                                },
                            ]
                        },
                        {//TAP Module Models GOOD
                            title: "dashboard.TAP_Module_Models",
                            path: "/app/dashboard/data/tap_module_model",
                            doql: "select a.portsintapmodulemodel_pk, a.model_name from view_portsintapmodulemodel_v1 a order by a.portsintapmodulemodel_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        }
                        
                    ]
                },
                {//Mobile View 
                    title: "dashboard.Mobile_View",
                    path: "",
                    child_routes: [
                        {//Asset // NEED TEST - 
                            title: "dashboard.Asset",
                            path: "/app/dashboard/data/asset_mobile_view",
                            doql: "select a.asset_pk, a.name, t.name as t_name, a.serial_no, a.asset_no from view_asset_v1 a left join view_assettype_v1 t on a.assettype_fk = t.assettype_pk order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                                {
                                    name: "Type",
                                    options: {
                                        filter: false
                                    }
                                },
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
                            ]
                        },
                        {//Device //GOOD
                            title: "dashboard.Device",
                            path: "/app/dashboard/data/device_mobile_view",
                            doql: "select d.device_pk ,d.name, d.asset_no, d.serial_no from view_device_v1 d order by d.name",
                            column : [ 
                                {
                                    name: 'Tenant',
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "ID",
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "Name",
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
                                    name: "Serial #",
                                    options: {
                                        filter: false
                                    }
                                }
                            ]
                        },
                        {//Rack //GOOD
                            title: "dashboard.Rack",
                            path: "/app/dashboard/data/rack_mobile_view",
                            doql: "select a.rack_pk, a.name,  '' as front, '' as back, a.row, r.name as r_name from view_rack_v1 a  left join view_room_v1 r on a.room_fk = r.room_pk  order by a.name",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                                {
                                    name: "Front",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Back",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Row",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Room",
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
            submenus: [
                {//IP Addresses // NOT - DNS
                    title: "dashboard.IP_Addresses",                    
                    path: "/app/dashboard/data/ip_address",
                    child_routes: null,
                    doql: "select b.ipaddress_pk, b.ip_address, b.label, b.type, b.available, s.name as s_name, d.name as d_name, n.port as n_port, '' as dns, TO_CHAR(b.last_changed, 'Mon. dd, yyyy, hh:mm am') as last_changed, b.tags from view_ipaddress_v1 b left join view_subnet_v1 s on b.subnet_fk = s.subnet_pk left join view_device_v1 d on b.device_fk = d.device_pk left join view_netport_v1 n on b.netport_fk = n.netport_pk order by b.ip_address",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "IP Address",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Label",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Type",
                            options: {
                                filter: true
                            }
                        },
                        {
                            name: "Available",
                            options: {
                                filter: true
                            }
                        },
                        {
                            name: "Subnet",
                            options: {
                                filter: true
                            }
                        },
                        {
                            name: "Device",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Port",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "DNS Records",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Last updated",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//VLAN // NOT - Switches
                    title: "dashboard.VLAN",                    
                    path: "/app/dashboard/data/switch_vlan",
                    child_routes: null,
                    doql: "select b.vlan_pk, b.number, b.name, b.description, '' as switches, b.notes, TO_CHAR(b.last_edited, 'Mon. dd, yyyy, hh:mm am') as last_edited, b.tags from view_vlan_v1 b order by b.vlan_pk",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Number",
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
                        {
                            name: "Description",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Switches",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Notes",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Last updated",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//VRF Group NOT - building
                    title: "dashboard.VRF_Group",                    
                    path: "/app/dashboard/data/vrfgroup",
                    child_routes: null,
                    doql: "select b.vrfgroup_pk, b.name, b.is_it_default, '' as building, b.description, b.tags from view_vrfgroup_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Default",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Buildings",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Description",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Subnet Categories NOT found table
                    title: "dashboard.Subnet_Categories",                    
                    path: "/app/dashboard/data/subnetcategory",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Subnet
                    title: "dashboard.Subnet",                    
                    path: "/app/dashboard/data/vlan",
                    child_routes: null,
                    doql: "select b.subnet_pk, b.network, b.mask_bits, b.name, v.name as v_name, b.catgeory_name, '' as used, b.service_level, b.type, b.gateway, b.range_begin, b.range_end, b.assigned, b.allocated, b.tags from view_subnet_v1 b left join view_vrfgroup_v1 v on v.vrfgroup_pk = b.vrfgroup_fk order by b.network",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Network",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Mask Bits",
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
                        {
                            name: "VRF Group",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Category",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "% Used",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Service Level",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Type",
                            options: {
                                filter: true
                            }
                        },
                        {
                            name: "Gateway",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Range Begin",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Range End",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Assigned",
                            options: {
                                filter: true
                            }
                        },
                        {
                            name: "Allocated",
                            options: {
                                filter: true
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Subnet Tree // This is not table view
                    title: "dashboard.Subnet_Tree",                    
                    path: "/app/dashboard/data/subnettree",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Ports NOT vanid, connectivity
                    title: "dashboard.Ports",                    
                    path: "/app/dashboard/data/netport",
                    child_routes: null,
                    doql: "select b.netport_pk, b.port, b.hwaddress, b.description, b.type_name, b.discovered_type, b.up, '' as van_id, d.name as d_name, '' as connectivity, TO_CHAR(b.last_edited, 'Mon. dd, yyyy, hh:mm am') as last_edited,  b.tags from view_netport_v1 b left join view_device_v1 d on d.device_pk = b.device_fk order by b.port",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Port",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "HWAddress",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Description",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Type",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Discovered type",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Up",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "VLAN IDs",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Device",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Connectivity",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Last updated",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//DNS Zones GOOD
                    title: "dashboard.DNS_Zones",                    
                    path: "/app/dashboard/data/dns_zone",
                    child_routes: null,
                    doql: "select b.dnszone_pk, b.name, b.nameserver, b.tags from view_dnszone_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Zone Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Nameserver",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//DNS Records GOOD
                    title: "dashboard.DNS_Records",                    
                    path: "/app/dashboard/data/dns_records",
                    child_routes: null,
                    doql: "select b.dnsrecords_pk, b.name, dns.nameserver as dns_nameserver, dns.name as dns_name, b.content, b.type, b.ttl, b.prio, b.tags from view_dnsrecords_v1 b left join view_dnszone_v1 dns on dns.dnszone_pk = b.dnszone_fk order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Nameserver",
                            options: {
                                filter: true,
                                display: false,
                            }
                        },
                        {
                            name: "DNS Zone",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Content",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Type",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "TTL",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Prio",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//IP NAT Table not found
                    title: "dashboard.IP_NAT",                    
                    path: "/app/dashboard/data/natip",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },

            ]
        },
        {//apps
            icon: "zmdi zmdi zmdi-wifi-alt",
            title: "dashboard.Apps",
            submenus: [
                {//Software
                    title: "dashboard.Software",
                    path: "",
                    child_routes: [
                        {//Software License Models
                            title: "dashboard.Software_License_Models",
                            path: "/app/dashboard/data/software_licensing_model",
                            doql: "select a.softwarelicensemodel_pk, a.name, a.track_by, a.license_type from view_softwarelicensemodel_v1 a order by a.name",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                                {
                                    name: "Track by",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "License Type",
                                    options: {
                                        filter: false
                                    }
                                },
                            ]
                        },
                        {//Software Components (not sure)
                            title: "dashboard.Software_Components",
                            path: "/app/dashboard/data/software",
                            doql: "select a.software_pk, a.name, a.software_type, slm.name as slm_name, v.name as v_name, a.category_name, a.licensed_count, a.discovered_count, a.tags from view_software_v1 a left join view_softwarelicensemodel_v1 slm on slm.softwarelicensemodel_pk = a.softwarelicensemodel_fk left join view_vendor_v1 v on v.vendor_pk = a.vendor_fk order by a.name",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                                {
                                    name: "Software Type",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "License Model",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "Vendor",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "Category",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "License Count",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Discovered Count",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Tags",
                                    options: {
                                        display: false,
                                        filter: true
                                    }
                                }

                            ]
                        },
                        {//Software In Use
                            title: "dashboard.Software_In_Use",
                            path: "/app/dashboard/data/software_detail",
                            doql: "select a.softwareinuse_pk, s.name as s_name, a.version, TO_CHAR(a.install_date, 'Mon. dd, yyyy hh:mm am') as install_date, d.name as d_name, u.name as u_name, TO_CHAR(a.first_detected, 'Mon. dd, yyyy hh:mm am') as first_detected, TO_CHAR(a.last_updated, 'Mon. dd, yyyy hh:mm am') as last_updated, '' as endlife, '' as endsupport from view_softwareinuse_v1 a left join view_device_v1 d on d.device_pk = a.device_fk left join view_enduser_v1 u on u.enduser_pk = a.enduser_fk left join view_software_v1 s on s.software_pk = a.software_fk order by a.component_name",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                                        filter: true
                                    }
                                }, 
                                {
                                    name: "Version",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "Install Date",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "Device",
                                    options: {
                                        filter: true
                                    }
                                }, 
                                {
                                    name: "User",
                                    options: {
                                        filter: true
                                    }
                                }, 
                                {
                                    name: "First Detected",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "Last updated",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "End of life",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "End of support",
                                    options: {
                                        filter: false
                                    }
                                }, 
                            ]
                        },
                        {//EOL / EOS (GGOD)
                            title: "dashboard.EOL__EOS",
                            path: "/app/dashboard/data/softwareeol",
                            doql: "select a.softwareeoleos_pk, s.name as s_name, a.version, TO_CHAR(a.eol, 'Mon. dd, yyyy hh:mm am') as eol, TO_CHAR(a.eos, 'Mon. dd, yyyy hh:mm am') as eos from view_softwareeoleos_v1 a left join view_software_v1 s on s.software_pk = a.software_fk order by s_name",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "ID",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Software",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Version",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "End of Life Date",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "End of Service Date",
                                    options: {
                                        filter: false
                                    }
                                }, 
                            ]
                        },
                    ]
                },
                {//Services
                    title: "dashboard.Services",
                    path: "",
                    child_routes: [
                        {//Services Not
                            title: "dashboard.Services",
                            path: "/app/dashboard/data/theservice",
                            doql: "select a.service_pk, a.name, a.service_type, v.name as v_name, a.category_name, '' as pinned, '' as service_instance from view_service_v1 a left join view_vendor_v1 v on v.vendor_pk = a.vendor_fk order by a.name",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "ID",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Service Name",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "Service Type",
                                    options: {
                                        filter: true
                                    }
                                }, 
                                {
                                    name: "Vendor",
                                    options: {
                                        filter: true
                                    }
                                }, 
                                {
                                    name: "Category",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "Pinned",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "Service Instances",
                                    options: {
                                        filter: false
                                    }
                                }, 
                            ]
                        },
                        {//Service Instances (GOOD)
                            title: "dashboard.Service_Instances",
                            path: "/app/dashboard/data/servicedetail",
                            doql: "select a.serviceinstance_pk, s.name as s_name, a.startmode, a.state, d.name as d_name, u.name as u_name, TO_CHAR(a.first_detected, 'Mon. dd, yyyy hh:mm am') as first_detected, TO_CHAR(a.last_updated, 'Mon. dd, yyyy hh:mm am') as last_updated from view_serviceinstance_v1 a left join view_service_v1 s on s.service_pk = a.service_fk left join view_device_v1 d on d.device_pk = a.device_fk left join view_enduser_v1 u on u.enduser_pk = a.enduser_fk order by s_name",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "ID",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Service Name",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "Start Mode",
                                    options: {
                                        filter: true
                                    }
                                }, 
                                {
                                    name: "State",
                                    options: {
                                        filter: true
                                    }
                                }, 
                                {
                                    name: "Device",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "User",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "First Detected",
                                    options: {
                                        filter: false
                                    }
                                }, 
                                {
                                    name: "Last updated",
                                    options: {
                                        filter: false
                                    }
                                }, 
                            ]
                        },
                        {//Service Schedules
                            title: "dashboard.Service_Schedules",
                            path: "/app/dashboard/data/serviceschedule",
                            doql: "select a.serviceschedule_pk, a.caption, '' as d_name, '' as s_instance, a.weeks, a.days, a.hours, a.minutes, a.month_of_year, a.days_of_month, a.day_of_week from view_serviceschedule_v1 a left join view_serviceinstance_v1 s on s.serviceinstance_pk = a.serviceinstance_fk order by a.caption",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "ID",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Caption",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Device",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Service Instance",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Week(s)",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Day(s)",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Hour(s)",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Minute(s)",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Month(s) of Year",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Day(s) of Month",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Day(s) of Week",
                                    options: {
                                        filter: false
                                    }
                                },
                            ]
                        },
                        {//Service Ports (NOT)
                            title: "dashboard.Service_Ports",
                            path: "/app/dashboard/data/serviceport",
                            doql: "select a.serviceport_pk, a.port, d.name as d_name, '' as ignore, TO_CHAR(a.last_updated, 'Mon. dd, yyyy hh:mm am') as last_updated from view_serviceport_v1 a left join view_device_v1 d on d.device_pk = a.device_fk order by a.port",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "ID",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Port",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Device",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Ignore",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Last updated",
                                    options: {
                                        filter: false
                                    }
                                },
                            ]
                        },
                        {//Client Service Port Statistics
                            title: "dashboard.Client_Service_Port_Statistics",
                            path: "/app/dashboard/data/serviceportremoteipstats",
                            doql: "select a.serviceportremoteipstats_pk, a.type, a.total_spans, a.total_ports from view_serviceportremoteipstats_v1 a order by a.serviceportremoteipstats_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "ID",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Type",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Total Span",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Total Port",
                                    options: {
                                        filter: false
                                    }
                                },
                            ]
                        },
                        {//Network Shares
                            title: "dashboard.Network_Shares",
                            path: "/app/dashboard/data/networkshare",
                            doql: "select a.networkshare_pk, a.name, a.path, d.name as d_name from view_networkshare_v1 a left join view_device_v1 d on d.device_pk = a.device_fk order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                                {
                                    name: "Path",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Device",
                                    options: {
                                        filter: false
                                    }
                                },
                            ]
                        },
                    ]
                },
                {//Application Components (NOT)
                    title: "dashboard.Application_Components",                    
                    path: "/app/dashboard/data/appcomp",
                    child_routes: null,
                    doql: "select b.appcomp_pk, b.name, c.name as c_name, d.name as d_name, b.notes, b.tags from view_appcomp_v1 b left join view_customer_v1 c on c.customer_pk = b.customer_fk left join view_device_v1 d on d.device_pk = b.device_fk order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Responsible Customer or Department",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "On Device",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Notes",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Affinity Groups (NOT SURE - NO data)
                    title: "dashboard.Affinity_Groups",                    
                    path: "/app/dashboard/data/affinitygroup",
                    child_routes: null,
                    doql: "select b.affinitygroup_pk, b.name, b.report_type_name, b.primary_device_name, b.tags from view_affinitygroup_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Report Type",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Device",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Operating Systems
                    title: "dashboard.Operating_Systems",
                    path: "",
                    child_routes: [
                        {//OS License Models (BAD not find the table)
                            title: "dashboard.OS_License_Models",
                            path: "/app/dashboard/data/os_licensing_model",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Operating Systems (BAD)
                            title: "dashboard.Operating_Systems",
                            path: "/app/dashboard/data/os",
                            doql: "select a.networkshare_pk, a.name, a.path, d.name as d_name from view_networkshare_v1 a left join view_device_v1 d on d.device_pk = a.device_fk order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                                {
                                    name: "Path",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Device",
                                    options: {
                                        filter: false
                                    }
                                },
                            ]
                        },
                        {//Operating Systems In Use (NOT)
                            title: "dashboard.Operating_Systems_In_Use",
                            path: "/app/dashboard/data/device_os",
                            doql: "select a.deviceos_pk, d.name as d_name, o.name as o_name, a.os_version, a.os_version_no, a.os_license_key, '' as os_support, '' as group_permission, '' as end_life, '' as end_support from view_deviceos_v1 a left join view_os_v1 o on o.os_pk = a.os_fk left join view_device_v1 d on d.device_pk = a.device_fk order by d_name",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "ID",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Device",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "OS",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "OS Version",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "OS Version #",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "OS License Key",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "OS Support: Vendor - End date",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Group Permissions",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "End of Life",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "End of Support",
                                    options: {
                                        filter: false
                                    }
                                },
                            ]
                        },
                        {//EOL/EOS GOOD
                            title: "dashboard.EOL_EOS",
                            path: "/app/dashboard/data/oseol",
                            doql: "select a.oseoleos_pk, o.name as o_name, a.version, TO_CHAR(a.eol, 'Mon. dd, yyyy hh:mm am') as eol, TO_CHAR(a.eos, 'Mon. dd, yyyy hh:mm am') as eos from view_oseoleos_v1 a left join view_os_v1 o on o.os_pk = a.os_fk order by o_name",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "ID",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Operating System",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Version",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "End of Life Date",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "End of Service Date",
                                    options: {
                                        filter: false
                                    }
                                },
                            ]
                        },
                    ]
                },
                {//Certificates
                    title: "dashboard.Certificates",
                    path: "",
                    child_routes: [
                        {//Certificates (NOT, expire and filters)
                            title: "dashboard.Certificates",
                            path: "/app/dashboard/data/certificate",
                            doql: "select a.certificate_pk, a.issued_to, c.issued_to as c_issued_to, TO_CHAR(a.valid_from, 'Mon. dd, yyyy hh:mm am') as valid_from, TO_CHAR(a.valid_to, 'Mon. dd, yyyy hh:mm am') as valid_to, '' as expire from view_certificate_v1 a left join view_certificate_v1 c on c.certificate_pk = a.parent_certificate_fk order by a.issued_to",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "ID",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Common Name",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Parent Certificate",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Valid From",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Valid To",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Subject",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Days to expiry",
                                    options: {
                                        filter: false
                                    }
                                },
                            ]
                        },
                        {//Certificate Instances (NOT need to check building only)
                            title: "dashboard.Certificate_Instances",
                            path: "/app/dashboard/data/devicecertificate",
                            doql: "select a.devicecertificate_pk, c.issued_to as c_issued, a.fqdn, d.name as d_name, i.ip_address as ip_address, a.serial_number, TO_CHAR(a.valid_from, 'Mon. dd, yyyy hh:mm am') as valid_from, TO_CHAR(a.valid_to, 'Mon. dd, yyyy hh:mm am') as valid_to, '' as building from view_devicecertificate_v1 a left join view_certificate_v1 c on c.certificate_pk = a.certificate_fk left join view_device_v1 d on d.device_pk = a.device_fk left join view_ipaddress_v1 i on i.ipaddress_pk = a.ipaddress_fk order by c_issued",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
                                    }
                                },
                                {
                                    name: "ID",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Certificate",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "FQDN",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Device",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "IP address",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Serial #",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Valid From",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Valid To",
                                    options: {
                                        filter: false
                                    }
                                },
                                {
                                    name: "Building",
                                    options: {
                                        filter: true
                                    }
                                },

                            ]
                        },
                    ]
                },
                
            ]
        },
        {//table not found NOTFOUND
            icon: "zmdi zmdi zmdi-wifi-alt",
            title: "dashboard.Secrets",
            path: "/app/dashboard/data/rowmgmt_password",
            submenus: null
        },
        {
            icon: "zmdi zmdi zmdi-wifi-alt",
            title: "dashboard.Discovery",
            submenus: [
                {//Remote Collectors table not found NOTFOUND
                    title: "dashboard.Remote_Collectors",                    
                    path: "/app/dashboard/data/remotecollector",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Simple Discovery Wizard (not found)
                    title: "dashboard.Simple_Discovery_Wizard",                    
                    path: "/app/dashboard/data/wizard",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//TCP Port Scan table not found
                    title: "dashboard.TCP_Port_Scan",                    
                    path: "/app/dashboard/data/netmap",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//SNMP
                    title: "dashboard.SNMP",                    
                    path: "/app/dashboard/data/switch",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Ping Sweep
                    title: "dashboard.Ping_Sweep",                    
                    path: "/app/dashboard/data/pingsweep",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//HyperVisors / *nix / Windows
                    title: "dashboard.HyperVisors_nix_Windows",                    
                    path: "/app/dashboard/data/vserver",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//UCS/ACI/Load Balancers
                    title: "dashboard.UCS_ACI_Load_Balancers",                    
                    path: "/app/dashboard/data/ucsmanager",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//IPMI / Redfish
                    title: "dashboard.IPMI_Redfish",                    
                    path: "/app/dashboard/data/dcm",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Cloud
                    title: "dashboard.Cloud",                    
                    path: "/app/dashboard/data/cloudaccount",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//DNS Zone Sync (One way)
                    title: "dashboard.DNS_Zone_Sync",
                    path: "/app/dashboard/data/dnszone",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Certificates
                    title: "dashboard.Certificates",                    
                    path: "/app/dashboard/data/sslcertificates",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Nmap
                    title: "dashboard.Nmap",                    
                    path: "/app/dashboard/data/nmap",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Warranty Sync
                    title: "dashboard.Warranty_Sync",                    
                    path: "/app/dashboard/data/warranty",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//AD/LDAP Users
                    title: "dashboard.AD_LDAP_Users",                    
                    path: "/app/dashboard/data/adldapsync",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Agent Based Scans
                    title: "dashboard.Agent_Based_Scans",                    
                    path: "/app/dashboard/data/autodisc_agent",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Unprocessed Device Records
                    title: "dashboard.Unprocessed_Device_Records",                    
                    path: "/app/dashboard/data/unmatcheddevice",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//External discovery tools
                    title: "dashboard.External_discovery_tools",                    
                    path: "/app/dashboard/data/autodiscovery",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
            ]
        },
        {//Reports
            icon: "zmdi zmdi zmdi-wifi-alt",
            title: "dashboard.Reports",
            submenus: [
                {//Advanced Reporting // This is not table view need to discuss 
                    title: "dashboard.Advanced_Reporting",                    
                    path: "/app/dashboard/data/advanced_reports",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Legacy Reports, table not found
                    title: "dashboard.Legacy_Reports",                    
                    path: "/app/dashboard/data/reports",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Legacy Dashboards table not found
                    title: "dashboard.Legacy_Dashboards",                    
                    path: "/app/dashboard/data/dashboards",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Cloud Recommendation Engine // table not found
                    title: "dashboard.Cloud_Recommendation_Engine",                    
                    path: "/app/dashboard/data/cloud_recommendation",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Generate Run Book // this is not table, downloaded xlsx file
                    title: "dashboard.Generate_Run_Book",                    
                    path: "/app/dashboard/data/report_generaterunbook",
                    child_routes: null,
                },
                {//History (Audit Logs) table not found
                    title: "dashboard.History_Audit_Logs",                    
                    path: "/app/dashboard/data/auditlog",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Notifications table not found
                    title: "dashboard.Notifications",                    
                    path: "/app/dashboard/data/alertnotification",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Setup Alerts table not found
                    title: "dashboard.Setup_Alerts",                    
                    path: "/app/dashboard/data/sensorrule",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Job Status table not found
                    title: "dashboard.Job_Status",                    
                    path: "/app/dashboard/data/celerytaskstatus",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Auto-discovery Scores table not found
                    title: "dashboard.Auto_discovery_Scores",                    
                    path: "/app/dashboard/data/discoveryquality",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Excel Reports Status table not found
                    title: "dashboard.Excel_Reports_Status",                    
                    path: "/app/dashboard/data/delayed_report_tracker",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
            ]
        },
        {
            icon: "zmdi zmdi zmdi-wifi-alt",
            title: "dashboard.Tools",
            submenus: [
                {//Imports/Exports (xls)
                    title: "dashboard.Imports_Exports",                    
                    path: "/app/dashboard/data/import_api_xls",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Templates & Bulk Operations
                    title: "dashboard.Templates_Bulk_Operations",                    
                    path: "/app/dashboard/data/ip_address",
                    child_routes: [
                        {//Bulk IP Operations
                            title: "dashboard.Bulk_IP_Operations",
                            path: "/app/dashboard/data/asset_mobile_view",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Bulk Hardware Edit
                            title: "dashboard.Bulk_Hardware_Edit",
                            path: "/app/dashboard/data/hardware_bulkedit",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Switch Templates -- Legacy
                            title: "dashboard.Switch_Templates_Legacy",
                            path: "/app/dashboard/data/switchtemplate",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Switch Templates 2.0
                            title: "dashboard.Switch_Templates_2",
                            path: "/app/dashboard/data/switchtemplate2_0",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Panel Back Connectivity
                            title: "dashboard.Panel_Back_Connectivity",
                            path: "/app/dashboard/data/patch_panel_back_connection",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Device Name Profiles
                            title: "dashboard.Device_Name_Profiles",
                            path: "/app/dashboard/data/device_name_profile",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Clone Device
                            title: "dashboard.Clone_Device",
                            path: "/app/dashboard/data/device_clone",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Transfer Between Locations
                            title: "dashboard.Transfer_Between_Locations",
                            path: "/app/dashboard/data/transferlocation",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//QR Profiles
                            title: "dashboard.QR_Profiles",
                            path: "/app/dashboard/data/qr_profiles",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Asset Number Profile
                            title: "dashboard.Asset_Number_Profile",
                            path: "/app/dashboard/data/asset_number_profile",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Image Files
                            title: "dashboard.Image_Files",
                            path: "/app/dashboard/data/imgfile",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Lifecycle Event Actions
                            title: "dashboard.Lifecycle_Event_Actions",
                            path: "/app/dashboard/data/asset_action",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Misc Functions
                            title: "dashboard.Misc_Functions",
                            path: "/app/dashboard/data/other_menus",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//What if
                            title: "dashboard.What_if",
                            path: "/app/dashboard/data/whatif",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//MT Conversion Exports
                            title: "dashboard.MT_Conversion_Exports",
                            path: "/app/dashboard/data/mt_conversion_exports",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },

                    ]
                },
                {//Custom Fields
                    title: "dashboard.Custom_Fields",                    
                    path: "/app/dashboard/data/custom_fields",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Integrations
                    title: "dashboard.Integrations",                    
                    path: "/app/dashboard/data/d42ent_itsminfo",
                    child_routes: [
                        {//External Integrations
                            title: "dashboard.External_Integrations",
                            path: "/app/dashboard/data/asset_mobile_view",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//CyberArk
                            title: "dashboard.CyberArk",
                            path: "/app/dashboard/data/tools_cyberark",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Saved DOQL Queries
                            title: "dashboard.Saved_DOQL_Queries",
                            path: "/app/dashboard/data/integrations_saveddoql",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                    ]
                },
                {//Column Lists
                    title: "dashboard.Column_Lists",                    
                    path: "/app/dashboard/data/customlist",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Auto Clean Rules
                    title: "dashboard.Auto_Clean_Rules",                    
                    path: "/app/dashboard/data/autocleanrules",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Licensing
                    title: "dashboard.Licensing",                    
                    path: "/app/dashboard/data/tools_license",
                    child_routes: null,
                    doql: "select b.building_pk, b.name, b.tags from view_building_v1 b order by b.name",
                    column : [ 
                        {
                            name: 'Tenant',
                        },
                        {
                            name: 'Url',
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "ID",
                            options: {
                                display: false,
                                filter: false
                            }
                        },
                        {
                            name: "Name",
                            options: {
                                filter: false
                            }
                        },
                        {
                            name: "Tags",
                            options: {
                                display: false,
                                filter: true
                            }
                        }
                    ]
                },
                {//Update
                    title: "dashboard.Update",                    
                    path: "/app/dashboard/data/tools_update",
                    child_routes: null,
                },
                {//Exports (CSV)
                    title: "dashboard.Exports_CSV",                    
                    path: "/app/dashboard/data/tools_export",
                    child_routes: null,
                },
                {//Admins & Permissions
                    title: "dashboard.Admins_Permissions", 
                    child_routes: [
                        {//Administrators
                            title: "dashboard.Administrators",
                            path: "/app/dashboard/data/auth_user",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Admin Groups
                            title: "dashboard.Admin_Groups",
                            path: "/app/dashboard/data/auth_group",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                    ]
                },
                {//Settings
                    title: "dashboard.Settings",         
                    child_routes: [
                        {//Active Directory Settings
                            title: "dashboard.Active_Directory_Settings",
                            path: "/app/dashboard/data/d42ent_ldapsettings",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Time Settings
                            title: "dashboard.Time_Settings",
                            path: "/app/dashboard/data/tools_settime",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Debug Flag
                            title: "dashboard.Debug_Flag",
                            path: "/app/dashboard/data/tools_setdebug",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Password Security
                            title: "dashboard.Password_Security",
                            path: "/app/dashboard/data/tools_passphrase_pass",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Global Settings
                            title: "dashboard.Global_Settings",
                            path: "/app/dashboard/data/d42ent_passwordtimeout",
                        },
                        {//Mail Server Settings
                            title: "dashboard.Mail_Server_Settings",
                            path: "/app/dashboard/data/reporting_mailserver",
                        },
                        {//Log Settings
                            title: "dashboard.Log_Settings",
                            path: "/app/dashboard/data/d42webhooks_loggingintegration",
                        },
                        {//History (Audit Log) Exclusions
                            title: "dashboard.History_Audit_Log_Exclusions",
                            path: "/app/dashboard/data/d42webhooks_auditlogexclude",
                        },
                    ]
                },
                {//Webhooks
                    title: "dashboard.Webhooks",                    
                    path: "/app/dashboard/data/building",
                    child_routes: [
                        {//Endpoints
                            title: "dashboard.Endpoints",
                            path: "/app/dashboard/data/d42webhooks_webhookdestinationintegration",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Actions
                            title: "dashboard.Actions",
                            path: "/app/dashboard/data/d42webhooks_webhookaction",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                        {//Pending
                            title: "dashboard.Pending",
                            path: "/app/dashboard/data/d42webhooks_webhooktoprocess",
                            doql: "select a.asset_pk, a.name from view_asset_v1 a order by a.asset_pk",
                            column: [
                                {
                                    name: 'Tenant',
                                    options: {
                                        display: false
                                    }
                                },
                                {
                                    name: 'Url',
                                    options: {
                                        display: false,
                                        filter: false
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
                            ]
                        },
                    ]
                },
                {//Appliance Manager
                    title: "dashboard.Appliance_Manager",                    
                    path: "/app/dashboard/data/application_manager",
                    child_routes: null,
                },
            ]
        },
    ]
    
    
}