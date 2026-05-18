import { useState } from 'react';

type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);

    // const name = formData.get('text') as string;
    const person: Person = { name: data.text as string };
  };

  return (
    <section>
      <h2 className="font-bold text-2xl">Events</h2>
      <form
        onSubmit={handleSubmit}
        className="form flex flex-col mt-10 space-y-2"
      >
        <input
          type="text"
          name="text"
          value={text}
          className="form-input mt-1 border p-2"
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="email"
          name="email"
          value={email}
          className="form-input mt-1 border p-2"
          onChange={handleChange}
        />
        <button className="w-full bg-gray-600 p-2 text-white" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Component;
