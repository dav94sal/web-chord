import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { deleteShow } from "../../../redux/tour";
import "./delete_modals.css"

function DeleteShowModal({ show }) {
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()
    const { closeModal } = useModal();

    const handleClick = async e => {
        e.preventDefault();
        setErrors({})

        // Dispatch thunk
        const response =  dispatch(deleteShow(show.tour_id, show.id))
            .catch(err => setErrors({...err}))

        if (response.errors) setErrors({ ...errors, ...response.errors})
        else closeModal()
    }

    return (
        <>
            <h2>Delete Show?</h2>
            {errors.errors && <p>{errors.errors}</p>}
            <p className="delete-prompt">
                Are you sure you want to remove this show from your tour?</p>
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

export default DeleteShowModal;
