import { MdOutlineEdit } from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
import EditMerchModal from "../EditMerchModal";
import DeleteMerchModal from "../DeleteModals/DeleteMerchModal";
import OpenModalButton from "../OpenModalButton";
import "../ManagePage/manage-page.css"

function MerchTile({ merch }) {
    merch.price = parseFloat(merch.price)
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
                    <OpenModalButton
                        modalComponent={<DeleteMerchModal merchId={merch.id}/>}
                        buttonText={<IoTrashBinOutline />}
                        newClass='delete-buttons'
                    />
                </div>


            </div>
        </>
    )
}

export default MerchTile;
