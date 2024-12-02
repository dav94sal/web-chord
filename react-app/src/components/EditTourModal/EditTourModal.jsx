import { useState } from "react";
import { useModal } from "../../context/Modal";

function EditTourModal({ tour }) {
    const [name, setName] = useState(tour.name)
    const { closeModal } = useModal();

    return (
        <>
            <h2>Edit Name</h2>
            <form>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" className="buttons">Submit</button>
                <button
                    type="click"
                    className="buttons"
                    onClick={() => closeModal()}
                >Cancel</button>
            </form>
        </>
    )
}

export default EditTourModal;
