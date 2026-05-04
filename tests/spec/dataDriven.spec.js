import {test,expect} from "@playwright/test";
import PracticeFormPage from "../pages/dataDriven"
import formData from "../data/formData.json"
import { excelReader } from "../utils/excelReader";
import { csvReader } from "../utils/csvReader";
import path from "path"
test("Reading from json",async({page})=>
{
    await page.goto("https://demoqa.com/automation-practice-form")
    console.log("formData",formData);
    const practiceFormPage=new PracticeFormPage(page)
    await practiceFormPage.fillFormData(formData)
})
test("Reading from Excel",async({page})=>
{
    await page.goto("https://demoqa.com/automation-practice-form")
    const filePath=path.resolve("tests/data/excel_data.xlsx")
    const excelData=excelReader(filePath,"User Data")
    console.log(excelData);

    const practiceFormPage=new PracticeFormPage(page)
    await practiceFormPage.fillExcelData(excelData)
})
test.only("Reading from CSV",async({page})=>
{
    await page.goto("https://demoqa.com/automation-practice-form")
    const filePath=path.resolve("tests/data/data_Excel1.csv")
    const csvData=csvReader(filePath)
    console.log(csvData);
    const practiceFormPage=new PracticeFormPage(page)
    await practiceFormPage.fillExcelData(csvData)
    
    

})