# Tocaê — Escola de Música

Site em Next.js, React e TypeScript. Versão restaurada com o visual azul profundo, laranja, areia e verde suave, instrumentos interativos e menu responsivo.

## Executar

```sh
pnpm install --ignore-scripts
pnpm dev
```

Abra http://localhost:3000.

## Validar e executar em produção local

```sh
pnpm build
pnpm start
```

O projeto inclui `pnpm-lock.yaml` para reproduzir a instalação. Se preferir, depois de instalar as dependências é possível chamar o Next diretamente:

```sh
node node_modules/next/dist/bin/next dev
node node_modules/next/dist/bin/next build
node node_modules/next/dist/bin/next start
```

Os arquivos principais estão em `app/page.tsx`, `app/globals.css` e `app/layout.tsx`. As imagens ficam em `public/`.

## Restauração

O visual e as interações foram recuperados do histórico da versão anterior, incluindo o logotipo e a imagem da abertura. Next.js foi atualizado para 15.5.25 e React para 19.1.9, dentro das mesmas linhas de versão, após a instalação apontar a [correção de segurança do Next.js](https://nextjs.org/blog/CVE-2025-66478).

O arquivo `tocae-site-backup.zip` contém código, imagens e configurações, sem dependências ou arquivos gerados. Guarde uma cópia fora da pasta do projeto. Para restaurar, extraia os arquivos e execute os comandos de instalação acima.
