import { MdOutlineEdit } from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
import EditMerchModal from "../EditMerchModal/EditMerchModal";
import OpenModalButton from "../OpenModalButton";

function MerchTile({ merch }) {
    return (
        <>
            <div className="tour-tile">
                <div className="merch-edit">
                    <p>{ `${merch.name}` }</p>
                    <p>{ `$${merch.price}` }</p>
                </div>
                <div className="tour-buttons">
                    <OpenModalButton
                        modalComponent={<EditMerchModal merch={merch}/>}
                        buttonText={<MdOutlineEdit />}
                        newClass='edit-buttons'
                    />
                    {/* <OpenModalButton
                        modalComponent={<DeleteTourModal tourId={tour.id}/>}
                        buttonText={<IoTrashBinOutline />}
                        newClass='delete-buttons'
                    /> */}
                    <IoTrashBinOutline className="delete-buttons" />
                </div>


            </div>
        </>
    )
}

export default MerchTile;
