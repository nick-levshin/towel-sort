Object.defineProperty(Array.prototype, "flat", {
    value: function (depth = 1) {
        return this.reduce(function (flat, toFlatten) {
            return flat.concat(
                Array.isArray(toFlatten) && depth > 1
                    ? toFlatten.flat(depth - 1)
                    : toFlatten
            );
        }, []);
    },
});

module.exports = function towelSort(matrix) {
    let result = [];

    if (!matrix) {
        return [];
    }

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            result[i] = matrix[i];
        } else {
            result[i] = matrix[i].reverse();
        }
    }

    console.log(result.flat());
    return result.flat();
};
