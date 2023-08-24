import React from 'react';
import iconReservetion from './assets/image/clock.png'
import iconSpicfiaction from './assets/image/checkmark.png'
import { Link } from 'react-router-dom'
const Popup = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <div className="absolute inset-0 bg-black opacity-75 "></div>
          <div className="bg-gray-900 border-2 border-white  p-6 rounded-lg shadow-lg z-30">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm4.95 13.536a.724.724 0 0 1 0 1.023.705.705 0 0 1-1.003 0L10 11.024l-3.947 3.535a.705.705 0 0 1-1.003 0 .724.724 0 0 1 0-1.023L8.975 10 5.028 6.464a.724.724 0 0 1 0-1.023.705.705 0 0 1 1.003 0L10 8.976l3.947-3.535a.705.705 0 0 1 1.003 0 .724.724 0 0 1 0 1.023L11.025 10l3.947 3.536z"
                />
              </svg>
            </button>
            <div className="mt-4 z-30 my-auto bg-slate-900 h-96 w-full">
            <div className="my-auto bg-slate-900 h-80 ">
                <h3 className='text-white text-center pt-10 text-6xl'>IT Services</h3>
                <div className="flex justify-center gap-2 w-full pt-12">
                    <div className="flex flex-col hover:-translate-y-2 hover:translate-x-1 hover:skew-x-1 border-2 w-64 h-56 text-center hover:cursor-pointer">
                        <img src={iconSpicfiaction} alt="" className='h-44'/>
                        <h4 className='text-white text-2xl pb-3  hover:text-purple-400'>Specifications</h4>
                    </div>
                    <Link to={'/reserve'}>
                        <div className="flex flex-col  transition ease-in-out delay-150 hover:-translate-y-2 hover:translate-x-1 hover:skew-x-1 flex-col border-2 w-64 h-56 text-center hover:cursor-pointer">
                            <img src={iconReservetion} alt="" className='h-44'/>
                            <h4 className='text-white text-2xl pb-3  hover:text-purple-400'>Reserve for Consulting</h4>
                        </div>
                    </Link>
                </div>
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;