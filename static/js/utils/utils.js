export {clamp, sortObjectByKeys}

function clamp(value, min, max) {
    return value < min ? min : value > max ? max : value;
}

function sortObjectByKeys(o) {
    return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
}