
class Human {
    // properties
    age;
    #wt = 67;
    name = "Ashmit"

    // constructor 
    constructor(newAge,newName,newWt) {
        this.age = newAge;
        this.name = newName;
        this.#wt = newWt;
    }
    // behaviour
    walking() {
        console.log("I am walking" , this.#wt);
    }
    running() {
        console.log("I am running");
    }

    get fetchWt() {
        return this.#wt;
    }

    set modiftWt(val) {
        this.#wt = val; 
    }
}

// object creatin
let obj = new Human(21,"ash",70);
console.log(obj.age)
console.log(obj.name)
console.log(obj.fetchWt)
// obj.walking();
// obj.running();