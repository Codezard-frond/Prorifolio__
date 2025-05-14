import React from "react";

function Home() {
  return (
    <div className="container mx-auto ">
      <div className="my__title__wrapper mb-10">
        <div className="flex items-center justify-between mt-20 my__title__content">
          <div>
            <div className="flex gap-6 mb-3">
              <span className="port__skils bg-black/30 ">React</span>
              <span className="port__skils bg-black/30">Tailwind</span>
              <span className="port__skils bg-black/30">Css</span>
            </div>
            <h1 className="text-4xl max-w-[580px] my__title__h1 text-start">
              Assalamu aleykum <br />
              men Muhammadqulov Mustafo
            </h1>
            <h3 className="mt-4">
              men Frontend dasturchisiman va men koplab real praektlar qilganman
            </h3>
            <p className="max-w-[500px] text-start">
          Men 2023-yildan beri TypeScript, Tailwind CSS va Next.js
          texnologiyalarida faol ishlab kelayotgan to'liq stek dasturchiman.
          Startaplardan tortib, o'rta darajadagi kompaniyalargacha bo'lgan
          loyihalarda ishtirok etganman. Men mahsulot yaratish jarayonining
          barcha bosqichlarida — konsepsiyadan tortib, dizayn va yakuniy
          yetkazib berishgacha — faol qatnashganman. Bu jarayonda foydalanuvchi
          ehtiyojlarini tushunish, wireframe va prototiplar tayyorlash, kod
          yozish va testlash, deploy qilishgacha bo'lgan barcha vazifalarni
          bajarganman. TypeScript yordamida barqaror, aniqlikni oshiruvchi va
          kengaytiriladigan kod bazasini yuritaman. Next.js'da server-side
          rendering, dynamic routing, API routes kabi imkoniyatlardan unumli
          foydalanaman. Tailwind CSS orqali modulli, responsiv va estetik
          dizaynlarni tez va samarali yarataman. Men uchun kod yozishdan ko'ra
          muhimroq narsa — foydalanuvchi uchun qiymat yaratishdir. Har bir
          loyihada jamoa bilan faol hamkorlik qilish, mas'uliyatni o'z zimmasiga
          olish va mijozlar ehtiyojini tushunishga katta ahamiyat beraman. Agile
          metodologiyasida ishlaganman va samarali muhokama, tezkor fikr
          almashuv orqali mahsulot sifatini doimiy ravishda oshirishga
          intilaman.
        </p>
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
      <div>
       
      </div>
    </div>
  );
}

export default Home;
