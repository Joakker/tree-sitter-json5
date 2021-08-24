"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commaSep = exports.optSeq = exports.repSeq = exports.repChoice = exports.optChoice = void 0;
function optChoice(...args) {
    return optional(choice(...args));
}
exports.optChoice = optChoice;
function repChoice(...args) {
    return repeat(choice(...args));
}
exports.repChoice = repChoice;
function repSeq(...args) {
    return repeat(seq(...args));
}
exports.repSeq = repSeq;
function optSeq(...args) {
    return optional(seq(...args));
}
exports.optSeq = optSeq;
function commaSep(elem) {
    return optSeq(elem, repSeq(",", elem), optional(","));
}
exports.commaSep = commaSep;
