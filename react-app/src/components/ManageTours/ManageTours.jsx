import { useSelector } from 'react-redux';
import { PiPlusCircleFill } from "react-icons/pi";
import { useLoading } from '../../context/LoadingContext';
import TourTile from './TourTile';
import OpenModalButton from '../OpenModalButton';
import AddTourModal from '../AddTourModal/AddTourModal';
import '../ManagePage/manage-page.css'

function ManageTours() {
    const { isLoading } = useLoading()
    let tours = useSelector(state => state.tours)
    tours = Object.values(tours).reverse()

    return (
        <div className="content-layout">
            <img
                src='https://i.ibb.co/qYTNFMY/pexels-sebastian-ervi-866902-1763075.jpg'
                className='back-image'
            />
            <div className='content'>

                <OpenModalButton
                    modalComponent={<AddTourModal />}
                    buttonText={<PiPlusCircleFill />}
                    newClass="add-button"
                />
                { !isLoading && tours.map(tour => (
                    <TourTile
                        key={`tour${tour.id}`}
                        tour={tour}
                    />
                ))}

            </div>
        </div>
    )
}

export default ManageTours;
