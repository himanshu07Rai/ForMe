# Redis

```powershell
npm i express nanoid zod redis
npm i -D @types/express @types/node tsx typescript
```

- create tsconfig.json and paste config

```typescript
{
    "compilerOptions": {
      /* Base Options: */
      "esModuleInterop": true,
      "skipLibCheck": true,
      "target": "es2022",
      "allowJs": true,
      "resolveJsonModule": true,
      "moduleDetection": "force",
      "isolatedModules": true,
      "verbatimModuleSyntax": true,
  
      /* Strictness */
      "strict": true,
      "noUncheckedIndexedAccess": true,
      "noImplicitOverride": true,
  
      /* If transpiling with TypeScript: */
      "module": "NodeNext",
      "outDir": "dist",
      "sourceMap": true,
  
      /* If your code doesn't run in the DOM: */
      "lib": ["es2022"]
    }
  }
```

- package.json

```typescript
    {
      "name": "redis",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "dev": "tsx watch --env-file .env index.ts",
        "build": "tsc",
        "start": "node --env-file .env dist/index.js"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "express": "^4.21.1",
        "nanoid": "^5.0.8",
        "redis": "^4.7.0",
        "zod": "^3.23.8"
      },
      "devDependencies": {
        "@types/express": "^5.0.0",
        "@types/node": "^22.9.0",
        "tsx": "^4.19.2",
        "typescript": "^5.6.3"
      }
    }
```


