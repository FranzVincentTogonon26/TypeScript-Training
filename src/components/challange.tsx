// type NameProps = {
//   type: 'basic' | 'advanced';
//   name: string;
//   email?: string;
// };

// function Component(pros: NameProps) {
//   const { type, name, email } = pros;

//   const alertType = type === 'basic' ? 'alert-error' : 'alert-success';
//   const classname = `alert ${alertType}`;

//   return (
//     <div className="space-y-4">
//       <div className={classname}>
//         <p>Name: {name}</p>
//         {email && <p>Email: {email}</p>}
//       </div>
//     </div>
//   );
// }

// export default Component;

type BasicProfileProps = {
  type: 'basic';
  name: string;
};

type AdvanceProfileProps = {
  type: 'advanced';
  name: string;
  email: string;
};

type ProfileProps = BasicProfileProps | AdvanceProfileProps;

function Component(props: ProfileProps) {
  const { type, name } = props;

  if (type === 'basic') {
    return (
      <div role="alert" className="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Name: {name}</span>
      </div>
    );
  } else {
    return (
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Name: {name}</span>
        <span>Email: {props.email}</span>
      </div>
    );
  }
}

export default Component;
