import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import Asset from '../../components/Asset';
import DetailedEvent from '../../components/DetailedEvent';
import ListViewItem from '../../components/ListViewItem';
import { useCurrentUser } from '../../contexts/CurrentUserContext';


const EventsPage = () => {
    const currentUser = useCurrentUser();
    const [events, setEvents] = useState({results: []});
    const [hasLoaded, setHasLoaded] = useState(false);
    const {pathName} = useLocation();
    
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
    }, [pathName]);

    return (
        <Container fluid className="text-center">
            <Row className="mt-3">
        {
            hasLoaded ? (
                events.results.length ? (
                    events.results.map((event) => {
                        return <ListViewItem {...event} key={event.id}/>
                    })
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