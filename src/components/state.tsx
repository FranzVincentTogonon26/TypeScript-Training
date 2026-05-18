import { useState } from 'react';

type Links = {
  id: number;
  url: string;
  text: string;
};

const navLinks = [
  {
    id: 1,
    url: 'some URL',
    text: 'Some Text',
  },
  {
    id: 2,
    url: 'some URL',
    text: 'Some Text',
  },
];

function Component() {
  //   const [text, setText] = useState('Franz'); // typescript automatically infer
  //   const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Links[]>(navLinks);

  return (
    <div>
      <h2>State</h2>
      <button
        onClick={() => {
          //   setText('Togonon');
          //   setList(['Fanz', 'Vincent']);
          setLinks([...links, { id: 3, url: 'url test', text: 'franz' }]);
        }}
      >
        Click
      </button>
      {/* <p>{text}</p> */}
      {/* <p>{list}</p> */}
      <p>
        {links.map((link) => (
          <div key={link.id}>
            <p>{link.url}</p>
            <p>{link.text}</p>
          </div>
        ))}
      </p>
    </div>
  );
}

export default Component;
