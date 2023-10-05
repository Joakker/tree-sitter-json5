(pair
  key: (_) @string.special.key)

[
  (string)
  (identifier)
] @string

(number) @number

[
  (null)
  (true)
  (false)
] @constant.builtin

(escape_sequence) @escape

(comment) @comment
