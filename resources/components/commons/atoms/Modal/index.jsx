import RoundedImg from "../RoundedImg";

const Modal = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;

    return (
        <>
            <div onClick={onClose} className={`fixed top-0 left-0 mx-auto flex h-[100vh] w-full items-center justify-between bg-black/50 px-4 ${ isOpen ? 'z-50 opacity-100' : '-z-1 opacity-0' }`} />

            <div className={`${ isOpen ? 'z-51 -translate-x-1/2' : '-z-1 translate-x-100' } fixed top-1/2 left-1/2 h-auto w-[420px] -translate-y-1/2 bg-(--bg-tertiary-cray) transition-transform duration-300 max-md:w-[90%] max-sm:w-[100%]`}>
                <button onClick={onClose} className="absolute top-4 right-4 cursor-pointer">
                    <i className="fa-solid fa-xmark text-(--text-color-black)"></i>
                </button>

                <img 
                    src={data.background} 
                    alt="Avatar"
                    className="h-full w-full object-cover"
                />

                <div>
                    <h2 className="relative p-4 text-left text-(--text-color-black)">{data.title}</h2>
                    <p className="text-xl">{data.desc}</p>

                    <div className="absolute -top-4 right-4 z-1 flex">
                        {data.list_tech.map((item, index) => {
                            <RoundedImg key={index} src={item.icon} index={index} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;