console.log("");

// Set
const uniqueDatas = new Set();

uniqueData = uniqueDatas.add("1")
uniqueData = uniqueDatas.add("2")
uniqueData = uniqueDatas.add("3")
uniqueData = uniqueDatas.add("4")

console.log(uniqueDatas.has("1"));
console.log(uniqueDatas.delete("1"));

let sampleArray = [1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 10];
const unique = new Set(sampleArray)
sampleArray = [...unique]

for(const value of unique){
    console.log(value);
}

console.log(uniqueDatas);
console.log(sampleArray);

//Map
const sampleMap = new Map()

sampleMap.set("name", "John")
sampleMap.set("age", 30)
sampleMap.set(2, "hello")

const objectkey ={
    name: "John",
    age: 30
}

sampleMap.set(objectkey, "hello John")

console.log(sampleMap.get("name"));
console.log(sampleMap.get("age"));
console.log(sampleMap.get(2));
console.log(sampleMap.get(objectkey));

const words = ["apple", "banana", "apple", "orange", "banana", "apple"]

const wordFrequency = new Map()

// wordFrequency.set("apple", words)

for (const word of words) {
    if(wordFrequency.has(word)) wordFrequency.set(word, wordFrequency.get(word) +1)
    else wordFrequency.set(word, 1)
}
console.log(wordFrequency);

//Class
class Student {
    constructor(name, age, subject){
        this.name = name
        this.age = age
        this.subject = subject
    }
    get name(){
        return this._name
    }
    set name(newName){
        if(typeof newName !== "string"){
            throw new Error("name must be string")
        }
        this._name = newName.trim()
    }
    introduce(){
        console.log(`hello I am ${this.name}, ${this.age} years old, studying ${this.subject}`);
    }
}

const stud1 = new Student("abebe", 24, "Medicine")
stud1.introduce()

// const stud2 = new Student("Kebe", 21, "law")
const stud2 = new Student(123, 21, "law")

console.log(stud1);
console.log(stud2.name);