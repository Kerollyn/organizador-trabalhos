import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    width: 100vw;
    height: 100vh;
    background-color: #333;
    opacity: 0.9;

    div.loaderPlacer {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
`
