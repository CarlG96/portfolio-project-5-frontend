import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

const ProfilePage = () => {
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [changeImage, setChangeImage] = useState(false);
  const [removeChangeImageButton, setRemoveChangeImageButton] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();

  const [profileData, setProfileData] = useState({
    name: "",
    image: "",
    owner: "",
  });

  const { name, image, owner } = profileData;

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/${id}`);
        const { name, owner, image } = data;

        setProfileData({ name, owner, image });
        console.log(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfileData();
  }, [currentUser, history, id]);

  const handleSubmit = async (event) => {};

  return (
    <Container className="text-center">
      <h1 className="mt-3">{owner}'s Profile</h1>
      <Avatar src={currentUser?.profile_image} height={150} />
      <Form onSubmit={handleSubmit} className="text-center mt-3">
        <Form.Group controlId="name">
          <Form.Label>Preferred Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Preferred Name Here"
            defaultValue={name}
            disabled={isDisabled}
            // onChange={handleChange}
            className="text-center"
          ></Form.Control>
        </Form.Group>
        {errors?.name?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group controlId="image" className="text-center">
          <Form.Label>Image</Form.Label>
          <Form.File
          accept="image/*"
          className="text-center  "
          name="image">

          </Form.File>
        </Form.Group>
        {errors?.image?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        {isDisabled ? (
          <></>
        ) : (
          <Button
          type="submit"
          className={`${btnStyles.Button} ${btnStyles.Bright}`}
          >
            Save
          </Button>
        )}
      </Form>
      {isDisabled ? (
        <Button
        onClick={handleEdit}
        className={`${btnStyles.Button} ${btnStyles.Bright}`}>
          Edit Profile?
        </Button>
      ) : !isDisabled && !removeChangeImageButton ? (
        <Button
          onClick={handleChangeImage}
          className={`${btnStyles.Button} ${btnStyles.Bright}`}
        >
          Change Image?
        </Button>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default ProfilePage;
