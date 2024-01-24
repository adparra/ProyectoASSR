import { useForm } from "react-hook-form"
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';


function LoginPage(){

    const {register, handleSubmit, formState:{errors}} = useForm();

    const{signin, errors:signinErrors, isAuthenticated} = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(data => {
        signin(data);
    })

    useEffect(()=>{
        if(isAuthenticated) navigate ("/")
    },[isAuthenticated])

    return(
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-8 rounded-md">

                {signinErrors.map((error,i)=> (
                    <div className='bg-red-500 p-2 text-white' key={i}>
                        {error}
                    </div> 
                ))}
            
            <h1 className="text-2xl font-bold">Login</h1>
            
            <form onSubmit={onSubmit}>

                <input type="email" {...register("email",{required:true})}  
                className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
                placeholder='E-Mail'
                />
                {errors.email && 
                (<p className='text-red-500'>E-Mail is required</p>)}

                <input type="password" {...register("password",{required:true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
                placeholder='Password'
                />
                {errors.password && 
                (<p className='text-red-500'>Password is required</p>)}

                <button type="submit" className="bg-indigo-500 px-4 py-1 rounded-sm mb-3 mt-2">
                Iniciar Sesión
                </button>
            </form>

            <p className="flex gap-x-2 justify-between">
                No tienes una cuenta? <Link className="text-sky-500"
                to="/register"> Crea una hoy </Link>
            </p>
            </div>


        </div>
    )
}

export default LoginPage