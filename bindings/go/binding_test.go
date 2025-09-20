package tree_sitter_json5_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_json5 "github.com/joakker/tree-sitter-json5.git/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_json5.Language())
	if language == nil {
		t.Errorf("Error loading Json5 grammar")
	}
}
