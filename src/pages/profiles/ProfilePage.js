import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import btnStyles from "../../styles/Button.module.css";
import genericStyles from "../../styles/GenericStyles.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import { useRef } from "react";

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
  const imageFile = useRef();

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

  const handleEdit = () => {
    setIsDisabled(false);
  };

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        image: data.image,
      }));
      history.push('/');
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  return (
    <Container className={`${genericStyles.GenericForm} mt-3 mb-3 text-center`}>
      <h1 className={` mt-3 ${genericStyles.GenericHeader}`}>
        {name.length ? `${name}'s Profile` : `${owner}'s Profile`}
      </h1>
      <Avatar src={currentUser?.profile_image} height={150} />
      <Form
        onSubmit={handleSubmit}
        className={`text-center mt-3 ${genericStyles.GenericText}`}
      >
        <Form.Group controlId="name">
          <Form.Label className={genericStyles.GenericHeader}>
            Preferred Name
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Preferred Name Here"
            defaultValue={name.length? name : owner}
            disabled={isDisabled}
            onChange={handleChange}
            className={`text-center ${genericStyles.GenericField}`}
          ></Form.Control>
        </Form.Group>
        {errors?.name?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group controlId="image" className="text-center">
          <Form.Label className={genericStyles.GenericHeader}>Image</Form.Label>
          <Form.File
            accept="image/*"
            ref={imageFile}
            className={`text-center ${genericStyles.GenericField}`}
            name="image"
            disabled={isDisabled}
            defaultValue={image.URL}
            onChange={(e) => {
              if (e.target.files.length) {
                setProfileData({
                  ...profileData,
                  image: URL.createObjectURL(e.target.files[0]),
                });
              }
            }}
          >
            
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
          className={`${btnStyles.Button} ${btnStyles.Bright}`}
        >
          Edit Profile?
        </Button>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default ProfilePage;
