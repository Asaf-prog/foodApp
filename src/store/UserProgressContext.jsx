import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',//cart or checkout
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
});
export function UserProgressContextProvider({children}){
    const [userProgress, setUserProgress] = useState('');
    
    function showCart(){
        setUserProgress('cart');
    }

    function hideCart(){
        setUserProgress('');
    }

    function showCheckout(){
        setUserProgress('checkOut');
    }

    function hideCheckout(){
        setUserProgress('');
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
    };

    return (
        <UserProgressContextProvider value={userProgressCtx}>
            {children}
        </UserProgressContextProvider>
    );
}

export default UserProgressContext;