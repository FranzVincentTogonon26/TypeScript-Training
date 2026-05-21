import { type Task } from './types';

type ListProps = {
  tasks: Task[];
  toggleTask: ({ id }: { id: string }) => void;
};

export default function List({ tasks, toggleTask }: ListProps) {
  return (
    <div className="">
      <ul className="list bg-base-100 rounded-box shadow-md ">
        {tasks.map((task) => (
          <li key={task.id} className="list-row">
            <div className="list-col-grow text-left">
              <label className="label ">
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  className="checkbox items-center justify-center text-center"
                  onChange={() => {
                    toggleTask({ id: task.id });
                  }}
                />
                <span className="font-semibold ml-2 text-2xl">
                  {task.description}
                </span>
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
