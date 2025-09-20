import XCTest
import SwiftTreeSitter
import TreeSitterJson5

final class TreeSitterJson5Tests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_json5())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Json5 grammar")
    }
}
