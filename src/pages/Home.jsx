import React from "react";

function Home() {
  return (
    <div className="container mx-auto ">
      <div className="my__title__wrapper mb-10">
        <div className="flex items-start justify-between mt-20 my__title__content">
          <div>
          <h1 className="text-4xl max-w-[580px] my__title__h1">Assalamu aleykum <br />men Muhammadqulov Mustafo</h1>
          <h3 className="mt-4">men Frontend dasturchisiman va men koplab real praektlar qilganman</h3>
          </div>
          <div className="flex items-center justify-center img__content">
          <img
            className=" mx-auto max-w-[400px] w-full "
            src="./images/Adobe Express - file.png"
            alt=""
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
