import { CoatHanger, PaintBrush, Pill } from 'phosphor-react';
import React from 'react';
import { PiHairDryer, PiSprayBottle } from 'react-icons/pi';
import { Link } from 'react-router-dom';

function Category() {
  return (
    <div className="container mx-auto flex justify-center">
      <div className="w-[80%] flex justify-center">
        <ul className="flex gap-5 text-center my-5 py-5 overflow-x-auto whitespace-nowrap">
          <li className="w-[100px] flex flex-col items-center justify-center">
            <Link to="/store/category/پوشاک" className="flex flex-col items-center">
              <CoatHanger size={32} className='border rounded-full p-1 bg-amber-400'/>
              <span className="mt-2">پوشاک</span>
            </Link>
          </li>
          <li className="w-[100px] flex flex-col items-center justify-center">
            <Link to="/store/category/لوازم آرایشی" className="flex flex-col items-center">
              <PaintBrush size={32} className='border rounded-full p-1 bg-indigo-00' />
              <span className="mt-2">لوازم آرایشی</span>
            </Link>
          </li>
          <li className="w-[100px] flex flex-col items-center justify-center">
            <Link to="/store/category/لوازم برقی" className="flex flex-col items-center">
              <PiHairDryer size={32} className='border rounded-full p-1 bg-fuchsia-400' />
              <span className="mt-2">لوازم برقی</span>
            </Link>
          </li>
          <li className="w-[100px] flex flex-col items-center justify-center">
            <Link to="/store/category/عطر و ادکلن" className="flex flex-col items-center">
              <PiSprayBottle size={32} className='border rounded-full p-1 bg-red-300' />
              <span className="mt-2">عطر و ادکلن</span>
            </Link>
          </li>
          <li className="w-[100px] flex flex-col items-center justify-center">
            <Link to="/store/category/دارو" className="flex flex-col items-center">
              <Pill size={32} className='border rounded-full p-1 bg-green-200' />
              <span className="mt-2">دارو</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Category;