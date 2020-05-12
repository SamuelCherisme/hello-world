var roster = {
    students: [
     { givenName: "Philip", surname: "Robinson"},
     { givenName: "Mariposa", surname: "Hernandez"}
    ],
    sortBySurname: function(descendingOrder) {
      this.students.sort(function(a, b){
        if (a.surname > b.surname) {
          return descendingOrder ? 1 : -1;
        }
        if (a.surname < b.surname) {
          return descendingOrder ? -1 : 1;
        }
        return 0;
      });
    }
   };