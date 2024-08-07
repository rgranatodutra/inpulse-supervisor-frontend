function formatPhoneNumber(n: string) {
    let formatedNumber: string = "";

    if (n.length === 13) {
        formatedNumber = `+${n.slice(0, 2)} (${n.slice(2, 4)}) ${n.slice(4, 5)} ${n.slice(5, 9)}-${n.slice(9, 13)}`;
    } else if (n.length === 12) {
        formatedNumber = `+${n.slice(0, 2)} (${n.slice(2, 4)}) ${n.slice(4, 8)}-${n.slice(8, 12)}`;
    } else if (n.length === 11) {
        formatedNumber = `(${n.slice(0, 2)}) ${n.slice(2, 5)}-${n.slice(5, 8)}-${n.slice(8, 11)}`;
    } else if (n.length === 10) {
        formatedNumber = `(${n.slice(0, 2)}) ${n.slice(2, 6)}-${n.slice(6, 10)}`;
    } else {
        formatedNumber = n;
    };

    return formatedNumber;
};

export default formatPhoneNumber;