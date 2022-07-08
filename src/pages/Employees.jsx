import React from 'react'
import {GridComponent, ColumnsDirective, ColumnDirective,Page, Search, Inject, Toolbar} from '@syncfusion/ej2-react-grids';
import { employeesData, contextMenuItems, employeesGrid} from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Employees'/>
      <GridComponent
        id='gridcomp'
        dataSource={employeesData}
        allowPaging //for pagination
        allowSorting //for sorting
        toolbar={['Search']} //for search
      >
        <ColumnsDirective>
          {employeesGrid.map((item,index)=>(
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        {/* For putting numbers onto the pagination  */}
        <Inject services={[Search,Page,Toolbar]}/>

      </GridComponent>
    </div>
  )
}

export default Employees