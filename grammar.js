"use strict";
const utils_1 = require("./utils");
module.exports = grammar({
    name: "json5",
    extras: ($) => [$.comment, /\s/],
    inline: ($) => [$.name],
    rules: {
        file: ($) => $._value,
        comment: (_) => token(choice(seq("//", /[^\n]*/), seq("/*", /([^*]|\*+[^/*])*\*+/, "/"))),
        object: ($) => seq("{", (0, utils_1.commaSep)($.member), "}"),
        member: ($) => seq(field("name", $.name), ":", field("value", $._value)),
        name: ($) => choice($.string, $.identifier),
        identifier: (_) => {
            const identifier_start = /[\$_\p{L}]/u;
            const identifier_part = choice(identifier_start, /[0-9]/);
            return token(seq(identifier_start, repeat(identifier_part)));
        },
        array: ($) => seq("[", (0, utils_1.commaSep)($._value), "]"),
        string: (_) => {
            const escape_sequence = seq("\\", choice(/["'\\/bfnrtv]/, /u[0-9a-fA-F]{4}/, /x[0-9a-fA-F]{2}/, /\r?\n/ // Line continuation
            ));
            const double_quote = seq('"', (0, utils_1.repChoice)(escape_sequence, /[^"\\]+/), '"');
            const single_quote = seq("'", (0, utils_1.repChoice)(escape_sequence, /[^'\\]+/), "'");
            return token(choice(double_quote, single_quote));
        },
        number: (_) => {
            const hex_digit = /[0-9a-fA-F]+/;
            const hex_int = seq("0", /[xX]/, hex_digit);
            const dec_digit = /[0-9]/;
            const exp_part = seq(/[eE]/, optional(/[+-]/), repeat1(dec_digit));
            const int_literal = choice("0", seq(/[1-9]/, repeat(dec_digit)));
            const dec_literal = choice(seq(int_literal, ".", repeat(dec_digit), optional(exp_part)), seq(".", repeat(dec_digit), optional(exp_part)), seq(int_literal, optional(exp_part)));
            return token(seq(/[+-]?/, choice(hex_int, dec_literal, "Infinity", "NaN")));
        },
        null: ($) => "null",
        true: ($) => "true",
        false: ($) => "false",
        _value: ($) => choice($.object, $.array, $.number, $.string, $.null, $.true, $.false),
    },
});
