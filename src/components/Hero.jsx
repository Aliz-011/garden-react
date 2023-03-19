import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };

    // const fetchWeather = async () => {
    //   const response = await fetch(
    //     `http://api.weatherapi.com/v1/current.json?key=${
    //       import.meta.env.VITE_PUBLIC_WEATHER_API_KEY
    //     }&q=Jakarta`
    //   );
    //   const data = await response.json();
    // };
    // fetchWeather();
  }, []);

  return (
    <section className="px-6 sm:px-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <h2 className="font-medium text-lg w-36">Hello dini!</h2>
        <span>{date.toLocaleTimeString()}</span>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 my-5 gap-5">
        <div className="md:col-span-2">
          <div className="relative h-64 bg-primary rounded-lg">
            <h2>Free delivery</h2>
          </div>
        </div>
        <div className="hidden md:flex gap-5 flex-col">
          <div className="h-full w-full bg-primary rounded-lg">
            <h2>Start gardening</h2>
          </div>
          <div className="h-full w-full bg-primary rounded-lg">
            <h2>Plan your first plant</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
