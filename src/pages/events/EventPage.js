import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import DetailedEvent from "./DetailedEvent";

/*
 * Handles the page upon which the DetailedEvent component is placed.
 */

const EventPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({
    results: [],
  });

  // Handles lifecycle of the page.
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: event }] = await Promise.all([
          axiosReq.get(`/events/${id}`),
        ]);
        setEvent({ results: [event] });
      } catch (err) {
        // console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <div>
      <DetailedEvent {...event.results[0]} setEvent={setEvent} eventPage />
    </div>
  );
};

export default EventPage;
