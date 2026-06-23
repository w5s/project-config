# Include Core
# The following files will be included before
# 1. Makefile.local (⚠️ This file should never be versioned)
# 2. Makefile.config
# 3. .modules/core.mk (default values)
# 4. .modules/*/module.mk
include .modules/core.mk

export NODEJS_PACKAGE_MANAGER
export NODEJS_PACKAGE_MANAGER_COMMAND
export NODEJS_INSTALL
export NODEJS_RUN

version-bump:
	$(Q)$(MODULES_PATH)/version-bump

publish:
	$(Q)$(MODULES_PATH)/publish

release: build version-bump publish
