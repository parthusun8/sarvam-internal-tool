import React, { useState } from 'react'
import filterIcon from "../assets/filter.png";
import FilterUI from './FilterUI';

const HeaderWithFilter = ({ col, filters, showFilterUI, handleShowFilterUI, ind, handleFilterApply }) => {

    return (
        <th className="p-4 border-b border-slate-200 bg-slate-50 min-w-[100px] lg:min-w-[300px] relative">
            {
                filters?.type && ((filters?.type != "categorical") || (filters?.type == "categorical" && filters?.options?.length > 1)) && <div className='absolute w-[30px] h-[30px] right-0 inline-flex items-center justify-center' onClick={() => handleShowFilterUI(ind)}>
                    <img src={filterIcon} width={15} height={15} />
                </div>
            }

            {
                filters?.type && !!showFilterUI &&
                <div className='absolute right-0 top-10 w-[13rem] h-full min-h-[10rem] transition-all bg-white shadow-md'>
                    <FilterUI col={col} filters={filters} handleFilterApply={handleFilterApply} handleShowFilterUI={handleShowFilterUI} ind={ind} />
                </div>
            }
            <div className='flex flex-col gap-y-1'>
                <p className="text-md font-semibold leading-none text-slate-800">
                    {col.name}
                </p>
                <p className="text-sm italic font-normal leading-none text-slate-600">
                    {col.type}
                </p>
            </div>
        </th>
    )
}

export default HeaderWithFilter