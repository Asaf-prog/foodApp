export default function Button ({ children, textOnly, className, ...props }){
    let cssClasses = textOnly ? 'text-button' : 'button';
    cssClasses +=' '+className;
    //const cssClasses = textOnly ? `text-button ${className}` : 'button';//antoher optio n
    
    return (
        <button className={cssClasses}{...props}>{children}</button>
    );
}