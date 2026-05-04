// let fruits = ["Apple", "Banana", "Orange"]
// input: Apple, output: true 
// input: Mango, output: false

let fruits = ["Apple", "Banana", "Orange"]

for(let fruit of fruits)
{
  if(fruit=="Apple")
  {
    return true
  }
  if(fruit=="Mango")
  {
    return false
  }
}