import React, { useState } from 'react'
import AudioPlayer from './AudioPlayer';

const RowElement = ({ columns, row }) => {
    const [expand, setExpand] = useState(false);

    const handleExpand = () => {
        setExpand(!expand);
    }

    return (
        <tr className="hover:bg-slate-50 border-b border-slate-200 cursor-grabbing" onClick={handleExpand}>
            {Object.keys(row).map((val, ind) => {
                return (<td key={ind} className="pr-7 pl-4 py-3">
                    {columns?.filter((col, _) => col.name == val && col.type == "audio").length ?
                        <div className="w-full h-full text-sm text-slate-700"><AudioPlayer path={row[val]} /></div>
                        : columns?.filter((col, _) => col.name == val && col.type == "image").length ?
                            <p className="block text-sm text-slate-700">{"Image"}</p>
                            : columns?.filter((col, _) => col.name == val && col.type == "video").length ?
                                <p className="block text-sm text-slate-700">{"Video"}</p>
                                :
                                <p className={`text-sm text-slate-700 ${expand ? "" : "line-clamp-2"}`}>{row[val]}</p>}
                </td>)
            })}
        </tr>
    )
}

export default RowElement