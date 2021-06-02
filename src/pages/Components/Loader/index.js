import Loader from 'react-loader-spinner'
import { Container } from './styles'

function CustomLoader( { isShowing } ) {
    return isShowing
    ? (
        <Container>
            <div  className='loaderPlacer'>
                <Loader
                    type="Watch"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                    visible={isShowing}
                />
            </div>
        </Container>
    )
    : null
}

export default CustomLoader