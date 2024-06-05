import {Outlet, useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import CheckListLogo from '../Icons/checklist.svg'
import PersonGroup from '../Icons/personsGroup.svg'
import Pin from '../Icons/pin.svg'


export const Home = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const login = true
        if (!login) {
            console.log("El usuario no está logueado")
            navigate("/login")
        }
    }, [])

    const buttons = [
        {name: 'Mis tareas', path: '/app-tareas/mis-tareas', icon:Pin},
        {name: 'Mis grupos', path: '/app-tareas/mis-grupos', icon:PersonGroup},



    ]


    return (
        <>
            <div className="flex flex-col h-screen">
                <nav className="bg-#60a5fa text-dark w-full py-6 fixed top-0 shadow-md">
                    <div className="container mx-auto flex justify-between items-center px-5 xl:px-12">
                        <button onClick={()=> navigate("/")}>
                            <img src={CheckListLogo} className="h-10 w-10"/>
                        </button>

                        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 ">
                            {buttons.map((b) => (
                                <li className = "hover:text-gray-200" key={b.name}>
                                    <button className="flex justify-center items-center" onClick={() => navigate(b.path)}>
                                        <img className="h-10 w-10 object-center" src={b.icon}/>
                                        {b.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden xl:flex items-center space-x-5">
                            <a className="hover:text-gray-200" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </a>
                            <a className="flex items-center hover:text-gray-200" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="flex absolute -mt-5 ml-4">
                                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                                </span>
                            </a>
                            <a className="flex items-center hover:text-gray-200" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <a className="xl:hidden flex mr-6 items-center" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="flex absolute -mt-5 ml-4">
                            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                        </span>
                    </a>
                    <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </a>
                </nav>

            </div>

            <Outlet/>
        </>
    )

    /*
    <>
            <p>Este es el home de la pagina en donde habrá un navbar, los botones son creados dinamicamente</p>
            {buttons.map((b) => (
                <button onClick={() => navigate(b.path)}>{b.name}</button>
            ))}
        </>
     */
}
