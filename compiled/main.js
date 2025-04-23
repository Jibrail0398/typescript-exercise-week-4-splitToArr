export const splitToArr = (input) => {
    //your answer here
    //undefined
    if (input === undefined) {
        return "Invalid input";
    }
    //empty string
    if (input.trim() === "") {
        return "Data not available";
    }
    //split string
    const cleanedInput = input.replaceAll(";", " ").replaceAll("-", " ");
    const splitNames = cleanedInput.split(" ");
    const formattedNames = splitNames.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
    return formattedNames;
};
const result = splitToArr("shelda.alni;pahlevi.fikri-ricky.kurniawan");
console.log(result);
