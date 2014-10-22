#!/bin/sh
#emconfigure ./configure --disable-sdltest
emmake make
mv doom doom.bc
#emcc doom.bc -O3 -o doom.html --preload-file Doom2.wad --pre-js pre.js --post-js post.js -s TOTAL_MEMORY=33554432
emcc doom.bc -O2 -o doom.html --preload-file doom1.wad --pre-js pre.js -s TOTAL_MEMORY=33554432 --js-library lib.js