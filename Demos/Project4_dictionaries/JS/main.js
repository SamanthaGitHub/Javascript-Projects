function busterDictionary() {
    var Buster = { //this is my variable
        mother: "Lucille",
        girlfriend: "Lucille 2",
        brother: "GOB",
        brother: "Michael", //this is a repeat of the brother KVP
        job: "none",
        hates: "seals with bowties"
    }
    delete Buster.brother; //this deletes both of the brother KVP and returns unidentified
    document.getElementById("Dictionary").innerHTML = Buster.brother;
}