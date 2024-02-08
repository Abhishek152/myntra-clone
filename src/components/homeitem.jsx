import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";


const Homeitem = ({item}) =>{
    const dispatch = useDispatch();
    const handleOnAdd = () =>{
        dispatch(bagActions.addintoBag(item.id));
    };
    const handleOnRemove = () =>{
        dispatch(bagActions.deleteFromBag(item.id));
    }

    const bagitems = useSelector(store => store.bag);
    const check = bagitems.indexOf(item.id)>=0;

return (
<div className="item-container">
<img className="item-image" src={item.image} alt="item image"/>
<div className="rating">
    {item.rating.stars} ⭐ | {item.rating.count}
</div>
<div className="company-name">{item.company}</div>
<div className="item-name">{item.item_name}</div>
<div className="price">
    <span className="current-price">Rs {item.current_price}</span>
    <span className="original-price">Rs {item.original_price}</span>
    <span className="discount">({item.discount_percentage}% OFF)</span>
</div>
{check ? <button type="button" className="btn btn-danger btn-add-bag" onClick={handleOnRemove}><MdDelete />  Remove</button>: <button className="btn-add-bag" onClick={handleOnAdd}><IoMdAddCircle/>   Add to Bag</button>}
</div>

);
};

export default Homeitem;