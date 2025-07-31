import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addArtistById } from "../../redux/artist";

function ArtistForm() {
    const [artistName, setArtistName] = useState("");
    const [urls, setUrls] = useState({});
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(urls)
    }, [urls])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        const formData = new FormData();
        formData.append("artist_name", artistName);

        for (const key in urls) {
            formData.append(`${key}_url`, urls[key]);
        }

        if (image) {
            formData.append("file", image);
        }

        setIsLoading(true);

        let validate = {};

        // console.log("Submitting artist form with data: ", formData);

        const artist = await dispatch(addArtistById(formData))
            .catch(err => validate = { ...err })

        if (artist?.errors) {
            validate = { ...validate, ...artist.errors };
        }

        if (artist?.file?.length) {
            validate.file = artist.file[0]
        }

        setErrors({ ...validate })

        if (!Object.values(validate).length) {
            navigate("/feed");
        }
        setIsLoading(false)
    };

    return (
        <>
            <h1>Artist Form</h1>
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <input
                    type="text"
                    value={artistName}
                    onChange={(e) => setArtistName(e.target.value)}
                    placeholder="Artist Name"
                    required
                />
                {errors.artistName && <p>{errors.artistName}</p>}

                <p>Profile Image</p>
                <input
                    type="file"
                    defaultValue={image}
                    accept=".pdf,.png,.jpg,.jpeg,.gif"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                {errors.file && <p>{errors.file}</p>}

                <div>
                    <h3>Links</h3>
                    <input
                        type="text"
                        value={urls.x || ""}
                        name="x"
                        onChange={e => setUrls({...urls, x: e.target.value })}
                        placeholder="X (Twitter)"
                    />
                    <input
                        type="text"
                        value={urls.facebook || ""}
                        name="facebook"
                        onChange={e => setUrls({...urls, facebook: e.target.value })}
                        placeholder="Facebook"
                    />
                    <input
                        type="text"
                        value={urls.instagram || ""}
                        name="instagram"
                        onChange={e => setUrls({...urls, instagram: e.target.value })}
                        placeholder="Instagram"
                    />
                    <input
                        type="text"
                        value={urls.youtube || ""}
                        name="youtube"
                        onChange={e => setUrls({...urls, youtube: e.target.value })}
                        placeholder="YouTube"
                    />
                    <input
                        type="text"
                        value={urls.spotify || ""}
                        name="spotify"
                        onChange={e => setUrls({...urls, spotify: e.target.value })}
                        placeholder="Spotify"
                    />
                    <input
                        type="text"
                        value={urls.pandora || ""}
                        name="pandora"
                        onChange={e => setUrls({...urls, pandora: e.target.value })}
                        placeholder="Pandora"
                    />
                </div>
                <button
                    type="submit"
                    className="buttons fill-color-black"
                    disabled={isLoading}>Submit</button>
            </form>
        </>
    )
}

export default ArtistForm;
