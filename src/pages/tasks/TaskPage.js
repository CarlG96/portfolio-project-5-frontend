import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults';

const TaskPage = () => {

  const { id } = useParams();
  const { task, setTask } = useState({
    results: []
  })

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{data: task}] = await Promise.all([
          axiosReq.get(`/tasks/${id}`)
        ]);
        setTask({results: [task]});
        console.log(task);
      } catch(err) {
        console.log(err);
      }
    };


    handleMount();
  }, []);


  return (
    <div>TaskPage</div>
  )
}

export default TaskPage