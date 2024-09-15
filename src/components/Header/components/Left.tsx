import React from "react";

export const Left = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">Kalian Bingung Seperti Mereka ???</h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Jadi, 'Assignment Showcase' ini tuh kayak tempat nongkrong buat nampilinn tugas-tugas kuliah saya selama semester. Intinya, biar dosen, temen, atau siapa aja bisa cek hasil kerja saya. Saya bisa beritahu tugas-tugas saya dan
        tunjukkin progress saya selama kuliah. Jadi, semua orang bisa lihat seberapa hebatnya saya dalam ngerjain tugas wkwk - <span className="font-medium">GPT 4.0</span>
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
        <a
          href="https://github.com/ckckckcz/Assignment-Showcase"
          target="_blank"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Source Code
          <svg className="w-5 h-5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Left;
