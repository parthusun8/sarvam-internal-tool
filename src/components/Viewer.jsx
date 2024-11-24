import React, { useEffect, useState } from 'react'
import LoadingAnimation from "../assets/loader.svg"
import { betterAxios } from "../api/axios";
import { SAMPLE_DATA } from './data';
import ReactPaginate from 'react-paginate';
import RowElement from './RowElement';
import HeaderWithFilter from './HeaderWithFilter';

const Viewer = ({ inputData }) => {
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
    const [totalRows, setTotalRows] = useState(0);
    const [totalColumns, setTotalColums] = useState(0);
    const [currPage, setCurrPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [columns, setColumns] = useState(null);
    const [data, setData] = useState([]);
    const [filterable_columns, setFilterableCols] = useState({});
    const [showFilterUI, setShowFilterUI] = useState([]);
    const [appliedFilters, setAppliedFilters] = useState([]);

    const handleShowFilterUI = (ind) => {

        console.log(ind)
        setShowFilterUI(showFilterUI.map((v, ind2) => ind == ind2 ? v == 1 ? 0 : 1 : 0));
    }

    const fetchTableData = async (filters = []) => {
        await betterAxios.post("api/v1/dataset/load", {
            "file_path": inputData.file_path,
            "page": currPage,
            "page_size": pageSize,
            filters
        }).then((res) => {
            setData(res.data?.data || []);
            setColumns(res.data?.columns);
            setTotalPages(res.data?.total_pages);
            setTotalRows(res.data?.total_rows);
            setTotalColums(res?.data?.columns.length);
            generateFilters(res?.data?.filterable_columns);
            setShowFilterUI(res?.data?.columns?.map((_, i) => 0));
            setLoading(false);
        })
    }
    const generateFilters = (filterData) => {
        if (!filterData) return;
        let fil = {};
        for (var i = 0; i < filterData.length; i++) {
            const d = filterData[i];
            fil[d.name] = {
                type: d.filter_type,
                max: d.max_value,
                min: d.min_value,
                options: d.unique_values
            }
        }
        setFilterableCols(fil);
    }
    const loadSampleData = () => {
        const res = { data: SAMPLE_DATA }
        setData(res.data?.data || []);
        setColumns(res.data?.columns);
        setTotalPages(res.data?.total_pages);
        setTotalRows(res.data?.total_rows);
        setTotalColums(res?.data?.columns.length);
        generateFilters(res?.data?.filterable_columns);
        setShowFilterUI(res?.data?.columns?.map((_, i) => 0));
        setLoading(false);
    }
    const handlePageClick = (p) => {
        const newPage = p.selected + 1;
        console.log(newPage);
        setCurrPage(newPage);
    }

    useEffect(() => {
        if (inputData) {
            setLoading(true);
            console.log("Here");
            fetchTableData(); // Call API data
            // loadSampleData(); // For dev dummy data
        }
    }, [inputData, currPage]);

    const handleFilterApply = (data) => {
        setAppliedFilters([...appliedFilters, data]);
        console.log([...appliedFilters, data]);
        fetchTableData([...appliedFilters, data])
    }

    if (!inputData) return;

    return (
        <>
            {loading ? <div className='w-[50px] h-[50px]'><img src={LoadingAnimation} /></div> :
                <div className='max-w-[1500px] w-full mx-auto px-[6rem]'>
                    <div className="w-full flex justify-between items-center mb-3 mt-1 pl-3">
                        <div>
                            <h3 className="text-lg lg:text-2xl">Dataset Overview</h3>
                            <div className="gap-x-4 inline-flex justify-between">
                                {/* <span>Total Pages : {totalPages}</span> */}
                                <span>Total Rows : {totalRows}</span>
                                <span>Total Column : {totalColumns}</span></div>
                        </div>
                    </div>

                    <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                        <table className="w-full text-left table-auto">
                            <thead>
                                <tr>
                                    {columns?.map((col, ind) => {
                                        return <HeaderWithFilter handleFilterApply={handleFilterApply} handleShowFilterUI={handleShowFilterUI} showFilterUI={showFilterUI[ind]} ind={ind} filters={filterable_columns[col.name]} col={col} key={ind} />
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((row, ind) => {
                                    return <RowElement key={ind} columns={columns} row={row} />
                                })}
                            </tbody>
                        </table>

                    </div>
                    <div className="flex justify-between items-center px-4 py-3">
                        <div className="text-sm text-slate-500">
                            Showing <b>{data.length}</b> of {totalRows}
                        </div>
                        <div className="flex space-x-1">
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="Next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={4}
                                pageCount={totalPages}
                                previousLabel="< Previous"
                                forcePage={currPage - 1}
                                // renderOnZeroPageCount={null}
                                className=' flex flex-row items-center justify-center space-x-2 overflow-hidden'
                                pageClassName="border h-[40px] w-[40px] text-center items-center justify-center inline-flex rounded-md"
                                nextClassName='pl-2'
                                previousClassName='pr-2'
                                activeClassName="bg-white text-black"
                            />
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default Viewer