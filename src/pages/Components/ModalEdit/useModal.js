import { useState } from 'react'

const useModal = () => {
    const [isShowingEdit, setIsShowing] = useState(false)

    function toggleEdit() {
        setIsShowing(!isShowingEdit)
    }

    return {
        isShowingEdit,
        toggleEdit,
    }
}

export default useModal
