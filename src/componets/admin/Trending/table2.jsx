import React from 'react';
import './table.css';

function Table2(props) {
  
    

  return (
    <table id="userTable">
      <thead className="head">
        <tr>
          <th>#</th>
          {props.headers.map(header => (
            <th key={header}>{header}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="head">
        {props.data.map((row,index) => (
          <tr key={row.id}>
            <td>{index+1}</td>
                {Object.values(row).map((value, i) => (
                <td key={i}>{typeof value === 'boolean' ? value.toString() : value}</td>
            ))}
            <td>
            {props.addbt && 
                <button className=' mx-2' 
                onClick={() => {
                                  const r = confirm("Do you want add   ?")
                          if(r){
                                      props.add(row._id)
                                }
                }}><i class="fa-solid fa-plus"></i></button> }


             {props.removebt &&  <button className=' mx-2' onClick={() => {
                                  const r = confirm("Do you want remove   ?")
                          if(r){
                                  props.remove(row._id)
                                }
                }}><i class="fa-solid fa-minus"></i></button> }
            </td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table2;
