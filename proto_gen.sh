#!/usr/bin/env bash

set -eu

export PATH="$PATH:$(npm bin)"

PROTO_SRC=./proto
PROTO_DEST=./src/proto

mkdir -p ${PROTO_DEST}

npx grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:${PROTO_DEST} \
  --grpc_out=${PROTO_DEST} \
  -I ${PROTO_SRC} \
  ${PROTO_SRC}/*

npx grpc_tools_node_protoc \
  --ts_out=${PROTO_DEST} \
  -I ${PROTO_SRC} \
  ${PROTO_SRC}/*