const allTasks = []

const saveToDatabase = (databaseName, databaseObject) => {
    const stringifiedDB = JSON.stringify(databaseObject)
    localStorage.setItem(databaseName, stringifiedDB)
}

const loadDatabase = () => {
    const databaseString = localStorage.getItem('tasks');
    let databaseData =  JSON.parse(databaseString) 
    return databaseData;
  }

saveToDatabase('tasks', allTasks);

// Data structure:

