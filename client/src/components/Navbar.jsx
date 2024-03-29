import { Link } from "react-router-dom"
import { useAuth } from "../context/authContext";

function Navbar(){

    const {isAuthenticated, logout}= useAuth();
    return(
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to="/">
            <h1 className="text-2xl font-bold">Smart Home ASSR</h1>
            </Link>
            <ul className="flex gap-x-4">
            {isAuthenticated ? (
            <>
            <li>Bienvenido!</li>
            <li>
                <Link to="tasks" className="bg-indigo-500 px-4 py-1 rounded-sm">Mis sensores</Link>
            </li>

            <li>
                <Link to="/" className="bg-indigo-500 px-4 py-1 rounded-sm" onClick={()=>{logout();} }>Log-out</Link>
            </li>
            </>
            ):(
            <>
                <li>
            <Link to='/login' className="bg-indigo-500 px-4 py-1 rounded-sm">Login</Link>
                </li>
                <li>
            <Link to='/register' className="bg-indigo-500 px-4 py-1 rounded-sm">Register</Link>
                </li>
            </>
                )}
            </ul>
        </nav>
    );

}
export default Navbar