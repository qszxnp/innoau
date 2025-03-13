# Variables
REMOTE_HOST := root@innoau
REMOTE_PATH := /var/www/innoau
BUILD_DIR := out

# Default target
.PHONY: default
default: build

# Build for production
.PHONY: build
build:
	@echo "Building frontend for production..."
	npm run build
	@echo "Build completed. Output directory: $(BUILD_DIR)"
	@if [ ! -d "$(BUILD_DIR)" ]; then \
		echo "Error: Build directory '$(BUILD_DIR)' not found!"; \
		exit 1; \
	fi

# Clean build files
.PHONY: clean
clean:
	@echo "Cleaning build directory..."
	rm -rf $(BUILD_DIR) .next

# Deploy to remote server
.PHONY: remote
remote: build
	@echo "Deploying frontend to $(REMOTE_HOST):$(REMOTE_PATH)..."
	@if [ ! -d "$(BUILD_DIR)" ]; then \
		echo "Error: Build directory '$(BUILD_DIR)' not found!"; \
		exit 1; \
	fi
	@ssh $(REMOTE_HOST) "mkdir -p $(REMOTE_PATH)" && \
		rsync -avz --delete $(BUILD_DIR)/ $(REMOTE_HOST):$(REMOTE_PATH)/ && \
		echo "Successfully deployed frontend to remote server" || \
		echo "Failed to deploy frontend to remote server"

# Run development server
.PHONY: dev
dev:
	npm run dev