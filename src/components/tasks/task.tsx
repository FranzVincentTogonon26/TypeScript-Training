import { useEffect, useState } from 'react';

import { type Task } from './types';
import FormPage from './formPage';
import List from './list';

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function updateStorage(tasks: Task[]): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function Component() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  };

  const toggleTask = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  useEffect(() => {
    updateStorage(tasks);
  }, [tasks]);

  return (
    <div className="flex-1 justify-center items-center space-y-4">
      <h1 className="text-3xl font-bold">Task</h1>
      <FormPage addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}

export default Component;
