function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div className=" flex items-center justify-center absolute top-18 right-0 left-0 bottom-0 z-0">
        <img
          src="../../public/img/hero.jpg"
          alt="Iphone-image"
          className=" block w-5xl h-full md:h-lvh md:mt-20 object-cover opacity-90 mt-0 "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/100"></div>
      </div>
      <div className="absolute bottom-4 left-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 0 1 .75.75v16.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
