import { type PropsWithChildren } from 'react';

// type PropComponents = {
//   name: string;
//   age: number;
//   children: React.ReactNode;
// };
type PropComponents = PropsWithChildren<{
  name: string;
  age: number;
}>;

function Component({ name, age, children }: PropComponents) {
  return (
    <div className="text-left font-semibold">
      <h2 className="text-center text-3xl">Props</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      {children}
    </div>
  );
}

export default Component;
