const laneSetup = require('./laneSetup');
const getFirebaseData = require('./firebaseRead');
const createFilterArea = require('./createFilterArea');

createFilterArea();
getFirebaseData();
laneSetup();