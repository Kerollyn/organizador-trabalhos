import { useState } from 'react'

const useLoader = () => {
    const [isShowingLoader, setIsShowingLoader] = useState(false)

    function toggleLoader() {
        setIsShowingLoader(!isShowingLoader)
    }

    return {
        isShowingLoader,
        toggleLoader,
    }
}

export default useLoader
