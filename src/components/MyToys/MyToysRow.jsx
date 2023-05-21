import React from 'react';
// import Swal from 'sweetalert2'

const MyToysRow = ({myToy}) => {
    const {_id, sellerName, category, price, quantity} = myToy;

    const handleDelete = (id) => {
        const procced = confirm('Are you sure?');
        if(procced){
            fetch(`https://toys-land-server.vercel.app/addToy/${id}`,{
                method : 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    }
    
    return (
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{sellerName}</div>
                  </div>
                </div>
              </td>
              <td>
                {category}
              </td>
              <td>{quantity}</td>
              <td>{price}</td>
              <th>
                <button className="btn btn-ghost btn-xs">Update</button>
              </th>
              <th>
                <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
              </th>
            </tr>
    );
};

export default MyToysRow;