import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import DetailedTask from '../../components/DetailedTask';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const TasksPage = () => {
    const currentUser = useCurrentUser();
    const [tasks, setTasks] = useState({results: []});
    const [hasLoaded, setHasLoaded] = useState(false);
    const {pathName} = useLocation();
    
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                setHasLoaded(true);
                const {data} = await axiosReq.get(`/tasks/`);
                setTasks(data);
                
            } catch (err){
                console.log(err);
            }
        }

        setHasLoaded(false);
        fetchTasks();
    }, [pathName]);

    return (
        <>
        {
            hasLoaded ? (
                tasks.results.length ? (
                    tasks.results.map((task) => {
                        return <DetailedTask key={task.id} {...task} setTasks={setTasks}/> //Turn into non-detailed task
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

export default TasksPage