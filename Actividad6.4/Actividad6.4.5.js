function invierteNum(num) {
    let Snum = toString(num);
    let Anum = Snum.split("");
    Anum.reverse;
    Snum = Anum.join("");
    return parseInt(Snum);
}