// swift-tools-version:5.3

import Foundation
import PackageDescription

var sources = ["src/parser.c"]
if FileManager.default.fileExists(atPath: "src/scanner.c") {
    sources.append("src/scanner.c")
}

let package = Package(
    name: "TreeSitterJson5",
    products: [
        .library(name: "TreeSitterJson5", targets: ["TreeSitterJson5"]),
    ],
    dependencies: [
        .package(name: "SwiftTreeSitter", url: "https://github.com/tree-sitter/swift-tree-sitter", from: "0.9.0"),
    ],
    targets: [
        .target(
            name: "TreeSitterJson5",
            dependencies: [],
            path: ".",
            sources: sources,
            resources: [
                .copy("queries")
            ],
            publicHeadersPath: "bindings/swift",
            cSettings: [.headerSearchPath("src")]
        ),
        .testTarget(
            name: "TreeSitterJson5Tests",
            dependencies: [
                "SwiftTreeSitter",
                "TreeSitterJson5",
            ],
            path: "bindings/swift/TreeSitterJson5Tests"
        )
    ],
    cLanguageStandard: .c11
)
