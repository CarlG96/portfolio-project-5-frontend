import React from "react";
import { Form } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

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
    taskPage,
  } = props;

  const currentUser = useCurrentUser();
   return <Form>
    
   </Form>
  // // the .. needs to replace with edit and delete capability.
  // {is_owner && taskPage && "..."}
  // </div>;
};

export default DetailedTask;
