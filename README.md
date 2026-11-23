# arthurkretzer.github.io

Página de links (bio do Instagram) e prompts dos vídeos do canal. GitHub Pages com Jekyll, sem build local.

- `/`: links e destaque do prompt mais recente (pelo campo `date`).
- `/prompts/`: lista de todos os prompts.
- `/prompts/<slug>/`: página de cada prompt, com botão "Copiar prompt".

## Novo prompt
Copie `MODELO.md` para `_prompts/<slug>.md`, preencha e faça push. O nome do arquivo vira a URL.
O texto do prompt vai em `prompt: |`, com 2 espaços no começo de cada linha (linhas em branco podem ficar vazias).

## Links
Edite `_data/links.yml`.
