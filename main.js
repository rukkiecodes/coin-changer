// creates new table row and appends to parent table
function tr() {
    var row = document.createElement("tr");
    document.getElementById("image-con").appendChild(row);
    row.style.display = "flex";
}

// creates new table data cell and appends to parent row
function td(image) {
    var cell = document.createElement("td");
    document.getElementById("image-con").lastChild.appendChild(cell);
    cell.style.backgroundImage = image;
    cell.style.backgroundRepeat = "no-repeat";
    cell.style.backgroundPosition = "center";
    cell.style.height = "12em";
    cell.style.width = "15em";
}

// function deducts kobo from initial total amount
function coins() {
    var amount = Number(prompt("Enter an amount in kobo..."));
    var caption = "The minimum number of coins that can be used to make " + amount + " kobo are: ";
    document.getElementById("placeholder").innerHTML = caption;

    var i=0;

    while (amount > 0) {

        // new table row after 6 columns
        if (i%6==0) {
            tr();
        }

        // identifies currency divisions and creates data cells to contain accordingly
        switch (true) {
            case Math.floor(amount/200) >= 1:
                td("url('CoinAssets/twohundredkobo.jpg')");
                amount-=200;
                break;
            case Math.floor(amount/100) >= 1:
                td("url('CoinAssets/hundredkobo.jpg')");
                amount-=100;
                break;
            case Math.floor(amount/50) >= 1:
                td("url('CoinAssets/fiftykobo.jpg')");
                amount-=50;
                break;
            case Math.floor(amount/20) >= 1:
                td("url('CoinAssets/twentykobo.jpg')");
                amount-=20;
                break;
            case Math.floor(amount/10) >= 1:
                td("url('CoinAssets/tenkobo.jpg')");
                amount-=10;
                break;
            case Math.floor(amount/5) >= 1:
                td("url('CoinAssets/fivekobo.jpg')");
                amount-=5;
                break;
            case Math.floor(amount/2) >= 1:
                td("url('CoinAssets/twokobo.jpg')");
                amount-=2;
                break;
            case Math.floor(amount/1) >= 1:
                td("url('CoinAssets/onekobo.jpg')");
                amount-=1;
                break;
        }
        i++;
    }
}
