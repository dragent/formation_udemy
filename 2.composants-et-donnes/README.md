# Formation Udemy - Next.js - Partie 2 : Composants et Données

Ce projet est la **Partie 2** de la formation Udemy sur Next.js. Il se concentre sur les concepts de composants React, la gestion des données, et la distinction entre composants Client et Server.

## 📚 Structure du Cours

### Partie 2 : Composants et Données 🚧
Démontre les concepts fondamentaux des composants React dans Next.js, la gestion d'état, et le chargement de données.

## 🚀 Technologies Utilisées

- **Next.js** 16.1.3 (App Router)
- **React** 19.2.3
- **TypeScript** 5
- **Tailwind CSS** 4
- **ESLint** pour le linting

## 📋 Fonctionnalités

### Pages et Routes
- ✅ Page d'accueil (`/`)
- ✅ Page Form avec input contrôlé (`/form`)
- ✅ Page Image avec fetch d'API (`/image`)
- ✅ Page Blog avec liste des articles (`/blog`)
- ✅ Page Blog dynamique avec article spécifique (`/blog/[id]`)

### Concepts Implémentés
- **Composants Client** : Utilisation de `"use client"` pour les composants nécessitant des hooks React
- **Gestion d'état** : Utilisation de `useState` pour les composants interactifs
- **Inputs contrôlés** : Gestion des formulaires avec état React et synchronisation bidirectionnelle
- **Composants Server** : Utilisation de composants async pour le chargement de données
- **Server Actions** : Fonctions serveur avec `"use server"` pour centraliser la logique de récupération de données
- **Routes dynamiques** : Implémentation de routes avec paramètres `[id]` pour les pages de détail
- **Fetch d'API** : Intégration avec JSONPlaceholder pour récupérer des données
- **Navigation** : Utilisation de Next.js Link pour la navigation optimisée
- **TypeScript** : Typage statique pour améliorer la maintenabilité

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
app/
├── layout.tsx        # Layout racine avec configuration de base
├── page.tsx          # Page d'accueil
├── form/
│   └── page.jsx      # Page avec formulaire contrôlé (Client Component)
├── image/
│   └── page.jsx      # Page avec fetch d'image (Server Component + Server Actions)
├── blog/
│   ├── page.jsx      # Liste des articles (Server Component + Server Actions)
│   └── [id]/
│       └── page.jsx  # Article spécifique (route dynamique, Server Component)
└── lib/
    └── serverActions.jsx  # Server Actions pour récupération de données
```

## 🔑 Concepts Clés

### Composants Client
Les composants client utilisent la directive `"use client"` et permettent d'utiliser des hooks React comme `useState`, `useEffect`, etc.

**Exemple** (`/form`) :
- Utilisation de `useState` pour gérer l'état de l'input
- Input contrôlé avec `value` et `onChange`
- Affichage en temps réel de la valeur saisie

### Composants Server
Les composants serveur sont par défaut dans Next.js et peuvent être async pour charger des données.

**Exemple** (`/image`) :
- Fonction async pour fetch des données
- Utilisation de Server Actions pour récupérer les données
- Récupération d'image depuis JSONPlaceholder API
- Affichage des données côté serveur

### Server Actions
Les Server Actions sont des fonctions serveur marquées avec `"use server"` qui permettent de centraliser la logique de récupération de données.

**Exemple** (`app/lib/serverActions.jsx`) :
- `getImg()` : Récupère une image depuis JSONPlaceholder
- `getPosts()` : Récupère tous les posts
- `getPost(id)` : Récupère un post spécifique par ID
- Réutilisables dans plusieurs composants

**Exemple d'utilisation** (`/blog`) :
- Utilisation de `getPosts()` dans un Server Component
- Affichage en grille responsive avec Tailwind CSS
- Navigation vers les articles individuels avec Next.js Link

### Routes Dynamiques
Les routes dynamiques permettent de créer des pages avec des paramètres variables.

**Exemple** (`/blog/[id]`) :
- Route avec paramètre dynamique `[id]`
- Utilisation de `getPost(id)` pour récupérer un article spécifique
- Affichage du contenu complet de l'article
- Lien de retour vers la liste des blogs

## 📚 Documentation

Pour plus d'informations sur les concepts implémentés et l'avancement de cette partie, consultez le fichier [SUIVI_COURS.md](../../SUIVI_COURS.md) à la racine du projet.

## 🔗 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [App Router Documentation](https://nextjs.org/docs/app)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📝 Notes

Ce projet a été créé dans le cadre d'un cours d'apprentissage sur Next.js. Il sert de référence pour comprendre les concepts de composants Client et Server, la gestion d'état avec React, et le chargement de données dans Next.js 16.

## 🚢 Déploiement

Le moyen le plus simple de déployer cette application Next.js est d'utiliser [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.
