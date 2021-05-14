import React from 'react'

import PDFViewer from 'pdf-viewer-reactjs'

const viewPdf = () => {
    return (
        <PDFViewer
            document={{
                url: '',
            }}
        />
    )
}

export default viewPdf