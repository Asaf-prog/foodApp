import logImg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import { useContext } from 'react';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Header(){
    const carCtx = useContext(CartContext);
    const UserProgressContextCtx = useContext(UserProgressContext);

    const totalCartItems = carCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart(){
        UserProgressContextCtx.showCart();
    }
    return (
        <header id ="main-header">
            <div id="title">
                <img src={logImg} alt ="A restaurant"/>
                <h1>ReactFood</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>
                     Cart ({totalCartItems})</Button>
            </nav>
        </header>
    );
}
//textOnly like that automatic set the textOnly to true 