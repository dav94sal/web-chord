import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PiPlusCircleFill } from "react-icons/pi";
import { getArtistMerch } from '../../../redux/merch';
import useWindowDimensions from '../../../context/useWindowDimensions';
import MerchTile from './MerchTile';
import AddMerchModal from '../../modals/AddMerchModal/AddMerchModal';
import OpenModalButton from '../../modals/OpenModalButton';

function ManageMerch({ artistId }) {
    const [isLoading, setIsLoading] = useState(true)
    let merch = useSelector(state => state.merch)
    merch = Object.values(merch).reverse()
    const dispatch = useDispatch()
    let { isMobile } = useWindowDimensions()

    useEffect(() => {
        dispatch(getArtistMerch(artistId))
            .then(() => setIsLoading(false))
    }, [dispatch, artistId, setIsLoading])

    return (
        <>
            {!isLoading && <div className="content-layout">
                {!isMobile && <img
                    src='https://web-chord.s3.us-east-1.amazonaws.com/seed-images/pexels-thibault-trillet-44912-167636.jpg'
                    className='back-image'
                />}
                <div className='content'>

                    <OpenModalButton
                        modalComponent={<AddMerchModal />}
                        buttonText={<PiPlusCircleFill />}
                        newClass="add-button"
                    />

                    {merch.map(merch => (
                        <MerchTile
                            key={`tour${merch.id}`}
                            merch={merch}
                        />
                    ))}

                </div>
            </div>}
        </>
    )
}

export default ManageMerch;
