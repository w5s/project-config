#!/usr/bin/env bash

_log_write() {
  local level="${1:?level is required}"
  local message="${2:?message is required}"

  echo "${level}: [${LEFTHOOK_CONFIG_PACKAGE}] ${message}"
}
