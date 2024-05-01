import React from 'react';
import './table.css';

function Table(props) {
  
  

  return (
    <table id="userTable">
      <thead className="head">
        <tr>
          {props.headers.map(header => (
            <th key={header}>{header}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="head">
        {props.data.map(row => (
          <tr key={row.id}>
                {Object.values(row).map((value, index) => (
                <td key={index}>{typeof value === 'boolean' ? value.toString() : value}</td>
            ))}
            <td>
              <button className=' mx-2' onClick={() =>props.handleEdit(row._id)}><i class="fa-regular fa-pen-to-square"></i></button>
              <button className=' mx-2' onClick={() => props.handleDelete(row._id)}><i class="fa-solid fa-trash"></i></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;