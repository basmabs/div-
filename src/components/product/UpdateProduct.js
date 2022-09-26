import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function UpdateProduct() {
const navigate= useNavigate();
  /* Getting the id from the url. */
  const params = useParams()
  const [product, setProducts] = useState({
    name: '',
    description: '',
    price: '',
    photo: ''
  })
  const handleChange = (e) => {
    const { value, id } = e.target
    setProducts(() => {
      return { ...product, [id]: value }
    })
  }
  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`http://localhost:3000/products/${params.idProduct}`)
      setProducts(response.data)
    }
    getData()
  }, [params.idProduct])

  const handleSubmit = () => {
    axios.put(`http://localhost:3000/products/${params.id}`, product);
    navigate('/list')
  }
  const handleFile = (e) => {
    const file = e.target.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64String = (reader.result).replace("data:", "").replace(/^.+,/, "");
      setProducts({ ...product, photo: "data:image/jpeg;base64," + base64String.toString() })
    };
    const { value, id } = e.target
    setProducts(() => {
      return { ...product, [id]: value }
    })
  }
    return (
    <div>
      <h1> modify product</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">name</label>
          <input onChange={handleChange}type="text" className="form-control" id="name" aria-describedby="name" value={product.name} placeholder="name" />
        </div>

        <div className="form-group">
          <label htmlFor="price">price </label>
          <input onChange={handleChange}type="number" className="form-control" id="price" aria-describedby="price" value={product.price} placeholder="price" />
        </div>

        <div className="form-group">
          <label htmlFor="description">description </label>
          <input onChange={handleChange}type="text" className="form-control" id="description" value={product.description} aria-describedby="description" placeholder="description" />
        </div>

        <div className="form-group">
          <label htmlFor="photo" className='me-5 my-4'>photo</label>
          <img src={product.photo} alt="prod" className='img' />

          <input onChange={handleFile} type="file" className="form-control" id="photo" aria-describedby="photo" placeholder="photo" />
        </div>

        <input onClick={handleSubmit} type='button' className='btn btn-primary mt-2' value='update Product' />

      </form>
    </div>
  )
}

export default UpdateProduct