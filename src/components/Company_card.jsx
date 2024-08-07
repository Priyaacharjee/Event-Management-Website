// -----------------------------------------------------------------------  WITHOUT PROPERTIES ------------------------------------------------------------

// import React from 'react';

// export default function CompanyCard() {
//   return (
//     <div className="main grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-6">
//       {/*--------------------  COMPANY 1 ------------------------------ */}
//       <div className="flex justify-center items-center">
//         <div className="card rounded-xl w-44 h-46 justify-center shadow-md bg-zinc-100 flex flex-col items-center">
//           <div className="rounded-xl h-20 bg-gradient-to-r from-blue-900 to-cyan-600 shadow-2xl w-full"></div>
//           <img
//             className="rounded-full w-24 h-24 mt-[-60px] border-4 border-white-500/100 shadow-2xl"
//             src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg"
//             alt="Company Logo"
//           />
//           <div className="p-2 pt-[10px]">Provided us : <i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i><i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i><i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i><i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i></div>
//         </div>
//       </div>

//       {/*--------------------  COMPANY 2 ------------------------------ */}
//       <div className="flex justify-center items-center">
//         <div className="card rounded-xl w-44 h-46 justify-center shadow-md bg-zinc-100 flex flex-col items-center">
//           <div className="rounded-xl h-20 bg-gradient-to-r from-blue-900 to-cyan-600 shadow-2xl w-full"></div>
//           <img
//             className="rounded-full w-24 h-24 mt-[-60px] border-4 border-white-500/100 shadow-2xl"
//             src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg"
//             alt="Company Logo"
//           />
//           <div className="p-2 pt-[10px]">Provided us : <i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i><i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i><i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i></div>
//         </div>
//       </div>

//       {/*--------------------  COMPANY 3 ------------------------------ */}
//       <div className="flex justify-center items-center">
//         <div className="card rounded-xl w-44 h-46 justify-center shadow-md bg-zinc-100 flex flex-col items-center">
//           <div className="rounded-xl h-20 bg-gradient-to-r from-blue-900 to-cyan-600 shadow-2xl w-full"></div>
//           <img
//             className="rounded-full w-24 h-24 mt-[-60px] border-4 border-white-500/100 shadow-2xl"
//             src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg"
//             alt="Company Logo"
//           />
//           <div className="p-2 pt-[10px]">Provided us :  <i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i> <i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i> <i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i></div>
//         </div>
//       </div>

//       {/*--------------------  COMPANY 4 ------------------------------ */}
//       <div className="flex justify-center items-center">
//         <div className="card rounded-xl w-44 h-46 justify-center shadow-md bg-zinc-100 flex flex-col items-center">
//           <div className="rounded-xl h-20 bg-gradient-to-r from-blue-900 to-cyan-600 shadow-2xl w-full"></div>
//           <img
//             className="rounded-full w-24 h-24 mt-[-60px] border-4 border-white-500/100 shadow-2xl"
//             src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg"
//             alt="Company Logo"
//           />
//           <div className="p-2 pt-[10px]">Provided us :  <i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i> <i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i></div>
//         </div>
//       </div>

//       {/*--------------------  COMPANY 5 ------------------------------ */}
//       <div className="flex justify-center items-center">
//         <div className="card rounded-xl w-44 h-46 justify-center shadow-md bg-zinc-100 flex flex-col items-center">
//           <div className="rounded-xl h-20 bg-gradient-to-r from-blue-900 to-cyan-600 shadow-2xl w-full"></div>
//           <img
//             className="rounded-full w-24 h-24 mt-[-60px] border-4 border-white-500/100 shadow-2xl"
//             src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg"
//             alt="Company Logo"
//           />
//           <div className="p-2 pt-[10px]">Provided us : <i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i><i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i><i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i><i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i></div>
//         </div>
//       </div>

//       {/*--------------------  COMPANY 6 ------------------------------ */}
//       <div className="flex justify-center items-center">
//         <div className="card rounded-xl w-44 h-46 justify-center shadow-md bg-zinc-100 flex flex-col items-center">
//           <div className="rounded-xl h-20 bg-gradient-to-r from-blue-900 to-cyan-600 shadow-2xl w-full"></div>
//           <img
//             className="rounded-full w-24 h-24 mt-[-60px] border-4 border-white-500/100 shadow-2xl"
//             src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg"
//             alt="Company Logo"
//           />
//           <div className="p-2 pt-[10px]">Provided us : <i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i><i class="fa fa-star text-xs text-yellow-500" aria-hidden="true"></i></div>
//         </div>
//       </div>
//     </div>
//   );
// }


// -----------------------------------------------------------------------  WITH PROPERTIES ------------------------------------------------------------

import React from 'react';

const CompanyCard = ({ logo, rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className={`fa fa-star text-xs ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
      aria-hidden="true"
    />
  ));

  return (
    <div className="flex justify-center items-center">
      <div className="card rounded-xl w-44 h-46 justify-center shadow-md bg-zinc-100 flex flex-col items-center">
        <div className="rounded-xl h-20 bg-gradient-to-r from-blue-900 to-cyan-600 shadow-2xl w-full"></div>
        <img
          className="rounded-full w-24 h-24 mt-[-60px] border-4 border-white-500/100 shadow-2xl"
          src={logo}
          alt="Company Logo"
        />
        <div className="p-2 pt-[10px]">Rating : {stars}</div>
      </div>
    </div>
  );
};

const CompanyGrid = ({ companies }) => {
  return (
    <div className="main grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-6">
      {companies.map((company, index) => (
        <CompanyCard key={index} logo={company.logo} rating={company.rating} />
      ))}
    </div>
  );
};

const companiesData = [
  {
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg',
    rating: 4,
  },
  {
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg',
    rating: 3,
  },
  {
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg',
    rating: 3,
  },
  {
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg',
    rating: 2,
  },
  {
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg',
    rating: 4,
  },
  {
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg',
    rating: 2,
  },
];

export default function App() {
  return <CompanyGrid companies={companiesData} />;
}

