
const multiplyValue = (value: number, multiplier?: number): number => {
    if(multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
};


type outputType = number | string;
const processInput = (value: number | string | boolean): outputType => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value*10;
    }else if (typeof value === "boolean") {
        return value ? "Active":"Inactive";
    }else{
        return "Invalid input";
    }
    
}


const formatCoordinate= (coordinate: readonly [number, number, string]): string => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude}) `;
}

