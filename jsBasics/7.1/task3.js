function divide (numerator, denominator ) {
    if (denominator === 0) {
        throw new Error("It's not allowed to divide by 0");
    } else if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error('Incorrect input');
    }
    return numerator / denominator;
};

try {
  console.log(divide(10, 2));
} catch (error) {
  console.error("Error:", error.message);
} finally {
   console.log("Work is finished")
};

try {
    console.log(divide(7, -1));
} catch (error) {
  console.error("Error:", error.message);
} finally {
   console.log("Work is finished")
};
  
try {
    console.log(divide(15, 0));
} catch (error) {
  console.error("Error:", error.message);
} finally {
   console.log("Work is finished")
};

try {
    console.log(divide(3, 'Hi'));
} catch (error) {
  console.error("Error:", error.message);
} finally {
   console.log("Work is finished")
};