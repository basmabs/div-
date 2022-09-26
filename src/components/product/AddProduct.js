import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddProduct() {
  const navigate = useNavigate()

  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    price: '',
    photo: ''
  })
  const handleChange = (e) => {
    const { value, id } = e.target
    setProductForm(() => {
      return { ...productForm, [id]: value }
    })
  }
  const onFileSelect = (e) => {
    const file = e.target.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64String = (reader.result).replace("data:", "").replace(/^.+,/, "");
      setProductForm({ ...productForm, photo: "data:image/jpeg;base64," + base64String.toString() })
    };
    reader.readAsDataURL(file);
    const { value, id } = e.target
    setProductForm(() => {
      return { ...productForm, [id]: value }
    })
  }
  const handleSubmit = async () => {
    await axios.post('http://localhost:3000/products', productForm)
    navigate('/list')
  };
  return (
    <div>
      <div className='container'>
        <h1>add product</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input onChange={handleChange} type="text" className="form-control" id="name" aria-describedby="name" placeholder="name" />
          </div>
          <div className="form-group">
            <label htmlFor="price">price </label>
            <input onChange={handleChange} type="number" className="form-control" id="price" aria-describedby="price" placeholder="price" />
          </div>
          <div className="form-group">
            <label htmlFor="description">description </label>
            <input onChange={handleChange} type="text" className="form-control" id="description" aria-describedby="description" placeholder="description" />
          </div>
          <div className="form-group">
            <label htmlFor="photo">photo </label>
            <input onChange={onFileSelect} type="file" className="form-control" id="photo" aria-describedby="photo" placeholder="photo" />
          </div>
          <input onClick={handleSubmit} type='button' className='btn btn-primary mt-2' value='add Product' />
        </form>
      </div>
    </div>
  )
}
export default AddProduct