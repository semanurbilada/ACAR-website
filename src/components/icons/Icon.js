export default function Icons({ iconName, className, onClick }) {
    const menuIcon = (
        <svg  
            className={className}
            onClick={onClick}
            width="43"
            height="43" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            stroke="#274c6c">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"><path d="M4 17H20M4 12H20M4 7H20" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g>
        </svg>
    );

    return (
        <>
            {iconName === "menu" && menuIcon}
        </>
    );
}