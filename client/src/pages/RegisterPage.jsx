
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/authContext';
import { useEffect } from 'react';
import {useNavigate,Link} from 'react-router-dom';


function RegisterPage(){

    const {register,handleSubmit,formState:{errors}} = useForm();
    const {signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        if(isAuthenticated) navigate("/")
    },[isAuthenticated])


    const onSubmit= handleSubmit(async(values)=>{
        signup(values);    
    })

    return(
        <div className='h-screen flex items-center justify-center  p-10 rounded-md'>
            {
                registerErrors.map((error,i)=> (
                    <div className='bg-red-500 p-2 text-white' key={i}>
                        {error}
                    </div> 
                ))
            }
        <div className="bg-zinc-800 max-w-md w-full p-8 rounded-md">
        
        <h1 className="text-2xl font-bold">Register</h1>

        <form onSubmit={onSubmit}>

            <input type="text" {...register("username",{required:true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
                placeholder='Username'
                />
                {errors.username && 
                (<p className='text-red-500'>Username is required</p>)}

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
                Registrarse
            </button>
        </form>

        <p className="flex gap-x-2 justify-between">
                Ya tienes una cuenta? <Link className="text-sky-500"
                to="/login"> Inicia Sesión </Link>
        </p>
        </div>
        

        </div>
    )
}

export default RegisterPage