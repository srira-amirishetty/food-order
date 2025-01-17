import {useContext} from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm' ;

const MealItem = (props) => {
    const cartctx = useContext(CartContext);

    const price = `₹${props.price.toFixed(0)*80}`;

    const addItemToCartHandler= (amount) => {
        cartctx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        });
    };

    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addItemToCartHandler} />
            </div>
        </li>
    )
};

export default MealItem;