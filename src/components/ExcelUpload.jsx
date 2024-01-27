import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import excelDrop from '../assets/upload/excelDrop.svg';
import excel from '../assets/upload/excel.svg';
import excelMob from '../assets/upload/excelDropMob.svg';
import uploadIcon from '../assets/upload/uploadIcon.svg';
import tagCross from '../assets/upload/tagCross.svg';
import Papa from 'papaparse';

const ExcelUpload = () => {
    const [fileName, setFileName] = useState(null);
    const [csvData, setCsvData] = useState(null);
    const [selectedTags, setSelectedTags] = useState([]);

    const acceptedFileTypes = '.xlsx, .xls, .csv';

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
        accept: acceptedFileTypes,
        multiple: false,
        onDrop: acceptedFiles => {
            setFileName(acceptedFiles[0].name);
        }
    });

    const removeFile = () => {
        setFileName(null);
    }

    const parseCSV = () => {
        Papa.parse(acceptedFiles[0], {
            complete: function (results) {
                console.log(results.data);
                setCsvData(results.data);
            }
        });
        removeFile();
    }
    // Papa.parse(file, {
    //     header: true,
    //     complete: ({ data }) => {
    //       setCsvData(data);
    //     },
    //   });
    // };

    const handleRemove = (tag) => {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
    };

    const TagDropdown = ({ tags }) => {
        const [isOpen, setIsOpen] = useState(false);

        const handleSelect = (tag) => {
            setSelectedTags([...selectedTags, tag]);
            console.log(selectedTags);
        };

        return (
            <div className="relative inline-block text-left">
                <div>
                    <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
                        Select Tags
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {tags.split(',').map((tag, index) => (
                                <div key={index} onClick={() => handleSelect(tag)} className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900">{tag}</div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };


    return (
        <>
            <div className="flex flex-col items-center justify-center gap-5 overflow-auto">
                <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''} cursor-grab`}>
                    <input {...getInputProps()} />
                    {fileName ? (
                        <div className="dropzone-content flex flex-col items-center justify-center gap-10">
                            <img src={excelDrop} alt="Excel Boundary" className='hidden md:flex' />
                            <img src={excelMob} alt="Excel Boundary" className='md:hidden flex' />
                            <img src={excel} alt="Excel Icon" className='absolute' />
                            <p className='text-slate-500 absolute pt-20'>{fileName}</p>
                            <button className='text-red-800 absolute pt-40' onClick={removeFile}>Remove</button>
                        </div>
                    ) : (
                        <div className="dropzone-content flex flex-col items-center justify-center gap-10">
                            <img src={excelDrop} alt="Excel Boundary" className='md:flex hidden' />
                            <img src={excel} alt="Excel Icon" className='absolute' />
                            <img src={excelMob} alt="Excel Boundary" className='md:hidden flex' />
                            <div className="flex absolute pt-24 font-figtree">
                                <p className=' text-slate-500'>Drop your excel sheet here or</p><p className=' text-baseBlue'>&nbsp;browse</p>
                            </div>
                        </div>
                    )}
                </div>
                {fileName !== null ?
                    <button onClick={parseCSV} className=' max-w-xs md:max-w-xl bg-baseBlue text-white rounded-md px-4 py-2 mt-10 w-full flex items-center justify-center font-figtree gap-3 h-14'>
                        <img src={uploadIcon} alt="Upload Icon" />
                        Upload
                    </button>
                    :
                    <button className=' max-w-xs md:max-w-xl  bg-indigo-400 cursor-not-allowed text-white rounded-md px-4 py-2 mt-10 w-full flex items-center justify-center font-figtree gap-3 h-14'>
                        <img src={uploadIcon} alt="Upload Icon" />
                        Upload
                    </button>
                }
            </div>
            <h1 className='font-figtree text-2xl mt-10 ml-10 md:ml-96'>Uploads</h1>
            <div className="flex md:w-screen mx-10 md:h-[40vh] flex-col md:ml-80 overflow-scroll p-10 md:max-w-full max-w-sm h-[30vh]">
                <table className="md:min-w-screen divide-y divide-gray-200 ">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Links</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prefix</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Select Tags</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Selected Tags</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {csvData?.slice(1).map((row, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">{row[0]}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <a href={row[1]} target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-900">{row[1]}</a>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{row[2]}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <TagDropdown tags={row[3]} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap flex flex-row">
                                    {selectedTags.map((tag, index) => (
                                        <div key={index} className="flex font-figtree h-7 text-white rounded-md flex-row items-center bg-baseBlue m-1">
                                            <span onClick={() => handleRemove(tag)} className="px-2 text-sm leading-5 font-semibold">
                                                {tag}
                                            </span>
                                            <button onClick={() => handleRemove(tag)} >
                                                {/* <span className=" text-red-600 text-xs">Rm</span> */}
                                                <img src={tagCross} alt="Tag Cross" className='h-5' />
                                            </button>
                                        </div>
                                    ))
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ExcelUpload;