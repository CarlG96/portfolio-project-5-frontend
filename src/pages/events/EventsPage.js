import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import Asset from '../../components/Asset';
import DetailedEvent from './DetailedEvent';
import ListViewItem from '../../components/ListViewItem';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import btnStyles from "../../styles/Button.module.css";


const EventsPage = () => {
    const currentUser = useCurrentUser();
    const [events, setEvents] = useState({results: []});
    const [hasLoaded, setHasLoaded] = useState(false);
    const {pathName} = useLocation();
    const [viewUpcomingEvents, setViewUpcomingEvents] = useState(true);
    
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setHasLoaded(true);
                const {data} = await axiosReq.get(`/events/`);
                setEvents(data);
                
            } catch (err){
                console.log(err);
            }
        }

        setHasLoaded(false);
        fetchEvents();
    }, [pathName, viewUpcomingEvents]);

    const handleSwitch = () => {
        setViewUpcomingEvents(!viewUpcomingEvents);
    }

    return (
        <Container fluid className="text-center">
            <Row className="text-center">
                <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                onClick={handleSwitch}>
                    {viewUpcomingEvents ? (`View Past Events`) : (`View Upcoming Events`)}
                </Button>
            </Row>
            <Row className="mt-3">
        {
            hasLoaded ? (
                events.results.length ? (
                    viewUpcomingEvents ? (events.results.map((event) => !event.is_overdue ? (<ListViewItem {...event} key={event.id}/>) : (<></>)
                        
                    )) : (events.results.map((event) => event.is_overdue ? (<ListViewItem {...event} key={event.id}/>) : (<></>)))
                ) :
                <Asset spinner />
            ) : (
                <Asset spinner />
            )
        }
        </Row>
        </Container>
        
    )
}

export default EventsPage