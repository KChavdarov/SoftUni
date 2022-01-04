function projectsCreation(name,projects){
    projects = Number(projects);
    let totalhours = projects * 3;
    console.log (`The architect ${name} will need ${totalhours} hours to complete ${projects} project/s.`);
}

projectsCreation("Kiril",5);