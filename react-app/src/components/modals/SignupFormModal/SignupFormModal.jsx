import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { thunkSignup } from "../../../redux/session";
import { addArtistById } from "../../../redux/artist";
import "./SignupForm.css";

function SignupFormModal() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isArtist, setIsArtist] = useState(false);
  const [artistName, setArtistName] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({})

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field",
      });
    }

    const formData = new FormData();

    formData.append("file", image)
    formData.append("email", email)
    formData.append("username", username)
    formData.append("password", password)
    formData.append("is_artist", isArtist ? 1 : 0)
    formData.append("artist_name", artistName)

    // console.log(formData)

    setIsLoading(true)

    let validate = {};

    const user = await dispatch(thunkSignup(formData))
      .catch(err => validate = { ...err })

    if (user?.errors) {
      validate = { ...validate, ...user.errors };
    }

    if (user?.file?.length) {
      validate.file = user.file[0]
    }

    setErrors({ ...validate })

    if (!Object.values(validate).length) {
      await dispatch(addArtistById(user.id))
      closeModal()
    }
    setIsLoading(false)
  };

  return (
    <>
      <h2>Sign Up</h2>
      <div>
        {errors.server && <p>{errors.server}</p>}
        {errors.file && <p>{errors.file}</p>}
        {/* {isLoading} */}
      </div>

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p>{errors.email}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {errors.username && <p>{errors.username}</p>}

        <label id="artist-label">
          Artist?
          <input
            type="checkbox"
            // value={isArtist}
            onChange={() => setIsArtist(!isArtist)}
          />
        </label>
        {errors.isArtist && <p>{errors.isArtist}</p>}

        {isArtist &&
          <div className="artist-info">
            <input
              type="text"
              placeholder="Artist Name"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
            />
            {errors.artistName && <p>{errors.artistName}</p>}

            <p>Display Image</p>
            <input
              type="file"
              defaultValue={image}
              accept=".pdf,.png,.jpg,.jpeg,.gif"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {errors.file && <p>{errors.file}</p>}
          </div>
        }

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <p>{errors.password}</p>}

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

        <button
          type="submit"
          className="buttons"
          disabled={isLoading}>Sign Up</button>
      </form>
    </>
  );
}

export default SignupFormModal;
