import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function List() {

  const [products, setProducts] = useState([])
  const getData = async () => {

    const data = await axios.get(`http://localhost:3000/products`)
    setProducts(data.data)
    console.log(data.data)
  };
  useEffect(() => {
    getData()
  },[])

  const supprimer = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`)
      getData()
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <h1>Product's list</h1>
      <Link to="/addproduct" className='btn btn-dark mt-2'>add Product</Link>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>description</th>
            <th>price</th>
            <th>photo</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (

              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td> <img src={`data:image/jpeg;base64${product.photo}`} alt="img"  className='img' /></td>
                <td>

                  <Link to={`/updateproduct/${product.id}`} className='btn btn-primary'> modify</Link>

                  <input onClick={() => supprimer(product.id)} value='delete' type='button' className='btn btn-primary' />
                </td>
              </tr>
            )
          }
          )}
        </tbody>
      </table >
    </div >
  )
}
export default List;