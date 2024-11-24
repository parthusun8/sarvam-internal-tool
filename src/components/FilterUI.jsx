import React, { useState } from 'react';

const allOptions = {
    categorical: ['eq', 'ne'],
    numeric: ['eq', 'ne', 'gt', 'lt', 'gte', 'lte'],
};

const FilterUI = ({ col, filters, handleFilterApply, handleShowFilterUI, ind }) => {
    const [selectedOperator, setSelectedOperator] = useState(allOptions[filters.type][0]);
    const [selectedValue, setSelectedValue] = useState(
        filters.type === 'categorical' ? filters.options[0] : ''
    );
    const [inputValue, setInputValue] = useState('');

    const handleOperatorChange = (e) => {
        setSelectedOperator(e.target.value);
    };

    const handleValueChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleApply = () => {
        // Implement the apply logic here
        const data = {
            column: col.name,
            operator: selectedOperator,
            value: filters.type === 'categorical' ? selectedValue : inputValue,
        };
        handleFilterApply(data);
        handleShowFilterUI(ind);
    };

    return (
        <div className="flex flex-col gap-4 p-6 bg-gray-50 rounded-xl shadow-md max-w-md mx-auto">
            {/* <h2 className="text-xl font-semibold text-gray-700">{col.name}</h2> */}

            <div>
                <label className="block text-gray-600 mb-1 text-sm">Operator</label>
                <select
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                    value={selectedOperator}
                    onChange={handleOperatorChange}
                >
                    {allOptions[filters.type]?.map((opt, ind) => (
                        <option key={ind} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </div>

            {filters.type === 'categorical' ? (
                <div>
                    <label className="block text-gray-600 mb-1 text-sm">Value</label>
                    <select
                        className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                        value={selectedValue}
                        onChange={handleValueChange}
                    >
                        {filters.options?.map((option, ind) => (
                            <option key={ind} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            ) : (
                <div>
                    <label className="block text-gray-600 mb-1">Value</label>
                    <input
                        type="number"
                        name={col.name}
                        min={filters.min}
                        max={filters.max}
                        value={inputValue}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg p-2 placeholder:text-[12px]"
                        placeholder={`Between ${filters.min} and ${filters.max}`}
                    />
                </div>
            )}

            <button
                onClick={handleApply}
                className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
                Apply
            </button>
        </div>
    );
};

export default FilterUI;
