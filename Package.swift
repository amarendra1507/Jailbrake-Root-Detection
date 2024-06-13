// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "JailbrakeRootDetection",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "JailbrakeRootDetection",
            targets: ["JailbrakeRootDetectionPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "JailbrakeRootDetectionPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/JailbrakeRootDetectionPlugin"),
        .testTarget(
            name: "JailbrakeRootDetectionPluginTests",
            dependencies: ["JailbrakeRootDetectionPlugin"],
            path: "ios/Tests/JailbrakeRootDetectionPluginTests")
    ]
)