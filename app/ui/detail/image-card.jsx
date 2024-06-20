import { useState } from "react";
import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";
import { RxDotFilled } from "react-icons/rx";

export default function ImageCard() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1560170412-0f7df0eb0fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const closeImage = () => {
    document.querySelector("#imageCard").classList.add("hidden");
  };
  return (
    <div
      id="imageCard"
      className="group fixed top-0 left-0 right-0 z-30 m-auto hidden h-full w-full bg-putih px-4 pb-16 pt-4 lg:px-20"
    >
      <div className="flex justify-end">
        <p className="mb-4 grow text-center text-lg font-semibold">Homestay Langit Senja</p>
        <div
          onClick={closeImage}
          onKeyPress={closeImage}
          role="button"
          tabIndex="0"
          className="cursor-pointer"
        >
          <HiX size={30} />
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="min-h-[95%] w-full rounded-2xl bg-cover bg-center duration-500"
      />
      {/* Left Arrow */}
      <div className="absolute top-[50%] left-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-putih/25 p-2 text-2xl text-white group-hover:block">
        <HiChevronLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] right-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-putih/25 p-2 text-2xl text-white group-hover:block">
        <HiChevronRight onClick={nextSlide} size={30} />
      </div>
      <div className="top-4 flex justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            onKeyPress={() => goToSlide(slideIndex)}
            role="button"
            tabIndex="0"
            className="cursor-pointer text-2xl"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
