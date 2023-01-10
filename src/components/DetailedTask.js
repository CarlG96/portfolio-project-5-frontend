import React from "react";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const DetailedTask = (props) => {
  const {
    date_created,
    date_updated,
    description,
    due_date,
    id,
    is_overdue,
    is_owner,
    owner,
    priority,
    state,
    title,
  } = props;

  const currentUser = useCurrentUser();
  return <div><p>Date created:{date_created}</p>
  <p>Date updated:{date_updated}</p>
  <p>Description:{description}</p>
  <p>Due date:{due_date}</p>
  <p>id:{id}</p>
  <p>{is_overdue}</p>
  <p>{is_owner}</p>
  <p>{owner}</p>
  <p>{priority}</p>
  <p>{state}</p>
  <p>{title}</p>
  </div>;
};

export default DetailedTask;
