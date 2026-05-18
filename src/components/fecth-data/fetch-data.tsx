// import { useState, useEffect } from 'react';
// import { type Tour, tourSchema } from './types';

// const url = 'https://www.course-api.com/react-tours-project';

// function Component() {
//   const [tours, setTours] = useState<Tour[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState<string | null>(null);

//   useEffect(() => {
//     const fecthData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error('Failed to fetch touurss..');
//         }

//         const rawData: Tour[] = await response.json();

//         setTours(result.data);
//       } catch (error) {
//         const errorMessage =
//           error instanceof Error ? error.message : ' There was an error..';
//         setIsError(errorMessage);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fecthData();
//   }, []);

//   if (isLoading) {
//     return <h3>Loading..</h3>;
//   }

//   if (isError) {
//     return <h3>Error: ${isError}</h3>;
//   }

//   return (
//     <div className="max-w-3xl">
//       <h2 className="font-bold text-2xl mb-2">Tours</h2>
//       <ul className="list bg-base-100 rounded-box shadow-md ">
//         {tours.map((tour, index) => (
//           <li key={tour.id} className="list-row">
//             <div className="text-4xl font-thin opacity-30 tabular-nums">
//               0{index + 1}
//             </div>
//             <div>
//               <img className="size-10 rounded-box" src={tour.image} />
//             </div>
//             <div className="list-col-grow text-left">
//               <div className="font-semibold">{tour.name}</div>
//               <div className="text-sm opacity-60">{tour.info}</div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Component;

import { fetchTours } from './types';
import { useQuery } from '@tanstack/react-query';

function Component() {
  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ['tours'],
    queryFn: fetchTours,
  });

  if (isPending) return <h2>Loading..</h2>;
  if (isError) return <h2>Error: {error.message}</h2>;

  return (
    <div className="">
      <h2 className="mb-1">Tours</h2>
      <ul className="list bg-base-100 rounded-box shadow-md ">
        {tours.map((tour, index) => (
          <li key={index} className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">
              {(index + 1).toString().padStart(2, '0')}
            </div>
            <div>
              <img className="size-10 rounded-box" src={tour.image} />
            </div>
            <div className="list-col-grow text-left">
              <div className="font-semibold">{tour.name}</div>
              <div className="text-sm opacity-60">{tour.info}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Component;
