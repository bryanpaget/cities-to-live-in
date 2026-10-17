# Makefile for generating the Marp presentation

# Variables
HEADER_MD_EN = config/header-en.md
TEMP_DIR = temp
MARP_OPTS = --allow-local-files --pdf-outlines

# English presentation
INPUT_MD_EN = content/slides-en.md
COMBINED_MD_EN = $(TEMP_DIR)/slides-en-combined.md
OUTPUT_PDF_EN = cities-people-en.pdf

# GitHub Pages site
SITE_DIR = docs
LANDING_PAGE = config/landing.html

# Default target
all: html

# Build English presentation PDF
pdf-en: setup combine-en
	@echo "Building English presentation PDF..."
	npx marp $(MARP_OPTS) --pdf --output $(OUTPUT_PDF_EN) $(COMBINED_MD_EN)
	@echo "PDF built: $(OUTPUT_PDF_EN)"

pdf: pdf-en

# Build presentation and landing page as HTML for GitHub Pages
html: setup combine-en
	@echo "Building HTML presentation into $(SITE_DIR)/ for GitHub Pages..."
	mkdir -p $(SITE_DIR)
	@echo "Rendering clickable (bespoke) presentation via Marp CLI..."
	-timeout 120 npx marp --html --bespoke.progress --allow-local-files --output $(SITE_DIR)/en.html $(COMBINED_MD_EN)
	@echo "Injecting theme and code sizing..."
	node postprocess.mjs $(SITE_DIR)/en.html
	cp $(LANDING_PAGE) $(SITE_DIR)/index.html
	@touch $(SITE_DIR)/.nojekyll
	@echo "Site built in $(SITE_DIR)/: index.html, en.html"

# Setup temporary directory
setup:
	@echo "Setting up temporary directory..."
	mkdir -p $(TEMP_DIR)

# Combine header and English content
combine-en: setup
	@echo "Combining header and English content..."
	cat $(HEADER_MD_EN) $(INPUT_MD_EN) > $(COMBINED_MD_EN)

# Clean up generated files
clean:
	@echo "Cleaning up..."
	rm -rf $(TEMP_DIR)
	rm -f $(OUTPUT_PDF_EN)

# Install Marp CLI and Chromium
deps:
	@echo "Installing Marp CLI and Chromium..."
	npm install -g @marp-team/marp-cli
	sudo apt-get update && sudo apt-get install -y chromium --no-install-recommends

# Check if Marp is installed
check-marp:
	@which marp || (echo "Marp CLI not installed. Run 'make deps' first." && exit 1)

# Preview the English presentation in browser
preview-en: setup combine-en check-marp
	@echo "Starting preview server for English presentation..."
	marp $(COMBINED_MD_EN) --server --allow-local-files --port 8080

# Help target
help:
	@echo "Available targets:"
	@echo "  html        - Build HTML site into docs/ (default, GitHub Pages)"
	@echo "  pdf-en      - Build English presentation PDF"
	@echo "  preview-en  - Start live preview server (port 8080)"
	@echo "  clean       - Remove generated files"
	@echo "  deps        - Install Marp CLI and Chromium"
	@echo "  help        - Show this help message"

.PHONY: all pdf pdf-en html setup combine-en clean deps preview-en help check-marp
