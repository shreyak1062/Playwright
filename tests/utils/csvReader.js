import {parse} from 'csv-parse/sync'
import fs from 'fs'

export function csvReader(filePath)
{
    const csvFile=fs.readFileSync(filePath)
    return parse(csvFile,{columns:true,skipEmptyLines:true})
}