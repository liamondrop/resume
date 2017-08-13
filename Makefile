all: help

help:
	@echo ""
	@echo "-- Help Menu"
	@echo ""
	@echo "   1. make cat    - concatenate all sections to one document"
	@echo "   2. make pdf    - convert markdown file to pdf"
	@echo ""

cat:
	@awk 'FNR==1 { printf("\n") }1' sections/*.md > README.md

pdf:
	@echo "Not implemented."
