function invierteNum(num) {
    let Snum = String(parseInt(num));
    let Anum = Snum.split("");
    Anum.reverse();
    Snum = Anum.join("");
    return parseInt(Snum);
}