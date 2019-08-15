import { myClass, myFunction, db } from "./rara";
var dodo = new myClass();
var bobo = new myClass();
myFunction();
document.write("<br />");
document.write(db[0][1]);
db.forEach(function(boba) {
    document.write("<p>");
    document.write(boba[0]);
    document.write(" — ");
    for (var i=1; i<boba.length; i++) {
        document.write(boba[i]+", ");
    }
    document.write("</p>");
});