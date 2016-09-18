//magic BREAKFAST eightball

var numberofreplys = 8;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
        
        if (choice == 1) {
            console.log("Eat more cereal.")
        }
        else if (choice == 2) {
            console.log("Eat more bacon.")
        }
        else if (choice == 3) {
            console.log("Eat more greens.")
        }
        else if (choice == 4) {
            console.log("Eat more yoghurt.")
        }
        else if (choice == 5) {
            console.log("Eat more eggs.")
        }
        else if (choice == 6) {
            console.log("Eat more toast.")
        }
        else if (choice == 7){
            console.log("Eat more sausages.")
        }
        else {
            console.log("Stop eating, that's enough breakfast for you!")
        }

    console.log(choice);
};

ask();