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
    <div id="collaborators" className="flex justify-center items-center">
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
    <div className="py-20 main grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-6">
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
    logo: 'https://sightsinplus.com/wp-content/uploads/2022/03/Cognizant-announces-new-logo-and-tagline.jpg',
    rating: 3,
  },
  {
    logo: 'https://media.licdn.com/dms/image/C4E0BAQFYg_g-er2Bxg/company-logo_200_200/0/1630614870677/cogitate_technology_solutions_logo?e=2147483647&v=beta&t=-tH9eewONJ1qhj2LaaY3xi-Xwk57XncXH1MWKjEe3P8',
    rating: 3,
  },
  {
    logo: 'https://telavergecommunications.com/wp-content/uploads/2022/09/telaverge-home.png',
    rating: 2,
  },
  {
    logo: 'https://media.talentbattle.in/Files/C4U_Images/C4U_BLOG_IMAGES/C4U_BLOG_CATEGORIES_IMAGES/85/29.png',
    rating: 4,
  },
  {
    logo: 'https://logos-world.net/wp-content/uploads/2020/07/Accenture-Symbol.png',
    rating: 2,
  },
];

export default function App() {
  return <CompanyGrid companies={companiesData} />;
}

