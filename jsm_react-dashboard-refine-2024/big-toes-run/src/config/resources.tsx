import { DashboardOutlined, ProjectOutlined, ShopOutlined } from "@ant-design/icons"
import { IResourceItem } from "@refinedev/core"

export const resources: IResourceItem[] =   [
    /**
     * A resource in Refine performs these actions:
     * list -> get all records (Read)
     * show -> get a single record (Read)
     * create -> create a record (Update)
     * delete -> delete a record (Delete)
     * or Clone
     */

    {
        name: 'dashboard',
        list: '/', 
        meta: {
            label: 'Dashboard',
            icon: <DashboardOutlined />
        }
    },
    {
        name: 'companies',
        list: 'companies' , // the endpoint for getting a list of records
        show: 'company/:id', // the endpoint for getting a single record, the ":id" 
        create: 'companies/new',
        edit: '/companies/edit/:id',
        meta: {
            label: 'Companies',
            icon: <ShopOutlined />
        }
    },
    {
        name: 'tasks',
        list: 'tasks' , // the endpoint for getting a list of records
        create: 'tasks/new',
        edit: '/tasks/edit/:id',
        meta: {
            label: 'Tasks',
            icon: <ProjectOutlined />
        }
    }
]