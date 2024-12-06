import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArtistMerch } from '../../redux/merch';
import { useLoading } from '../../context/LoadingContext';
import MerchTile from './MerchTile';
import OpenModalButton from '../OpenModalButton';
import '../ManagePage/manage-page.css'

function ManageMerch({ artistId }) {
    const { isLoading, setIsLoading } = useLoading()
    let merch = useSelector(state => state.merch)
    merch = Object.values(merch)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArtistMerch(artistId))
            .then(() => setIsLoading(false))
    }, [dispatch, artistId, setIsLoading])

    return (
        <div className="content-layout">
            <img
                src='https://i.ibb.co/RjqPZyf/pexels-thibault-trillet-44912-167636.jpg'
                className='back-image'
            />
            <div className='content'>

                {/* <OpenModalButton
                    modalComponent={<AddTourModal />}
                    buttonText={<PiPlusCircleFill />}
                    newClass="add-button"
                /> */}

                { !isLoading && merch.map(merch => (
                    <MerchTile
                        key={`tour${merch.id}`}
                        merch={merch}
                    />
                ))}

            </div>
        </div>
    )
}

export default ManageMerch;
