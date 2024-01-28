// import * as XLSX from 'xlsx';

// export function parseExcelFile(file) {
//     const reader = new FileReader();
//     return new Promise((resolve, reject) => {
//         reader.onload = (event) => {
//             try {
//                 const data = new Uint8Array(event.target.result);
//                 const workbook = XLSX.read(data, { type: 'array' });
//                 const sheetName = workbook.SheetNames[0];
//                 const worksheet = workbook.Sheets[sheetName];
//                 const jsonData = XLSX.utils.sheet_to_json(worksheet);
//                 resolve(jsonData);
//             } catch (error) {
//                 reject(error);
//             }
//         };
//         reader.readAsArrayBuffer(file);
//     });
// }

import * as XLSX from 'xlsx';

export function parseExcelFile(file) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onload = (event) => {
            try {
                const data = new Uint8Array(event.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const arrayData = XLSX.utils.sheet_to_json(worksheet, {header: 1});
                resolve(arrayData);
            } catch (error) {
                reject(error);
            }
        };
        reader.readAsArrayBuffer(file);
    });
}