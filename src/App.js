import "aos/dist/aos.css";

import AOS from "aos";

AOS.init({
  duration: 1000,
});

const App = () => (
  <>
    <nav className="sticky top-0 bg-white/60 dark:bg-zinc-900/60 z-10 h-24 flex items-center justify-between px-12">
      <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
        Emirhan Akpınar
      </a>

      <div className="flex items-center gap-x-6 tracking-tighter">
        <a className="opacity-60 hover:opacity-100 transition-opacity" href="#">
          About
        </a>

        <a className="opacity-60 hover:opacity-100 transition-opacity" href="#">
          Contact
        </a>
      </div>
    </nav>

    <main className="max-w-screen-xl mx-auto pt-24 pb-12">
      <h1 className="text-5xl opacity-90 tracking-tighter max-w-4xl">
        Emirhan is a photographer & filmmmaker based in Bahcesehir, Istanbul.
      </h1>

      <div className="py-24 grid grid-cols-4 gap-2">
        <div
          data-aos="fade-up"
          className="relative col-span-1 group drop-shadow-sm"
        >
          <img
            className="h-80 w-full rounded-lg object-cover"
            src="https://framerusercontent.com/images/u9BORonmoDxA6klFLOjerTMeFI.jpg"
            alt=""
          />

          <div className="absolute h-full w-full bg-white/60 dark:bg-zinc-900/60 z-10 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
            <span className="mt-32 font-medium tracking-tighter">
              Pismo Beach, USA
            </span>

            <span className="mt-auto opacity-60 tracking-tighter text-sm">
              2022
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="relative col-span-1 group drop-shadow-sm"
        >
          <img
            className="h-80 w-full rounded-lg object-cover"
            src="https://framerusercontent.com/images/v54Uk3tk1vHem83vcZgTLW1rvGU.jpg"
            alt=""
          />

          <div className="absolute h-full w-full bg-white/60 dark:bg-zinc-900/60 z-10 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
            <span className="mt-32 font-medium tracking-tighter">
              Asturias, Spain
            </span>

            <span className="mt-auto opacity-60 tracking-tighter text-sm">
              2020
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="relative col-span-2 group drop-shadow-sm"
        >
          <img
            className="h-80 w-full rounded-lg object-cover"
            src="https://framerusercontent.com/images/BnbMYQSAIdnQ0GKiO9OOEZVWTM.jpg"
            alt=""
          />

          <div className="absolute h-full w-full bg-white/60 dark:bg-zinc-900/60 z-10 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
            <span className="mt-32 font-medium tracking-tighter">
              Asturias, Spain
            </span>

            <span className="mt-auto opacity-60 tracking-tighter text-sm">
              2021
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1250"
          className="relative col-span-2 group drop-shadow-sm"
        >
          <img
            className="h-80 w-full rounded-lg object-cover"
            src="https://framerusercontent.com/images/d2vJqqSgRLmqBVdvce5Z8rxl4U.jpg"
            alt=""
          />

          <div className="absolute h-full w-full bg-white/60 dark:bg-zinc-900/60 z-10 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
            <span className="mt-32 font-medium tracking-tighter">
              Little Sahara, USA
            </span>

            <span className="mt-auto opacity-60 tracking-tighter text-sm">
              2018
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1250"
          className="relative col-span-1 group drop-shadow-sm"
        >
          <img
            className="h-80 w-full rounded-lg object-cover"
            src="https://framerusercontent.com/images/wFdYdBrIMCcfwejevdY3KvIyz5g.jpg"
            alt=""
          />

          <div className="absolute h-full w-full bg-white/60 dark:bg-zinc-900/60 z-10 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
            <span className="mt-32 font-medium tracking-tighter">
              Little Sahara, USA
            </span>

            <span className="mt-auto opacity-60 tracking-tighter text-sm">
              2019
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1250"
          className="relative col-span-1 group drop-shadow-sm"
        >
          <img
            className="h-80 w-full rounded-lg object-cover"
            src="https://framerusercontent.com/images/91u7iky67oEVJvll5PjzGFH6OT0.jpg"
            alt=""
          />

          <div className="absolute h-full w-full bg-white/60 dark:bg-zinc-900/60 z-10 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
            <span className="mt-32 font-medium tracking-tighter">
              Algodones Dunes, USA
            </span>

            <span className="mt-auto opacity-60 tracking-tighter text-sm">
              2022
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="relative col-span-1 group drop-shadow-sm"
        >
          <img
            className="h-80 w-full rounded-lg object-cover"
            src="https://framerusercontent.com/images/rBdRjNKnuX1uMWgX5x23XhOSJg.jpg"
            alt=""
          />

          <div className="absolute h-full w-full bg-white/60 dark:bg-zinc-900/60 z-10 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
            <span className="mt-32 font-medium tracking-tighter">
              New Mexico, USA
            </span>

            <span className="mt-auto opacity-60 tracking-tighter text-sm">
              2019
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="relative col-span-1 group drop-shadow-sm"
        >
          <img
            className="h-80 w-full rounded-lg object-cover"
            src="https://framerusercontent.com/images/sZFJ7WhENvrrsvlvJrkDFW28Ec.jpg"
            alt=""
          />

          <div className="absolute h-full w-full bg-white/60 dark:bg-zinc-900/60 z-10 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
            <span className="mt-32 font-medium tracking-tighter">
              Dubai, UAE
            </span>

            <span className="mt-auto opacity-60 tracking-tighter text-sm">
              2022
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="relative col-span-2 group drop-shadow-sm"
        >
          <img
            className="h-80 w-full rounded-lg object-cover"
            src="https://framerusercontent.com/images/1vhFoHhLlLzFthOWxYz2jK0vAo.jpg"
            alt=""
          />

          <div className="absolute h-full w-full bg-white/60 dark:bg-zinc-900/60 z-10 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
            <span className="mt-32 font-medium tracking-tighter">
              White Sands, USA
            </span>

            <span className="mt-auto opacity-60 tracking-tighter text-sm">
              2021
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1750"
          className="relative col-span-2 group drop-shadow-sm"
        >
          <img
            className="h-80 w-full rounded-lg object-cover"
            src="https://framerusercontent.com/images/iAcWrXjXTCzLxOxj1QfDWluMVE0.jpg"
            alt=""
          />

          <div className="absolute h-full w-full bg-white/60 dark:bg-zinc-900/60 z-10 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
            <span className="mt-32 font-medium tracking-tighter">
              White Sands, USA
            </span>

            <span className="mt-auto opacity-60 tracking-tighter text-sm">
              2022
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1750"
          className="relative col-span-1 group drop-shadow-sm"
        >
          <img
            className="h-80 w-full rounded-lg object-cover"
            src="https://framerusercontent.com/images/ACww3JTn6zqNMcBnPwSsktVu4.jpg"
            alt=""
          />

          <div className="absolute h-full w-full bg-white/60 dark:bg-zinc-900/60 z-10 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
            <span className="mt-32 font-medium tracking-tighter">
              Wildkogel, Austria
            </span>

            <span className="mt-auto opacity-60 tracking-tighter text-sm">
              2019
            </span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1750"
          className="relative col-span-1 group drop-shadow-sm"
        >
          <img
            className="h-80 w-full rounded-lg object-cover"
            src="https://framerusercontent.com/images/ty94mEu68Md0vyNLSh1bio1n7Eg.jpg"
            alt=""
          />

          <div className="absolute h-full w-full bg-white/60 z-10 inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
            <span className="mt-32 font-medium tracking-tighter">
              Pismo Beach, USA
            </span>

            <span className="mt-auto opacity-60 tracking-tighter text-sm">
              2018
            </span>
          </div>
        </div>
      </div>
    </main>

    <footer className="py-12 flex items-center justify-center text-xs tracking-tighter font-medium opacity-60">
      @ 2022
    </footer>
  </>
);

export default App;
