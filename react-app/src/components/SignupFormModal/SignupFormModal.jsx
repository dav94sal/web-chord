import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkSignup } from "../../redux/session";
import "./SignupForm.css";

function SignupFormModal() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isArtist, setIsArtist] = useState(false);
  const [artistName, setArtistName] = useState("");
  const [image, setImage] = useState(null)
  const [imageLoading, setImageLoading] = useState(false)
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field",
      });
    }

    const user = await dispatch(
      thunkSignup({
            email,
            username,
            password,
            isArtist,
            artistName
          })
        )

    if (user?.errors) {
      setErrors(user.errors);
    } else {
      closeModal();
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      {errors.server && <p>{errors.server}</p>}
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
        {/* <div> */}
          <label id="artist-label">
            Artist?
            <input
              type="checkbox"
              // value={isArtist}
              onChange={() => setIsArtist(!isArtist)}
              />
          </label>
          {errors.isArtist && <p>{errors.isArtist}</p>}
          <input
            type="text"
            placeholder="Artist Name"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            />
          {errors.artistName && <p>{errors.artistName}</p>}
        {/* </div> */}
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
        {/* {errors.image && <p>{errors.image}</p>}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        /> */}
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        <button type="submit" className="buttons">Sign Up</button>
      </form>
    </>
  );
}

export default SignupFormModal;
