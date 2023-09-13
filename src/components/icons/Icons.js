export default function Icons({ iconName, className, onClick }) {
    const menuIcon = (
        <svg  
            onClick={onClick}
            className={className}
            width="43px"
            height="43px" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            stroke="#274c6c">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"><path d="M4 17H20M4 12H20M4 7H20" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g>
        </svg>
    );

    const mailIcon = (
        <svg 
            className={className}
            width="64px" 
            height="64px" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            stroke="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path opacity="0.1" d="M3.09097 6.4173C3 6.76072 3 7.21507 3 7.99997V16C3 16.9319 3 17.3978 3.15224 17.7653C3.35523 18.2554 3.74458 18.6447 4.23463 18.8477C4.60218 19 5.06812 19 6 19H18C18.9319 19 19.3978 19 19.7654 18.8477C20.2554 18.6447 20.6448 18.2554 20.8478 17.7653C21 17.3978 21 16.9319 21 16V7.99997C21 7.21506 21 6.76072 20.909 6.4173C20.852 6.5418 20.7683 6.65652 20.6585 6.75255L13.9755 12.6002C12.8444 13.5899 11.1556 13.5899 10.0245 12.6002L3.3415 6.75255C3.23175 6.65652 3.14804 6.5418 3.09097 6.4173Z" fill="#274c6c"></path> 
                <path d="M3 8C3 7.06812 3 6.60218 3.15224 6.23463C3.35523 5.74458 3.74458 5.35523 4.23463 5.15224C4.60218 5 5.06812 5 6 5V5H18V5C18.9319 5 19.3978 5 19.7654 5.15224C20.2554 5.35523 20.6448 5.74458 20.8478 6.23463C21 6.60218 21 7.06812 21 8V16C21 16.9319 21 17.3978 20.8478 17.7654C20.6448 18.2554 20.2554 18.6448 19.7654 18.8478C19.3978 19 18.9319 19 18 19V19H6V19C5.06812 19 4.60218 19 4.23463 18.8478C3.74458 18.6448 3.35523 18.2554 3.15224 17.7654C3 17.3978 3 16.9319 3 16V8Z" stroke="#274c6c" strokeWidth="2" strokeLinejoin="round"></path> 
                <path d="M4 6L10.683 11.8476C11.437 12.5074 12.563 12.5074 13.317 11.8476L20 6" stroke="#274c6c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
            </g>
        </svg>
    );

    const phoneIcon = (
        <svg 
            className={className}
            fill="#274c6c" 
            width="64px" 
            height="64px" 
            viewBox="0 0 32 32" 
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z"></path>
            </g>
        </svg>
    );

    const locationIcon = (
        <svg 
            className={className}
            width="40px" 
            height="40px" 
            viewBox="-1.5 0 15 15" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="#274c6c">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path fill="#274c6c" fillRule="evenodd" d="M574,120 C575.324428,120 580,114.054994 580,110.833333 C580,107.611672 577.313708,105 574,105 C570.686292,105 568,107.611672 568,110.833333 C568,114.054994 572.675572,120 574,120 Z M574,113.333333 C575.420161,113.333333 576.571429,112.214045 576.571429,110.833333 C576.571429,109.452621 575.420161,108.333333 574,108.333333 C572.579839,108.333333 571.428571,109.452621 571.428571,110.833333 C571.428571,112.214045 572.579839,113.333333 574,113.333333 Z" transform="translate(-568 -105)"></path>
            </g>
        </svg>
    );

    const facebookIcon = (
        <svg 
            className={className}
            fill="#274c6c" 
            width="50px" 
            height="50px" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path>
            </g>
        </svg>
    );

    const instagramIcon = (
        <svg 
            className={className}
            fill="#274c6c" 
            width="55px" 
            height="55px" 
            viewBox="0 0 512 512">
            <g>
                <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path>
                <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path>
                <circle cx="351.5" cy="160.5" r="21.5"></circle>
            </g>
        </svg>
    );

    const sidebarIcon = (
        <svg 
            className={className}
            onClick={onClick}
            width="28px" 
            height="28px" 
            viewBox="0 0 24 24" 
            fill="#274c6c"
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.34315L6.34317 12L12 17.6569L17.6569 12L12 6.34315ZM2.10052 12L12 21.8995L21.8995 12L12 2.10051L2.10052 12Z"></path> </g>
        </svg>
    );

    return (
        <>
            {iconName === "menu" && menuIcon}
            {iconName === "mail" && mailIcon}
            {iconName === "phone" && phoneIcon}
            {iconName === "sidebar" && sidebarIcon}
            {iconName === "location" && locationIcon}
            {iconName === "facebook" && facebookIcon}
            {iconName === "instagram" && instagramIcon}
        </>
    );
}