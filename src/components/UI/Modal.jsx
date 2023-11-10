import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
export default function Modal({childern, open,onClose,className = ''}){
    const dialog = useRef();
    
    useEffect(() => {
        const modal = dialog.current; 
        
        if(open){
           modal.showModal();
        }
        return () => modal.close();
    }, [open]);
    
    return createPortal(
        <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
            {childern}
            </dialog>,
        document.getElementById('modal')
    );
        
}