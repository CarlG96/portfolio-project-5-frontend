import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
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
        <>
        {
            hasLoaded ? (
                events.results.length ? (
                    events.results.map((event) => {
                        return <ListViewItem {...event} key={event.id}/>
                    })
                ) :
                <p>No results found!</p>
            ) : (
                <p>Not loaded yet!</p>
            )
        }
        </>
    )
}

export default EventsPage