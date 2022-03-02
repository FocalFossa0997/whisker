#!/bin/bash
notify-send "Whisker Build Script" "Running build..."
electron-packager . whisker --overwrite --asar=true --platform=linux --arch=x64 --icon=whisker.png --prune=true --out=release-builds
notify-send "Whisker Build Script" "Build completed..."
