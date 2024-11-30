import { useSelector } from 'react-redux';
import { useLoading } from '../../context/LoadingContext';
import TourTile from './TourTile';
import './manage-page.css'

function ManageTours() {
    const { isLoading } = useLoading()
    let tours = useSelector(state => state.tours)
    tours = Object.values(tours)

    return (
        <div className="content-layout">
            <p>Manage Tours</p>
            { !isLoading && tours.map(tour => (
                <TourTile
                    key={`tour${tour.id}`}
                    tour={tour}
                />
            ))}

        </div>
    )
}

export default ManageTours;
