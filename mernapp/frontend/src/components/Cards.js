import React, {useState, useRef, useEffect} from 'react'
import { useDispatchCart, useCart } from './ContextReducer';

export default function Cards(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);

    const [qty, setqty] = useState(1);
    const [size, setsize]  = useState("");
    const handleAddToCart = async() =>{
        let food = []
        for (const item of data){
            if(item.id === props.foodItem._id){
                food = item;
                break;
            }
        }
        if(food!==[]){
            if(food.size===size){
                await dispatch({type:"UPDATE", id:props.foodItem._id, price: finalPrice, qty:qty})
                return
            }
            else if(food.size!==size){
                await dispatch({type:"ADD", id:props.foodItem._id, name:props.foodItem.name, price:finalPrice, qty:qty, size:size})
                return
            }
        }
        await dispatch({type:"ADD", id:props.foodItem._id, name:props.foodItem.name, price:finalPrice, qty:qty, size:size})
        return 
    }
    let finalPrice = qty * parseInt(options[size]);
    useEffect(()=>{
        setsize(priceRef.current.value)
    },[])
    return (
        <div>
            <div>
                <div className="card mt-3 mb-2" style={{ "width": "20rem", "maxHeight": "auto"}}>
                    <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"250px", objectFit:"fill"}} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        <p className="card-text">{props.foodItem.description}</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-info rounded text-dark fw-bold' onChange={(e)=>setqty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                                    )
                                })}
                            </select>
                            <select className='m-2 bg-info h-100 rounded text-dark fw-bold' ref={priceRef} onChange={(e)=>setsize(e.target.value)}>
                                {priceOptions.map((data)=>{
                                    return <option key={data} value={data}>{data}</option>
                                })}
                            </select>
                            <div className='d-inline h-100 fs-5'>₹{finalPrice}/-</div>
                        </div>
                        <hr/>
                        <button className={'btn btn-info justify-center ms-2 text-dark fw-bold'} onClick={handleAddToCart}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
