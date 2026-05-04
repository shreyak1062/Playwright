import xlsx from "xlsx"

export function excelReader(filePath,sheetName)
{
    const excelFile=xlsx.readFile(filePath)
    const sheetData=excelFile.Sheets[sheetName]
    return xlsx.utils.sheet_to_json(sheetData)
}