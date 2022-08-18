import { useState } from "react";

function useModal(){
    const [modal,setModal] = useState(false)

    const closeModal = setModal(false)
    const showModal = setModal(true)

    return [modal,showModal,closeModal]
}

export default useModal;