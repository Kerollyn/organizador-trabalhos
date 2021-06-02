import Loader from 'react-loader-spinner'
import { Container } from './styles'

function CustomLoader( { isShowing } ) {
    return isShowing
    ? (
        <Container>
            <div  className='loaderPlacer'>
                <Loader
                    type="TailSpin"
                    color="#9e1a2a"
                    height={150}
                    width={150}
                    timeout={300000000000000}
                    visible={isShowing}
                />
            </div>
        </Container>
    )
    : null
}

export default CustomLoader