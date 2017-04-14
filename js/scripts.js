(function() {

var table = document.querySelector("#myTable"),
    ths = table.querySelectorAll("thead th"),
    trs = table.querySelectorAll("tbody tr");

    console.log(ths);

    function makeArayy(nodeList){

        var arr =[];

        for(i = 0; i < nodeList.lenght; i++){

            arr.push(nodeList[i]);

        }

        return arr;

    }


    function sortBy(e){

        var target = e.target,
            thsArr = makeArayy(ths);



        console.log(target);
        console.log(thsArr);
    }

        for(var i = 0; i < ths.length; i++){


            ths[i].onclick = sortBy;


        }




})();
