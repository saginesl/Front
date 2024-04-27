import React, { useState, useEffect } from 'react'; 
import { useGetUsersQuery } from './api'; 
import { useTable, useSortBy, useColumnOrder } from 'react-table'; 
 
const UserList = () => { 
  const { data, isLoading, isError } = useGetUsersQuery(); 
  const [users, setUsers] = useState([]); 
 
  useEffect(() => { 
    if (!isLoading && !isError) { 
      setUsers(data); 
    } 
  }, [data, isLoading, isError]); 
 
  const columns = React.useMemo( 
    () => [ 
      { 
        Header: 'Имя', 
        accessor: 'name', 
      }, 
      { 
        Header: 'Email', 
        accessor: 'email', 
      }, 
    ], 
    [] 
  ); 
 
  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow, 
  } = useTable({ columns, data: users }, useSortBy, useColumnOrder); 
 
  return ( 
    <> 
      <div className="centered-content">
        {isLoading && <div>Загрузка...</div>}
        {isError && <div>Ошибка загрузки</div>}
      </div> 
        <> 
          <h2 style={{ paddingLeft: '670px' }}>Список пользователей</h2> 
          <div style={{ paddingLeft: '670px' }}> 
            <table {...getTableProps()}> 
              <thead> 
                {headerGroups.map((headerGroup) => ( 
                  <tr {...headerGroup.getHeaderGroupProps()}> 
                    {headerGroup.headers.map((column) => ( 
                      <th {...column.getHeaderProps(column.getSortByToggleProps())}> 
                        {column.render('Header')} 
                        <span> 
                          {column.isSorted ? (column.isSortedDesc ? ' | ⬇ | ' : ' | ⬆ | ') : ''} 
                        </span> 
                      </th> 
                    ))} 
                  </tr> 
                ))} 
              </thead> 
              <tbody {...getTableBodyProps()}> 
                {rows.map((row) => { 
                  prepareRow(row); 
                  return ( 
                    <tr {...row.getRowProps()}> 
                      {row.cells.map((cell) => { 
                        return ( 
                          <td {...cell.getCellProps()}>{cell.render('Cell')}</td> 
                        ); 
                      })} 
                    </tr> 
                  ); 
                })} 
              </tbody> 
            </table> 
          </div> 
        </> 
    </> 
  ); 
}; 
 
export default UserList;