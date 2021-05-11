import { useState } from 'react'

const useModal = () => {
    const [isShowingDetail, setIsShowing] = useState(false)

    function toggleDetail() {
        setIsShowing(!isShowingDetail)
    }

    return {
        isShowingDetail,
        toggleDetail,
    }
}

export default useModal
