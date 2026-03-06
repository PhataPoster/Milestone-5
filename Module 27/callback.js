// function given as a parameter of a function .

function settleLife(name, marriage,isBCS){
    if(isBCS){
        marriage(name)
    }
}

function boloKobul(name){
    console.log(`Ami ${name} ke biye korte chai`);
}

settleLife("Fardowsi Akter Nishat",boloKobul,true);