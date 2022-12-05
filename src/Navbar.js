// export default function Navbar(){
//     const path = window.location.pathname
//     return(
//         <nav className="nav">
//             <a href="/" className="site-title">
//                 Driver App
//             </a>
//             <ul>
//                 <li className="active">
//                     <CustomLink href="/adduser"> Add Driver Details </CustomLink>
//                     <CustomLink href="/getuser"> View Driver Details </CustomLink>
//                 </li>

                
                    
                
//             </ul>

//         </nav>
//     )
// }

// function CustomLink({href,children,...props}){
//     const path =  window.location.pathname
    
//         return(
//         <li className= {path === href ? "active" : ""}>
//         <a href={href} {...props}>{children} </a>
//         </li>
//     )
// }