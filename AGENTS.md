# Project architecture rules

- Keep all resume-derived portfolio copy centralized in `src/data/portfolio.ts` so every section stays consistent when resume details change.
- Store downloadable binary documents through Lovable Assets and import their pointer JSON files so the repository remains lightweight.