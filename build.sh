#!/bin/sh
emconfigure ./configure --disable-sdltest
emmake make
mv doom doom.bc
emcc doom.bc -O3 -o doom.html --preload-file doom1.wad --pre-js pre.js
