# Formation Udemy - Next.js - Partie 3 : Styles et Optimisation

Ce projet est la **Partie 3** de la formation Udemy sur Next.js. Il se concentre sur l'optimisation des styles, des polices, et des performances avec Next.js et Tailwind CSS 4.

## 📚 Structure du Cours

### Partie 3 : Styles et Optimisation 🚧
Démontre les techniques d'optimisation des polices, la configuration avancée de Tailwind CSS 4, et le support du dark mode.

## 🚀 Technologies Utilisées

- **Next.js** 16.1.3 (App Router)
- **React** 19.2.3
- **Tailwind CSS** 4
- **ESLint** pour le linting
- **next/font/google** pour l'optimisation des polices

## 📋 Fonctionnalités

### Pages et Routes
- ✅ Page d'accueil (`/`)
  - Styles optimisés avec Tailwind CSS 4
  - Support du dark mode

### Concepts Implémentés
- **Optimisation des polices** : Utilisation de `next/font/google` pour optimiser le chargement des polices Google Fonts
- **Variables CSS** : Création et utilisation de variables CSS personnalisées pour les couleurs et polices
- **Tailwind CSS 4** : Configuration avancée avec `@theme inline` pour définir le thème directement dans le CSS
- **Dark Mode** : Support automatique via `prefers-color-scheme` media query
- **Performance** : Optimisation du chargement des polices avec `display: "swap"` pour éviter le FOIT (Flash of Invisible Text)

## 🛠️ Installation et Démarrage

### Prérequis
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Installation
```bash
npm install
```

### Démarrage du serveur de développement
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

### Build de production
```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
src/
└── app/
    ├── layout.js      # Layout racine avec configuration des polices
    ├── page.js        # Page d'accueil
    └── globals.css    # Styles globaux avec configuration Tailwind CSS 4
```

## 🔑 Concepts Clés

### Optimisation des Polices avec next/font/google

Next.js optimise automatiquement les polices Google Fonts en :
- Préchargeant les polices nécessaires
- Optimisant les sous-ensembles de caractères
- Évitant le FOIT (Flash of Invisible Text)

**Exemple** (`src/app/layout.js`) :
```javascript
import { Geist, Geist_Mono, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
```

### Variables CSS Personnalisées

Les variables CSS permettent de centraliser la gestion des couleurs et polices.

**Exemple** (`src/app/globals.css`) :
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

### Configuration @theme inline (Tailwind CSS 4)

La directive `@theme inline` permet de définir le thème Tailwind directement dans le CSS.

**Exemple** (`src/app/globals.css`) :
```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

### Support du Dark Mode

Le dark mode est géré automatiquement via les préférences système avec `prefers-color-scheme`.

**Exemple** (`src/app/globals.css`) :
```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

## 📚 Documentation

Pour plus d'informations sur les concepts implémentés et l'avancement de cette partie, consultez le fichier [SUIVI_COURS.md](../../SUIVI_COURS.md) à la racine du projet.

## 🔗 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [next/font Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 📝 Notes

Ce projet a été créé dans le cadre d'un cours d'apprentissage sur Next.js. Il sert de référence pour comprendre l'optimisation des polices, la configuration avancée de Tailwind CSS 4, et les techniques d'optimisation des performances.

## 🚢 Déploiement

Le moyen le plus simple de déployer cette application Next.js est d'utiliser [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.
