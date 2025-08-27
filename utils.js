"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optChoice = optChoice;
exports.repChoice = repChoice;
exports.repSeq = repSeq;
exports.optSeq = optSeq;
exports.commaSep = commaSep;
function optChoice(...args) {
    return optional(choice(...args));
}
function repChoice(...args) {
    return repeat(choice(...args));
}
function repSeq(...args) {
    return repeat(seq(...args));
}
function optSeq(...args) {
    return optional(seq(...args));
}
function commaSep(elem) {
    return optSeq(elem, repSeq(",", elem), optional(","));
}
