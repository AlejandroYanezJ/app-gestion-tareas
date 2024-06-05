import { useNavigate } from "react-router-dom";


export const NotFound = () => {
    
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate("/");
    }

    return (
        <div>
            <div>
                <div>
                    <p>
                         No se logra encontrar el recurso solicitado
                    </p>
                </div>
                <div>
                    <button
                        onClick={handleClickHome}>
                        Volver al Inicio
                    </button>
                </div>
            </div>
        </div>
    );
}