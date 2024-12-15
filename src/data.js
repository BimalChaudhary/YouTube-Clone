export const API_KEY = 'AIzaSyB9stK-hbndZx3MxORHbnu33ZSpgZ3FxYk';

export const value_converter = (value) => {
    if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(1) + "M"; // Convert to millions with 1 decimal place
    } else if (value >= 1_000) {
        return Math.floor(value / 1_000) + "K"; // Convert to thousands
    } else {
        return value.toString(); // Return the value as is for < 1000
    }
};

