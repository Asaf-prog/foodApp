import { currencyFormatter } from "../../util/formatting.js";
export default function CartItem({ name, quantity, price, onIcrease, onDecrease }) {
return(
    <li className="cart-item">
        <p>
            {name} - {quantity} x {currencyFormatter.format(price)}
        </p>
        <p className="cart-item-actions">
            <button onClick={onDecrease}>-</button>
            <button onClick={onIcrease}>{quantity}</button>
            <button>+</button>
        </p>
    </li>
);
}