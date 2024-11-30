import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { getAllTours } from '../../redux/tour';
import { useLoading } from '../../context/LoadingContext';
import './manage-page.css'

function ManageMerch() {
    const { isLoading, setIsLoading } = useLoading()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch().
            then(() => setIsLoading(false))
    })

    return (
        <div className="content-layout">
            <p>Manage Merch</p>
            { isLoading && <p>HEEYYYY</p>}
        </div>
    )
}

export default ManageMerch;
