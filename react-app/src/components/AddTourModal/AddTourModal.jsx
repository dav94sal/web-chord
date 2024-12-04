import { useState } from "react";
import { useDispatch } from "react-redux"
import { newTour } from "../../redux/tour";
import { useModal } from "../../context/Modal"

function AddTourModal() {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(newTour({ name }))
            .then(() => closeModal())
    }

    return (
        <>
            <h2>Create Tour</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name your Tour..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <button type="submit" className="buttons">Create Tour</button>
            </form>
        </>
    )
}

export default AddTourModal;
