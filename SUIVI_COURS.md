# Suivi de Cours - Formation Udemy Next.js

## 📚 Informations du Projet
- **Projet** : Formation Udemy
- **Framework** : Next.js 16.1.1
- **React** : 19.2.3
- **Styling** : Tailwind CSS 4

---

## 📖 Partie 1 : Next.js App Router ✅ TERMINÉE

---

## ✅ Avancement

### 1. Configuration Initiale
- [x] Initialisation du projet Next.js avec App Router
- [x] Configuration de Tailwind CSS
- [x] Configuration ESLint
- [x] Structure de base du projet

### 2. Pages Principales
- [x] Page d'accueil (`/`)
  - Composant Home avec titre stylisé
- [x] Page Blog (`/blog`)
  - Liste des articles de blog avec fetch d'API (JSONPlaceholder)
  - Affichage en grille responsive
  - Liens vers les articles individuels
  - Liste des articles de blog avec fetch d'API (JSONPlaceholder)
  - Affichage en grille responsive
  - Liens vers les articles individuels
- [x] Page Contact (`/contact`)
  - Route créée
- [x] Page Utilisateurs (`/utilisateurs`)
  - Composant async avec simulation de chargement de données
  - Affichage de la liste des utilisateurs
  - Composant Loading pour l'état de chargement
- [x] Page Utilisateurs (`/utilisateurs`)
  - Composant async avec simulation de chargement de données
  - Affichage de la liste des utilisateurs
  - Composant Loading pour l'état de chargement

### 3. Système de Dashboards
- [x] Layout des dashboards (`/dashboards/layout.jsx`)
  - Navigation entre les sous-dashboards
  - Liens vers Finance et RH
- [x] Page principale des dashboards (`/dashboards`)
- [x] Dashboard Finance (`/dashboards/finance`)
- [x] Dashboard RH (`/dashboards/rh`)

### 4. Routes Dynamiques
- [x] Route dynamique Blog (`/blog/[id]/page.jsx`)
  - Affichage d'un article de blog spécifique
  - Fetch d'API pour récupérer les données
  - Lien de retour vers la liste des blogs

### 5. Route Groups (Groupes de Routes)
- [x] Route Group `(main app)` 
  - Organisation des routes principales de l'application
  - Layout spécifique avec intégration de la Navbar
  - Routes : blog, contact, dashboards, utilisateurs, page d'accueil
- [x] Route Group `(marketing)`
  - Organisation des pages marketing
  - Page Discover (`/discover`) - Landing page

### 6. Gestion d'Erreurs
- [x] Composant Error (`/utilisateurs/error.jsx`)
  - Gestion des erreurs pour la page utilisateurs
- [x] Page Not Found (`/not-found.jsx`)
  - Page 404 personnalisée pour les routes non trouvées
  - Message d'erreur stylisé

### 7. Composants
- [x] Composant Navbar (`src/components/navbar.jsx`)
  - Navigation principale avec liens vers :
    - Accueil
    - Blog
    - Utilisateurs
    - Utilisateurs
    - Dashboards
    - Contact
  - Utilisation de `usePathname` pour la navigation active
  - Highlighting de la page active (ex: Contact avec bg-red-500)
  - Composant Client avec `"use client"`
- [x] Composant Loading (`/utilisateurs/loading.jsx`)
  - État de chargement pour la page utilisateurs
- [x] Layouts imbriqués
  - Layout principal (`layout.jsx`)
  - Layout pour route group `(main app)` avec Navbar intégrée

### 8. Structure des Routes
```
/                    → Page d'accueil (route group: main app)
/blog                → Page blog (liste des articles)
/blog/[id]           → Article de blog spécifique (route dynamique)
/contact             → Page contact
/utilisateurs        → Page utilisateurs (avec loading et error)
/dashboards          → Page principale dashboards
/dashboards/finance  → Dashboard Finance
/dashboards/rh       → Dashboard RH
/discover            → Landing page (route group: marketing)
/*                   → Page 404 (not-found.jsx)
```

**Route Groups** (n'apparaissent pas dans l'URL) :
- `(main app)` : Routes principales de l'application
- `(marketing)` : Pages marketing/publicitaires

---

## 📝 Notes Techniques
- **Next.js App Router** : Utilisation du système de fichiers pour le routing
- **Layouts imbriqués** : Organisation hiérarchique des layouts (root, route groups, dashboards)
- **Route Groups** : Organisation logique des routes avec `(main app)` et `(marketing)` sans impact sur l'URL
- **Composants Server Components** : Utilisation de composants async pour le chargement de données
- **Routes dynamiques** : Implémentation de routes avec paramètres `[id]`
- **Fetch d'API** : Intégration avec JSONPlaceholder pour les données de blog
- **Composants Loading** : Gestion des états de chargement avec `loading.jsx`
- **Gestion d'erreurs** : Composants `error.jsx` et `not-found.jsx` pour une meilleure UX
- **Client Components** : Utilisation de `"use client"` pour les composants nécessitant des hooks React (`usePathname`)
- **Navigation** : Composant Link de Next.js pour la navigation côté client
- **Styling** : Tailwind CSS 4 pour le design moderne et responsive

---

## 🎓 Statut de la Partie 1
✅ **PARTIE 1 TERMINÉE** - Toutes les fonctionnalités principales du cours Next.js App Router ont été implémentées.

### Fonctionnalités Complétées
- ✅ Configuration et structure de base
- ✅ Pages statiques et dynamiques
- ✅ Routes dynamiques avec paramètres
- ✅ Layouts imbriqués et route groups
- ✅ Composants Server et Client
- ✅ Gestion des états de chargement (loading)
- ✅ Gestion des erreurs (error, not-found)
- ✅ Navigation et routing
- ✅ Fetch d'API et données asynchrones
- ✅ Styling avec Tailwind CSS

---

## 📖 Partie 2 : Composants et Données ✅ TERMINÉE

---

## ✅ Avancement

### 1. Configuration Initiale
- [x] Initialisation du projet Next.js avec App Router
- [x] Configuration TypeScript
- [x] Configuration Tailwind CSS 4
- [x] Configuration ESLint
- [x] Structure de base du projet

### 2. Pages Principales
- [x] Page d'accueil (`/`)
  - Page simple avec titre stylisé
  - Utilisation de Tailwind CSS pour le styling
- [x] Page Form (`/form`)
  - Composant Client avec `"use client"`
  - Utilisation du hook `useState` pour gérer l'état
  - Input contrôlé avec synchronisation bidirectionnelle
  - Affichage en temps réel de la valeur saisie
- [x] Page Image (`/image`)
  - Composant Server async
  - Utilisation de Server Actions pour récupérer les données
  - Fetch d'API avec JSONPlaceholder (photos) via Server Actions
  - Affichage d'une image avec son titre
  - Récupération de données asynchrones côté serveur
- [x] Page Blog (`/blog`)
  - Composant Server async
  - Liste des articles de blog avec fetch d'API (JSONPlaceholder)
  - Utilisation de Server Actions pour récupérer les posts
  - Affichage en grille responsive avec Tailwind CSS
  - Liens vers les articles individuels avec Next.js Link
- [x] Page Blog Dynamique (`/blog/[id]`)
  - Route dynamique pour afficher un article spécifique
  - Utilisation de Server Actions pour récupérer un post par ID
  - Affichage du titre et du contenu complet
  - Lien de retour vers la liste des blogs
- [x] Page Settings (`/settings`)
  - Page de paramètres avec gestion du thème
  - Utilisation du Context API pour accéder au dark mode
  - Bouton pour basculer entre light et dark mode

### 3. Concepts Implémentés
- [x] **Composants Client** : Utilisation de `"use client"` pour les composants nécessitant des hooks React
- [x] **Gestion d'état** : Utilisation de `useState` pour les composants interactifs
- [x] **Inputs contrôlés** : Gestion des formulaires avec état React
- [x] **Composants Server** : Utilisation de composants async pour le chargement de données
- [x] **Server Actions** : Création de fonctions serveur avec `"use server"` pour la récupération de données
- [x] **Routes dynamiques** : Implémentation de routes avec paramètres `[id]`
- [x] **Fetch d'API** : Intégration avec JSONPlaceholder pour récupérer des données
- [x] **API Routes** : Création de routes API pour exposer des endpoints
- [x] **Middleware** : Interception et manipulation des requêtes avant le rendu
- [x] **State Management** : Concepts et pratiques de gestion d'état global
- [x] **Context API** : Utilisation de React Context pour partager l'état global (DarkModeContext)
- [x] **Dark Mode** : Implémentation du mode sombre avec Context API et Tailwind CSS 4
- [x] **TypeScript** : Utilisation de TypeScript pour le typage statique
- [x] **Alias de chemins** : Configuration de `@/*` pour les imports absolus
- [x] **Styling** : Tailwind CSS 4 pour le design moderne et responsive
- [x] **Navigation** : Utilisation de Next.js Link pour la navigation côté client
- [x] **Layouts imbriqués** : Organisation des layouts avec layouts spécifiques par route

### 4. Structure des Routes
```
/          → Page d'accueil
/form      → Page avec formulaire contrôlé (Client Component)
/image     → Page avec fetch d'image (Server Component + Server Actions)
/blog      → Page blog (liste des articles, Server Component + API Route locale)
/blog/[id] → Article de blog spécifique (route dynamique, Server Component + Server Actions)
/settings  → Page de paramètres avec gestion du thème (Client Component + Context API)
/api/post  → Route API pour récupérer des données (GET)
```

### 5. Server Actions
- [x] Création du module `app/lib/serverActions.jsx`
  - Fonction `getImg()` : Récupération d'une image depuis JSONPlaceholder
  - Fonction `getPosts()` : Récupération de tous les posts
  - Fonction `getPost(id)` : Récupération d'un post spécifique par ID
  - Utilisation de la directive `"use server"` pour marquer les Server Actions

### 6. API Routes
- [x] Création de route API (`app/api/post/route.js`)
  - Route GET pour récupérer des données
  - Retour de données JSON avec headers appropriés
  - Utilisation de NextResponse pour les réponses API

### 7. Middleware
- [x] Création du middleware (`middleware.js`)
  - Interception des requêtes avant le rendu
  - Redirection conditionnelle (ex: `/private` → `/`)
  - Utilisation de `NextResponse` pour manipuler les requêtes

### 8. State Management
- [x] **Chapitre 23 : Utiliser un state manager partie 1** (7 min)
  - Introduction aux concepts de state management
  - Comparaison entre état local et état global
  - Présentation des différentes solutions de state management
- [x] **Chapitre 24 : Utiliser un state manager partie 2** (13 min)
  - Approfondissement des concepts de state management
  - Implémentation pratique d'un state manager
  - Intégration avec Next.js et React

### 9. Context API et Dark Mode
- [x] Création du Context (`app/context/DarkModeContext.js`)
  - Utilisation de `createContext` pour créer un contexte React
  - Provider avec état `theme` et fonction `toggleTheme`
  - Gestion de la classe `dark` sur l'élément HTML via `useEffect`
- [x] Composant SwitchThemeBtn (`app/component/SwitchThemeBtn.jsx`)
  - Utilisation de `useContext` pour accéder au DarkModeContext
  - Bouton fixe pour basculer entre light et dark mode
- [x] Configuration Tailwind CSS 4 pour Dark Mode
  - Utilisation de `@custom-variant dark` dans `globals.css`
  - Configuration du dark mode basé sur la classe `.dark`
  - Support des classes `dark:*` dans les composants
- [x] Intégration dans les layouts
  - DarkModeProvider dans le layout racine
  - Layout spécifique pour `/settings` avec DarkModeProvider
  - Styles dark mode appliqués au body avec `dark:bg-slate-900 dark:text-slate-200`

### 10. Configuration TypeScript
- [x] Configuration des alias de chemins (`tsconfig.json`)
  - Alias `@/*` pointant vers `./app/*`
  - Imports absolus avec `@/component/`, `@/context/`, etc.
  - Amélioration de la lisibilité et maintenabilité du code
- [x] Configuration Tailwind CSS 4 (`tailwind.config.ts`)
  - Configuration du dark mode avec `darkMode: "class"`
  - Extension du thème avec couleurs personnalisées
  - Support des variants dark mode

---

## 📝 Notes Techniques - Partie 2
- **Composants Client vs Server** : Distinction entre composants client (`"use client"`) et serveur (par défaut)
- **Hooks React** : Utilisation de `useState` dans les composants client pour gérer l'état local
- **Inputs contrôlés** : Synchronisation entre l'état React et les valeurs des inputs avec `value` et `onChange`
- **Composants async** : Utilisation de fonctions async dans les Server Components pour le chargement de données
- **Server Actions** : Fonctions serveur marquées avec `"use server"` pour centraliser la logique de récupération de données
- **Routes dynamiques** : Implémentation de routes avec paramètres dynamiques `[id]` pour les pages de détail
- **Fetch API** : Récupération de données depuis des APIs externes via Server Actions ou directement dans les Server Components
- **API Routes** : Création de routes API dans `app/api/` pour exposer des endpoints REST avec méthodes HTTP (GET, POST, etc.)
- **Middleware** : Fonction exécutée avant chaque requête pour intercepter, rediriger ou modifier les requêtes et réponses
- **State Management** : Concepts de gestion d'état global pour partager des données entre composants (alternatives à useState pour l'état global)
- **Context API** : Utilisation de React Context (`createContext`, `Provider`, `useContext`) pour partager l'état global entre composants sans prop drilling
- **Dark Mode** : Implémentation complète du mode sombre avec Context API, gestion de la classe `dark` sur l'élément HTML, et configuration Tailwind CSS 4 avec `@custom-variant`
- **Hooks React avancés** : Utilisation de `useContext` pour accéder aux valeurs du contexte, `useEffect` pour les effets de bord (ajout/suppression de classe)
- **Alias de chemins** : Configuration TypeScript pour les imports absolus avec `@/*` améliorant la lisibilité et évitant les chemins relatifs complexes
- **Layouts imbriqués** : Organisation des layouts avec layouts spécifiques par route (ex: `/settings/layout.tsx`) pour encapsuler la logique de contexte
- **Réutilisabilité** : Organisation du code avec Server Actions dans un module dédié (`lib/serverActions.jsx`)
- **TypeScript** : Typage statique pour améliorer la maintenabilité du code
- **Styling** : Tailwind CSS 4 pour un styling moderne et responsive avec grilles adaptatives et support du dark mode
- **Navigation** : Utilisation de Next.js Link pour la navigation optimisée côté client

---

## 🎓 Statut de la Partie 2
✅ **PARTIE 2 TERMINÉE** - Toutes les fonctionnalités principales des composants, de la gestion des données et du state management ont été implémentées.

### Fonctionnalités Complétées
- ✅ Configuration TypeScript et structure de base
- ✅ Distinction entre composants Client et Server
- ✅ Gestion d'état avec useState
- ✅ Formulaires contrôlés
- ✅ Server Actions pour la récupération de données
- ✅ Routes dynamiques avec paramètres
- ✅ Fetch d'API dans les Server Components et Server Actions
- ✅ API Routes pour exposer des endpoints
- ✅ Middleware pour intercepter et manipuler les requêtes
- ✅ Context API pour la gestion d'état global
- ✅ Dark Mode avec Context API et Tailwind CSS 4
- ✅ State Management (chapitres 23-24 complétés)
- ✅ Layouts imbriqués avec Context Providers
- ✅ Configuration des alias TypeScript (`@/*`)
- ✅ Navigation avec Next.js Link
- ✅ Styling avec Tailwind CSS (grilles responsive + dark mode)

---

---

## 📖 Partie 3 : Styles et Optimisation 🚧 EN COURS

---

## ✅ Avancement

### 1. Configuration Initiale
- [x] Initialisation du projet Next.js avec App Router
- [x] Configuration Tailwind CSS 4
- [x] Configuration ESLint
- [x] Structure de base du projet avec dossier `src/app/`

### 2. Optimisation des Polices
- [x] Configuration de Google Fonts avec `next/font/google`
  - Import de Geist et Geist_Mono
  - Import de Inter avec configuration `display: "swap"`
  - Variables CSS pour les polices (`--font-geist-sans`, `--font-geist-mono`, `--font-inter`)
  - Application des polices via className dans le layout

### 3. Configuration CSS et Thème
- [x] Configuration Tailwind CSS 4 avec `@import "tailwindcss"`
- [x] Variables CSS personnalisées dans `:root`
  - Variables `--background` et `--foreground` pour les couleurs
- [x] Configuration `@theme inline` pour Tailwind CSS 4
  - Mapping des variables CSS vers les couleurs Tailwind
  - Configuration des polices dans le thème
- [x] Support du Dark Mode avec `prefers-color-scheme`
  - Media query pour le mode sombre
  - Variables CSS adaptées pour le dark mode

### 4. Pages Principales
- [x] Page d'accueil (`/`)
  - Utilisation des classes Tailwind avec support dark mode
  - Application des polices configurées

### 5. Concepts Implémentés
- [x] **Optimisation des polices** : Utilisation de `next/font/google` pour optimiser le chargement des polices
- [x] **Variables CSS** : Création et utilisation de variables CSS personnalisées
- [x] **Tailwind CSS 4** : Configuration avancée avec `@theme inline`
- [x] **Dark Mode** : Support automatique via `prefers-color-scheme`
- [x] **Optimisation des performances** : Chargement optimisé des polices avec `display: "swap"`

### 6. Structure des Routes
```
/ → Page d'accueil avec styles optimisés
```

---

## 📝 Notes Techniques - Partie 3
- **next/font/google** : Optimisation automatique des polices Google Fonts avec préchargement et optimisation des sous-ensembles
- **Variables CSS** : Utilisation de variables CSS pour centraliser la gestion des couleurs et polices
- **@theme inline** : Directive Tailwind CSS 4 pour définir le thème directement dans le CSS
- **prefers-color-scheme** : Support natif du dark mode basé sur les préférences système
- **display: swap** : Stratégie de chargement des polices pour améliorer les performances (évite le FOIT)
- **Optimisation des performances** : Réduction du temps de chargement grâce à l'optimisation des polices

---

## 🎓 Statut de la Partie 3
🚧 **EN COURS** - Les concepts de styles et d'optimisation sont en cours d'apprentissage.

### Fonctionnalités Complétées
- ✅ Configuration Tailwind CSS 4
- ✅ Optimisation des polices avec next/font/google
- ✅ Variables CSS personnalisées
- ✅ Configuration @theme inline
- ✅ Support du dark mode avec prefers-color-scheme
- ✅ Application des polices dans les composants

---

## 📅 Dernière Mise à Jour
Date : 19/01/2026
- Déplacement du suivi de cours à la racine du projet
- Mise à jour de la Partie 2 avec les fonctionnalités implémentées
- Ajout des Server Actions et routes dynamiques pour le blog
- Ajout des API Routes et Middleware
- Complétion des chapitres 23 et 24 sur les state managers (parties 1 et 2)
- Implémentation du Context API avec DarkModeContext
- Configuration du Dark Mode avec Tailwind CSS 4 (`@custom-variant`)
- Création de la page Settings avec gestion du thème
- Configuration des alias TypeScript (`@/*`)
- **Partie 2 marquée comme TERMINÉE**
- Début de la Partie 3 : Styles et Optimisation
- Configuration de Google Fonts avec next/font/google
- Configuration Tailwind CSS 4 avec @theme inline
- Support du dark mode avec prefers-color-scheme
- Traduction des messages de commit en anglais