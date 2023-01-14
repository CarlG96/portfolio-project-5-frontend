import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults';
import DetailedEvent from '../../components/DetailedEvent';


const EventPage = () => {

    const { id } = useParams();
    const [ event, setEvent ] = useState({
        results: []
    });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: event}] = await Promise.all([
                    axiosReq.get(`/events/${id}`)
                ]);
                setEvent({results: [event]});
                console.log(event);
            } catch(err) {
                console.log(err);
            }
        };

        handleMount();
    }, [id]);

    
    return (
        <div><DetailedEvent {...event.results[0]} setEvent={setEvent} /></div>
    )
}

export default EventPage