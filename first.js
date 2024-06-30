console.log("Hello World!");
console.log("Welcome to my very first GitHub Repository.");

class Tree{

    constructor(name, color, year){
        this.name = name;
        this.color = color;
        this.year = year;
    }
    Name(){
        console.log("This tree is", name);
    }
    Color(){
        console.log("The color of the tree is", color);
    }
    Year(){
        console.log("The tree is here from", year);
    }
}
const tree1 = new Tree("Mango", "Green", 2000);
const tree2 = new Tree("Coconut", "Brown", 1990);
const tree3 = new Tree("Jack tree", "Yellow", 1980);

const trees = [tree1, tree2, tree3];

display(trees);

function display(trees){
    for (const Trees of trees){
        Trees.Name();
        Trees.Color();
        Trees.Year();

    }
}
