import React from 'react'
import { useCurrentUser } from "../contexts/CurrentUserContext";

const DetailedEvent = (props) => {
    const {
        title,
        date_created,
        date_updated,
        date_of_event,
        need_travel,
        money_required,
        owner,
        is_owner,
        is_overdue,
        id,
    } = props;

    const currentUser = useCurrentUser();


    return <div><p>Date created:{date_created}</p>
  <p>Date updated:{date_updated}</p>
  <p>Date of event:{date_of_event}</p>
  <p>id:{id}</p>
  <p>{is_overdue}</p>
  <p>{is_owner}</p>
  <p>{owner}</p>
  <p>{need_travel}</p>
  <p>{money_required}</p>
  <p>{title}</p>
  </div>;
}

export default DetailedEvent