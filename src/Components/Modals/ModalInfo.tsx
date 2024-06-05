
export const ModalInformacion = ({openModalInformacion = false, mensaje = "", handleClickOK =()=>{} }) => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${openModalInformacion ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <div className="text-center mb-4">
                    <p className="text-lg">{mensaje}</p>
                </div>
                <div className="text-center">
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={handleClickOK}
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalInformacion;
