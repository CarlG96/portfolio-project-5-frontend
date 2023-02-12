import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults';
import DetailedTask from './DetailedTask';

/*
* Handles the page upon which the DetailedTask component is placed.
*/

const TaskPage = () => {
  const { id } = useParams();
  const [ task, setTask ] = useState({
    results: []
  });

  // Handles lifecycle of the page.
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{data: task}] = await Promise.all([
          axiosReq.get(`/tasks/${id}`)
        ]);
        setTask({results: [task]});
      } catch(err) {
        // console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <div><DetailedTask {...task.results[0]} setTask={setTask} taskPage /></div>
  );
};

export default TaskPage;