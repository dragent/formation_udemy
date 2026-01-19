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
  - Intégration avec Server Actions pour tester la récupération de données
- ✅ Page Image avec fetch d'API (`/image`)
- ✅ Page Blog avec liste des articles (`/blog`)
  - Utilisation de l'API locale (`/api/post`) pour récupérer les données
- ✅ Page Blog dynamique avec article spécifique (`/blog/[id]`)
- ✅ Route API (`/api/post`)
  - Endpoint GET pour récupérer des données de posts
- ✅ Middleware (`middleware.js`)
  - Interception des requêtes et redirection conditionnelle

### Concepts Implémentés
- **Composants Client** : Utilisation de `"use client"` pour les composants nécessitant des hooks React
- **Gestion d'état** : Utilisation de `useState` pour les composants interactifs
- **Inputs contrôlés** : Gestion des formulaires avec état React et synchronisation bidirectionnelle
- **Composants Server** : Utilisation de composants async pour le chargement de données
- **Server Actions** : Fonctions serveur avec `"use server"` pour centraliser la logique de récupération de données
- **Routes dynamiques** : Implémentation de routes avec paramètres `[id]` pour les pages de détail
- **Fetch d'API** : Intégration avec JSONPlaceholder et API locale pour récupérer des données
- **API Routes** : Création de routes API dans `app/api/` pour exposer des endpoints REST
- **Middleware** : Interception et manipulation des requêtes avant le rendu
- **State Management** : Concepts de gestion d'état global (chapitres 23-24)
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
│   └── page.jsx      # Page avec formulaire contrôlé (Client Component + Server Actions)
├── image/
│   └── page.jsx      # Page avec fetch d'image (Server Component + Server Actions)
├── blog/
│   ├── page.jsx      # Liste des articles (Server Component + API Route locale)
│   └── [id]/
│       └── page.jsx  # Article spécifique (route dynamique, Server Component)
├── api/
│   └── post/
│       └── route.js   # Route API GET pour récupérer des posts
└── lib/
    └── serverActions.jsx  # Server Actions pour récupération de données

middleware.js         # Middleware pour interception des requêtes
```

## 🔑 Concepts Clés

### Composants Client
Les composants client utilisent la directive `"use client"` et permettent d'utiliser des hooks React comme `useState`, `useEffect`, etc.

**Exemple** (`/form`) :
- Utilisation de `useState` pour gérer l'état de l'input
- Input contrôlé avec `value` et `onChange`
- Affichage en temps réel de la valeur saisie
- Bouton pour tester l'appel de Server Actions (`getPost`)

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
- Utilisation de l'API locale `/api/post` pour récupérer les données
- Affichage en grille responsive avec Tailwind CSS
- Navigation vers les articles individuels avec Next.js Link

### Routes Dynamiques
Les routes dynamiques permettent de créer des pages avec des paramètres variables.

**Exemple** (`/blog/[id]`) :
- Route avec paramètre dynamique `[id]`
- Utilisation de `getPost(id)` pour récupérer un article spécifique
- Affichage du contenu complet de l'article
- Lien de retour vers la liste des blogs

### API Routes
Les API Routes permettent de créer des endpoints REST dans Next.js en créant des fichiers `route.js` dans le dossier `app/api/`.

**Exemple** (`app/api/post/route.js`) :
- Export de fonctions nommées correspondant aux méthodes HTTP (GET, POST, PUT, DELETE, etc.)
- Retour de réponses JSON avec les headers appropriés
- Utilisation de `Response` ou `NextResponse` pour les réponses

**Utilisation** :
- La page `/blog` utilise maintenant l'endpoint local `/api/post` au lieu d'une API externe
- Permet de tester et développer des APIs personnalisées

### Middleware
Le middleware Next.js permet d'intercepter et de manipuler les requêtes avant qu'elles n'atteignent les routes.

**Exemple** (`middleware.js`) :
- Fonction `middleware` exportée à la racine du projet
- Interception de toutes les requêtes entrantes
- Redirection conditionnelle (ex: `/private` → `/`)
- Utilisation de `NextResponse` pour manipuler les requêtes et réponses

**Cas d'usage** :
- Authentification et autorisation
- Redirection de routes
- Modification des headers
- Logging et monitoring

### State Management
Concepts de gestion d'état global pour partager des données entre composants.

**Chapitres couverts** :
- **Partie 1** : Introduction aux concepts de state management, comparaison entre état local et état global
- **Partie 2** : Approfondissement des concepts, implémentation pratique, intégration avec Next.js et React

**Alternatives à `useState`** :
- Pour l'état local : `useState` reste la solution recommandée
- Pour l'état global : solutions comme Context API, Zustand, Redux, etc.

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
