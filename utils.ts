export function optChoice(...args: RuleOrLiteral[]): Rule {
  return optional(choice(...args));
}

export function repChoice(...args: RuleOrLiteral[]): Rule {
  return repeat(choice(...args));
}

export function repSeq(...args: RuleOrLiteral[]): Rule {
  return repeat(seq(...args));
}

export function optSeq(...args: RuleOrLiteral[]): Rule {
  return optional(seq(...args));
}

export function commaSep(elem: RuleOrLiteral): Rule {
  return optSeq(elem, repSeq(",", elem), optional(","));
}
