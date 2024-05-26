# La Wallet Module Template

## Usage

Use this as a template from github and follow the next steps before using:

1. Use the correct nvm version
```bash
nvm use
```
2. Copy the .env.example
```bash
cp .env.example .env
```
3. [Generate](https://nostrdebug.lacrypta.ar/publish) a nostr key pair and put
   it in the variables `NOSTR_PRIVATE_KEY` and `NOSTR_PUBLIC_KEY`

## Installation

```bash
pnpm i
```

## Testing

```bash
pnpm test
```

## Linting and prettier

```bash
pnpm lint
pnpm prettier
```

## Development Server

```bash
pnpm dev
```

## Docker Server

```bash
docker compose up
```
