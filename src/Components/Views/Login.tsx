
import { useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {ModalInformacion} from '../Modals/ModalInfo'

export const Login = () => {

    const [usuario, setUsuario] = useState(null)
    const [contrasena, setContrasena] = useState(null)
    const [openModalInfo, setOpenModalInfo] = useState(false)
    const [mensajeModal, setMensajeModal] = useState("")
    const [validacionLogin, setValidacionLogin] = useState(false)

    const navigate = useNavigate()


    useEffect ( ()=>{
        if(validacionLogin){
            navigate("/")
        }

    },[validacionLogin])

    const credenciales =[
        {
            user: "mariela",
            password: "Sole123"
        },
        {
            user: "yanow",
            password: "jano23"
        }
    ]

    const validateLogin = () =>{
        if(validateUser()){
            setValidacionLogin(true)
        }
        else{
            setMensajeModal("El usuario o contraseña no son correctos")
            setOpenModalInfo(true)
        }
    }

    const validateUser = () =>{
        const user = credenciales.find((u) => u.user === usuario);
        if (user!= null){
            debugger
            if(user.password == contrasena){
                return true
            }
        }
        return false
    }

    const handleChangeUser = (value) => {
        setUsuario(value.target.value)
    }
    const handleChangePass = (value) => {
        setContrasena(value.target.value)
    }

    const handleClickOkModal = () =>{
        setOpenModalInfo(false)
    }

    const handleOnClickSesion = () =>{
        validateLogin()
    }


    return (
        <div className="min-h-screen bg-gradient-to-r from-[#D1F2EB] to-[#BFEEDD] flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-[#1E6A5C]">Ingresa a TareaApp</h1>
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-[#1E6A5C] font-medium mb-2 transition-all duration-300 transform translate-y-0 opacity-100 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:opacity-0"
                        >
                            Usuario
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Ingresa tu usuario"
                            className="border border-[#1E6A5C] rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#1E6A5C] peer"
                            onChange={handleChangeUser}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-[#1E6A5C] font-medium mb-2 transition-all duration-300 transform translate-y-0 opacity-100 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:opacity-0"
                        >
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Ingresa tu contraseña"
                            className="border border-[#1E6A5C] rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-[#1E6A5C] peer"
                            onChange={handleChangePass}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#1E6A5C] text-white font-medium py-2 px-4 rounded-md w-full hover:bg-[#175C50] focus:outline-none focus:ring-2 focus:ring-[#1E6A5C]"
                        onClick={handleOnClickSesion}
                    >
                        Iniciar sesión
                    </button>
                </form>
            </div>

            <ModalInformacion openModalInformacion={openModalInfo} handleClickOK={handleClickOkModal} mensaje={mensajeModal}/>


            <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-[#D1F2EB] to-[#BFEEDD]" />
        </div>
    )
}