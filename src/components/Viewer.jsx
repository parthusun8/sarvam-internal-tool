import React, { useEffect, useState } from 'react'
import LoadingAnimation from "../assets/loader.svg"
import { betterAxios } from "../api/axios";

const Viewer = ({ inputData }) => {
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
    const [totalRows, setTotalRows] = useState(0);
    const [totalColumns, setTotalColums] = useState(0);
    const [currPage, setCurrPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [columns, setColumns] = useState(null);
    const [data, setData] = useState([]);

    const fetchTableData = async () => {
        await betterAxios.post("api/v1/dataset/load", {
            "file_path": inputData.file_path,
            "page": currPage,
            "page_size": pageSize
        }).then((res) => {
            setData(res.data?.data || []);
            setColumns(res.data?.columns);
            setTotalPages(res.data?.total_pages);
            setTotalRows(res.data?.total_rows);
            setTotalColums(res?.data?.columns.length);
            setLoading(false);
        })
    }

    useEffect(() => {
        if (inputData) {
            console.log("Here");
            fetchTableData();
        }
    }, [inputData]);

    if (!inputData) return;

    return (
        <>
            {loading ? <div className='w-[50px] h-[50px]'><img src={LoadingAnimation} /></div> :
                <div className='max-w-7xl w-full mx-auto'>
                    <div class="w-full flex justify-between items-center mb-3 mt-1 pl-3">
                        <div>
                            <h3 class="text-2xl">Dataset Overview</h3>
                            <div class="gap-x-4 inline-flex justify-between">
                                {/* <span>Total Pages : {totalPages}</span> */}
                                <span>Total Rows : {totalRows}</span>
                                <span>Total Column : {totalColumns}</span></div>
                        </div>
                    </div>

                    <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                        <table class="w-full text-left table-auto min-w-max">
                            <thead>
                                <tr>
                                    {columns?.map((col, ind) => {
                                        return <th key={ind} class="p-4 border-b border-slate-200 bg-slate-50">
                                            <p class="text-sm font-normal leading-none text-slate-500">
                                                {col}
                                            </p>
                                        </th>
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((row, ind) => {
                                    return <tr key={ind} class="hover:bg-slate-50 border-b border-slate-200">
                                        {Object.keys(row).map((val, ind) => {
                                            return <td key={ind} class="p-4 py-5">
                                                <p class="block font-semibold text-sm text-slate-800">{row[val]}</p>
                                            </td>
                                        })}
                                    </tr>
                                })}
                            </tbody>
                        </table>

                    </div>
                    <div class="flex justify-between items-center px-4 py-3">
                        <div class="text-sm text-slate-500">
                            Showing <b>1-5</b> of 45
                        </div>
                        <div class="flex space-x-1">
                            <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                                Prev
                            </button>
                            <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-white bg-slate-800 border border-slate-800 rounded hover:bg-slate-600 hover:border-slate-600 transition duration-200 ease">
                                1
                            </button>
                            <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                                2
                            </button>
                            <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                                3
                            </button>
                            <button class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease">
                                Next
                            </button>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default Viewer