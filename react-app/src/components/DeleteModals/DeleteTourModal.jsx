import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { deleteTour } from "../../redux/tour";
import "./delete_modals.css"

function DeleteTourModal({ tourId  }) {
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()
    const { closeModal } = useModal();

    const handleClick = async e => {
        e.preventDefault();
        setErrors({})

        // Dispatch thunk
        const response =  dispatch(deleteTour(tourId))
            .catch(err => setErrors({...err}))

        if (response.errors) setErrors({ ...errors, ...response.errors})
        else if (!Object.entries(errors).length) closeModal()
    }

    return (
        <>
            <h2>Delete Tour?</h2>
            {errors.errors && <p>{errors.errors}</p>}
            <p className="delete-prompt">
                Are you sure you want to remove this tour and all of its shows?</p>
            <button
                className="buttons"
                onClick={handleClick}
            >Yes</button>
            <button
                className="buttons"
                onClick={() => closeModal()}
            >No</button>
        </>
    )
}

export default DeleteTourModal;
