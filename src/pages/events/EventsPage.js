import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import DetailedEvent from "./DetailedEvent";
import ListViewItem from "../../components/ListViewItem";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
import genericStyles from "../../styles/GenericStyles.module.css";
import NoResults from "../../components/NoResults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

const EventsPage = () => {
  const currentUser = useCurrentUser();
  const [events, setEvents] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathName } = useLocation();
  const [viewUpcomingEvents, setViewUpcomingEvents] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axiosReq.get(`/events/`);
        if(viewUpcomingEvents){
          data.results = data.results.filter((result) => {
            return !result.is_overdue;
          })
        
        }
        else {
          data.results = data.results.filter((result) => {
            return result.is_overdue;
          })
        }
        setEvents(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchEvents();
  }, [pathName, viewUpcomingEvents]);

  const handleSwitch = () => {
    setViewUpcomingEvents(!viewUpcomingEvents);
  };

  return (
    <InfiniteScroll
      dataLength={events.results.length}
      loader={<Asset spinner />}
      hasMore={!!events.next}
      next={() => {
        fetchMoreData(events, setEvents);
      }}
    >
    <Container
      fluid
      className={`text-center mt-3 mb-3 ${genericStyles.GenericForm}`}
    >
      <Row className="text-center">
        <Button
          className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
          onClick={handleSwitch}
        >
          {viewUpcomingEvents ? `View Past Events` : `View Upcoming Events`}
        </Button>
      </Row>
      <Row className="mt-3">
        {hasLoaded ? (
          events.results.length ? (
            viewUpcomingEvents ? (
              events.results.map((event) =>
                !event.is_overdue ? (
                  <ListViewItem {...event} key={event.id} />
                ) : (
                  <React.Fragment key={event.id}></React.Fragment>
                )
              )
            ) : (
              events.results.map((event) =>
                event.is_overdue ? (
                  <ListViewItem {...event} key={event.id} />
                ) : (
                  <React.Fragment key={event.id}></React.Fragment>
                )
              )
            )
          ) : viewUpcomingEvents ? (
            <NoResults message="No Upcoming Events found!" />
          ) : (
            <NoResults message="No Past Events found!" />
          )
        ) : (
          <Asset spinner />
        )}
      </Row>
    </Container>
    </InfiniteScroll>
  );
};

export default EventsPage;
