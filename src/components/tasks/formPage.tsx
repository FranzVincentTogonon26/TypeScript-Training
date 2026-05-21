import { useState } from 'react';
import { type Task } from './types';

type FormProps = {
  addTask: (task: Task) => void;
};

export default function FormPage({ addTask }: FormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert('Please enter a task..');
      return;
    }

    addTask({
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    });

    setText('');
  };

  return (
    <form className="flex gap-1" onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder="Task.."
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn">
        Add task
      </button>
    </form>
  );
}
