import React from 'react';

const landscapes = [
  {
    id: 1,
    imgUrl:
      'https://images.unsplash.com/photo-1522444501378-94cddd292428?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Interior',
  },
  {
    id: 2,
    imgUrl:
      'https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2091&q=80',
    title: 'Garden',
  },
  {
    id: 3,
    imgUrl:
      'https://images.unsplash.com/photo-1544860707-c352cc5a92e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1730&q=80',
    title: 'Outside',
  },
  {
    id: 4,
    imgUrl:
      'https://images.unsplash.com/photo-1600353565318-2e8ed228435d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Terrace',
  },
];

const Landscape = () => {
  return (
    <section className="px-6 sm:px-0">
      <h2 className="text-lg font-medium mb-5">Landscape</h2>

      {/* grid */}
      <div className="w-full">
        <div className="flex items-center gap-5 lg:gap-8 scroll-smooth overflow-x-scroll scrollbar-none">
          {/* box */}
          {landscapes &&
            landscapes.map((landscape) => (
              <div
                style={{ backgroundImage: `url(${landscape.imgUrl})` }}
                className={`relative w-[330px] h-[180px] min-w-[330px] flex items-center justify-center capitalize font-medium shadow-md px-4 py-6 rounded-md cursor-pointer bg-no-repeat bg-cover bg-center after:absolute after:block after:w-full after:h-[70%] after:bg-gradient-to-t after:bottom-0 after:from-[#111] after:to-transparent`}
                key={landscape.id}
              >
                <h2 className="text-white text-xl tracking-widest relative z-50">
                  {landscape.title}
                </h2>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Landscape;
