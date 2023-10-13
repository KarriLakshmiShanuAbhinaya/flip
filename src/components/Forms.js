import React, { useState,useEffect } from 'react'
import axios from 'axios'
export default function Form() {
    const[products,setProducts]=useState([{}]);
    const [id,setId]=useState(' ')
    const [name,setName]=useState(' ')
    const [brand,setBrand]=useState(' ')
    const [price,setPrice]=useState(' ')
    const [des,setDes]=useState(' ')
    const [img,setImg]=useState(' ')
    const[pid,setPid]=useState('');
    const productData={
        productid:id,
        productname:name,
        brand:brand,
        price:price,
        description:des,
        thumbnail:img
    }
    useEffect(()=>{
        axios.get(' http://localhost:3002/products')
        .then(res=>setProducts(res.data))
    },0)
    let sno=1;
 
    const fetchData=()=>{
            axios.get('http://localhost:3002/products')
            .then(res=>setProducts(res.data))
        }
    console.log(products)
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3002/products/${id}`)
        .then((res)=>{
            alert('Product Deleted')
            fetchData()
        })
    }
    useEffect(()=>{
        fetchData()
    },0)
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        //alert("submited");
        if(pid==""){
        axios.post('http://localhost:3002/products',productData)
        .then((res)=>{
            alert("sucess")
            fetchData();
            setId('');
            setName('');
            setBrand('');
            setPrice('');
            setDes('');
            setImg('');

        })
    }
    else{
        axios.put(`http://localhost:3002/products/${pid}`,productData)
        .then((res)=>{
            alert("sucess")
            fetchData();
            setId('');
            setName('');
            setBrand('');
            setPrice('');
            setDes('');
            setImg('');
            setPid('');

        })
    }
    }
    const handleEdit=(editdata)=>{
        const {id,title,brand,price,des,imgurl}=editdata
        alert(editdata.id)
        setId(editdata.productid);
        setName(editdata.productname);
        setBrand(editdata.brand);
        setPrice(editdata.price);
        setDes(editdata.description);
        setImg(editdata.thumbnail);
        setPid(editdata.id);
        fetchData();
    }
  return (
   <>
           <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-6" style={{backgroundColor:"#abc3ee"}}>
                    <form method="post" onSubmit={handleSubmit}>
                    <h2 className="text-center">Add Products</h2><hr></hr>
                    <div className="mb-3">
                        <label>Product Id:</label>
                        <input type="text" name="" class="form-control"  placeholder="enter id" onChange={(e)=>{setId(e.target.value)}} value={id}/>
                    </div>
                    <div className="mb-3">
                        <label>ProductName:</label>
                        <input type="text" name="" class="form-control" placeholder="enter name" onChange={(e)=>{setName(e.target.value)}} value={name}/>
                    </div>
                    <div className="mb-3">
                        <label>Brand</label>
                        <input type="text" name="" class="form-control" placeholder="enter brand" onChange={(e)=>{setBrand(e.target.value)}} value={brand}/>
                    </div>
                    <div className="mb-3">
                        <label>Price</label>
                        <input type="text" name="" class="form-control" placeholder="enter price" onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
                    </div>
                    <div className="mb-3">
                        <label>Description</label>
                        <textarea type="text" name="" class="form-control" style={{paddingBottom:"50px"}}  onChange={(e)=>{setDes(e.target.value)}} value={des}/>
                    </div>
                    <div className="mb-3">
                        <label>Image</label>
                        <input type="text" name="" class="form-control" placeholder="image url" onChange={(e)=>{setImg(e.target.value)}} value={img}/>
                    </div>
                    <button className="btn btn-success mb-3" style={{paddingLeft:"5px",paddingRight:"10px"}}>submit</button>
                </form>
            </div>
        </div>
    </div>
    <table  className='table table-bordered table-responsive++ mt-5'>
      <thead>
          <tr>
              <th>SNo</th>
              <th>Product id</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
          </tr>
      </thead>
      <tbody>
              {
                products.map((e,i)=>{
                    return(
                        <>
                        <tr>
                            <td>{sno++}</td>
                            <td>{e.productid}</td>
                            <td>{e.productname}</td>
                            <td>{e.brand}</td>
                            <td>{e.price}</td>
                            <td>{e.description}</td>
                            <td><img src={e.thumbnail}  style={{width:"17rem",height:"10rem"}} className="card-img-top pl" alt="..."/></td>
                            <td><button onClick={()=>handleEdit(e)}><i id="actions1" i class="fa-solid fa-pen-to-square abhi"></i> </button><button onClick={()=>handleDelete(e.id)}><i id="actions2" class="fa-solid fa-trash-can"></i></button></td>
                        </tr>
                        </>
                    )
                })
            } 
        </tbody>
    </table>
    {
        products.map((element,index)=>{
            return(
                <>
                <div class="card float-start mt-3 ml"  style={{width:"25rem",height:"32rem"}}>
                <img src={element.thumbnail} style={{width:"25rem",height:"15rem",marginRight:"10px",marginLeft:"-1px"}} class="card-img-top" alt="..."  ></img>
                <div class="card-body">
                <h5 class="card-title">{element.productname}</h5>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Product-id: {element.productid}</li>
                <li class="list-group-item">Product-Price: {element.price}</li>
                <li class="list-group-item">Product-Brand: {element.brand}</li>
                <li class="list-group-item">Product Description: {element.description}</li>
            </ul>
            <div class="card-body">
            <button class="bg-info"><a href={element.card} class="card-link" style={{textDecoration:"none",color:"black"}}>Card link</a></button>
            </div>
            </div>
                </>
            )

        })
    }
   </>
  )
}