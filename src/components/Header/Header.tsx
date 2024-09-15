import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] header">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <a href="#" className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">Update</span> <span className="text-sm font-medium">Setiap Minggu 😁</span>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Selamat Datang !!!!!!</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Website ini jadi gateway ke semua tugas saya di Polinema, program D4 Teknik Informatika, pada semester 3. Web project dari mata kuliah Desain dan Pemrograman Web semuanya ada di sini.
          </p>
        </div>
        <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
      <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 relative">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
              <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
              <a
                href="#"
                className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
            <figure className="flex flex-col items-left justify-left p-8 text-left bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mb-4 text-gray-500 lg:mb-8 dark:text-gray-400 text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                <p className="my-4">anu</p>
              </blockquote>
              <figcaption className="flex items-center justify-left ">
                <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Bonnie Green</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-left justify-left p-8 text-left bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mb-4 text-gray-500 lg:mb-8 dark:text-gray-400 text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                <p className="my-4">anu</p>
              </blockquote>
              <figcaption className="flex items-center justify-left ">
                <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Roberta Casas</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-left justify-left p-8 text-left bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mb-4 text-gray-500 lg:mb-8 dark:text-gray-400 text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                <p className="my-4">anu</p>
              </blockquote>
              <figcaption className="flex items-center justify-left ">
                <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Jese Leos</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-left justify-left p-8 text-left bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mb-4 text-gray-500 lg:mb-8 dark:text-gray-400 text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                <p className="my-4">anu</p>
              </blockquote>
              <figcaption className="flex items-center justify-left ">
                <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Joseph McFall</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">CTO at Google</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
