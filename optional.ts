console.log(`*********** Function with Optional Parameter*********************`);

function display(id: number, name: string, role?: string) {
    console.log("ID", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
    

}

display(1, "JackSparrow");

console.log(`*********** Function with Default Value*********************`);


function show (id: number, name: string, role: string = "Guest user") {
    console.log("ID", id);
    console.log("Name", name);
    console.log("Role", role);

}
show(1, "JackSparrow", "Captian");