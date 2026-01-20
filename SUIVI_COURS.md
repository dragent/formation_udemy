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
  - Intégration du composant Card
- [x] Page Pricing (`/pricing`)
  - Utilisation de CSS Modules avec `pricing.module.css`
  - Démonstration de l'approche CSS Modules

### 5. Composants et Styles
- [x] Composant Card (`src/components/Card/Card.jsx`)
  - Utilisation de SCSS avec import global
  - Import direct : `import './Card.scss'`
  - Utilisation des classes directement : `className="Card"`
  - Démonstration de l'approche SCSS globale
- [x] Page Pricing (`src/app/pricing/page.jsx`)
  - Utilisation de CSS Modules avec `pricing.module.css`
  - Import avec objet styles : `import styles from './pricing.module.css'`
  - Utilisation via objet : `className={styles.title}`
  - Démonstration de l'approche CSS Modules (scoped styles)

### 6. Concepts Implémentés
- [x] **Optimisation des polices** : Utilisation de `next/font/google` pour optimiser le chargement des polices
- [x] **Variables CSS** : Création et utilisation de variables CSS personnalisées
- [x] **Tailwind CSS 4** : Configuration avancée avec `@theme inline`
- [x] **SCSS** : Utilisation de SCSS avec imports globaux pour les styles de composants
- [x] **CSS Modules** : Utilisation de CSS Modules (`.module.css`) pour les styles scoped
- [x] **Dark Mode** : Support automatique via `prefers-color-scheme`
- [x] **Optimisation des performances** : Chargement optimisé des polices avec `display: "swap"`

### 7. Structure des Routes
```
/         → Page d'accueil avec styles optimisés
/pricing  → Page pricing avec CSS Modules
```

### 8. Structure des Composants
```
src/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── pricing/
│   │   ├── page.jsx
│   │   └── pricing.module.css
│   └── globals.css
└── components/
    └── Card/
        ├── Card.jsx
        └── Card.scss
```

### 9. Chapitres à Compléter - Partie 3

#### A. Optimisation et Métadonnées
- [ ] **Chapitre 29 : Optimisation des images** (6 min)
  - Utilisation de `next/image` pour optimiser les images
  - Configuration des images Next.js
- [ ] **Chapitre 30 : Gérer les métadonnées** (4 min)
  - Configuration des métadonnées SEO
  - Utilisation de `metadata` dans Next.js

#### B. Projet Blog - Mise en Place
- [ ] **Chapitre 31 : Présentation du projet** (6 min)
  - Vue d'ensemble du projet blog
  - Architecture et fonctionnalités prévues
- [ ] **Chapitre 32 : Mise en place** (5 min)
  - Initialisation du projet
  - Configuration de base
- [ ] **Chapitre 33 : Création du layout et de la technique du "footer toujours en bas"** (17 min)
  - Structure du layout principal
  - Technique CSS pour footer sticky

#### C. Pages et Formulaires
- [ ] **Chapitre 34 : Création de la page d'accueil avec des données statiques** (22 min)
  - Page d'accueil du blog
  - Affichage de données statiques
- [ ] **Chapitre 35 : Création du formulaire de mise en ligne partie 1** (9 min)
  - Structure du formulaire d'ajout d'article
- [ ] **Chapitre 36 : Création du formulaire de mise en ligne partie 2** (9 min)
  - Finalisation du formulaire
  - Gestion des champs

#### D. Base de Données et Modèles
- [ ] **Chapitre 37 : Création de la base de données et connexion** (13 min)
  - Configuration de la base de données
  - Connexion à MongoDB/PostgreSQL
- [ ] **Chapitre 38 : Création de la server action "addPost"** (6 min)
  - Server Action pour ajouter un article
- [ ] **Chapitre 39 : Création du modèle du premier article** (13 min)
  - Modèle de données pour les articles
  - Schéma Mongoose/Prisma
- [ ] **Chapitre 40 : Afficher un article** (7 min)
  - Page de détail d'un article
  - Route dynamique pour les articles
- [ ] **Chapitre 41 : Créer "getPosts" pour récupérer plusieurs articles** (6 min)
  - Server Action pour récupérer la liste des articles

#### E. Système de Tags
- [ ] **Chapitre 42 : Coder l'interface de l'ajout de tags** (17 min)
  - UI pour ajouter des tags aux articles
- [ ] **Chapitre 43 : Coder les fonctions liées aux tags** (9 min)
  - Logique de gestion des tags
- [ ] **Chapitre 44 : Créer le modèle "tag"** (3 min)
  - Modèle de données pour les tags
- [ ] **Chapitre 45 : Création des tags** (15 min)
  - Implémentation complète du système de tags
- [ ] **Chapitre 46 : Enrichir getPost et afficher les tags** (6 min)
  - Affichage des tags sur les articles

#### F. Markdown et Sécurité
- [ ] **Chapitre 47 : Transformer le Markdown en HTML et l'afficher** (11 min)
  - Parsing et affichage du Markdown
  - Bibliothèque de parsing Markdown
- [ ] **Chapitre 48 : Gérer les attaques XSS** (8 min)
  - Sécurisation contre les attaques XSS
  - Sanitization du contenu

#### G. Styling des Articles
- [ ] **Chapitre 49 : Styliser un article** (3 min)
  - Styles pour l'affichage des articles
- [ ] **Chapitre 50 : Utiliser une colorisation syntaxique pour enjoliver le code dans l'article** (11 min)
  - Syntax highlighting pour les blocs de code
  - Bibliothèque de colorisation syntaxique

#### H. Gestion des Articles
- [ ] **Chapitre 51 : Gérer les infos liées à l'ajout d'un article** (19 min)
  - Gestion complète des métadonnées d'article
  - Validation et traitement des données

#### I. Authentification - Inscription
- [ ] **Chapitre 52 : Créer les pages de connexion et d'inscription** (4 min)
  - Routes pour authentification
- [ ] **Chapitre 53 : UI de la page d'inscription** (17 min)
  - Interface utilisateur d'inscription
- [ ] **Chapitre 54 : Créer le modèle "user"** (4 min)
  - Modèle de données utilisateur
- [ ] **Chapitre 55 : Créer la server action register** (10 min)
  - Server Action pour l'inscription
- [ ] **Chapitre 56 : Gérer l'envoi du formulaire** (13 min)
  - Traitement du formulaire d'inscription

#### J. Authentification - Connexion
- [ ] **Chapitre 57 : Coder l'UI de la page de connexion** (7 min)
  - Interface utilisateur de connexion
- [ ] **Chapitre 58 : Comment fonctionne une authentification par session de base de données ?** (5 min)
  - Explication du système de sessions
- [ ] **Chapitre 59 : Création du modèle "session"** (3 min)
  - Modèle de données pour les sessions
- [ ] **Chapitre 60 : Création de la server action login** (17 min)
  - Server Action pour la connexion
- [ ] **Chapitre 61 : Gérer l'envoi du formulaire de connexion** (9 min)
  - Traitement du formulaire de connexion

#### K. Gestion des Sessions
- [ ] **Chapitre 62 : Créer la méthode lisant le cookie d'authentification** (6 min)
  - Lecture et validation des cookies de session
- [ ] **Chapitre 63 : Affichage conditionnel dans la Navbar** (3 min)
  - Navigation adaptée selon l'état d'authentification
- [ ] **Chapitre 64 : Création du dropdown, partie 1** (12 min)
  - Menu déroulant utilisateur
- [ ] **Chapitre 65 : Gestion du clic en dehors du dropdown** (5 min)
  - Fermeture du dropdown au clic extérieur
- [ ] **Chapitre 66 : Mise en place du "sign out"** (7 min)
  - Fonctionnalité de déconnexion
- [ ] **Chapitre 67 : Gérer la potentielle redirection** (8 min)
  - Redirection après authentification

#### L. Gestion des Erreurs
- [ ] **Chapitre 68 : Création de la sous-classe AppError** (9 min)
  - Classe personnalisée pour les erreurs
- [ ] **Chapitre 69 : Mieux gérer les erreurs** (9 min)
  - Système de gestion d'erreurs amélioré
- [ ] **Chapitre 70 : Gérer les erreurs de l'inscription** (12 min)
  - Gestion des erreurs d'inscription
- [ ] **Chapitre 71 : Gérer les erreurs des méthodes serveurs** (11 min)
  - Gestion d'erreurs dans les Server Actions

#### M. Pages Privées et Upload
- [ ] **Chapitre 72 : Mise en place des pages privées** (4 min)
  - Protection des routes privées
- [ ] **Chapitre 73 : Coder l'interface de mise en ligne de l'image** (11 min)
  - UI pour upload d'images
- [ ] **Chapitre 74 : Création du compte BunnyCDN** (9 min)
  - Configuration du CDN pour les images
- [ ] **Chapitre 75 : Logique Back-End de la mise en ligne de l'image** (22 min)
  - Server Action pour upload d'images
- [ ] **Chapitre 76 : Afficher l'image de l'article et l'auteur** (15 min)
  - Affichage des images et informations auteur

#### N. Dashboard et Gestion
- [ ] **Chapitre 77 : Créer le composant réutilisable BlogCard** (8 min)
  - Composant de carte d'article
- [ ] **Chapitre 78 : Créer l'interface de la liste du dashboard** (11 min)
  - Interface du dashboard utilisateur
- [ ] **Chapitre 79 : Récupérer les posts d'un utilisateur** (5 min)
  - Server Action pour récupérer les articles de l'utilisateur
- [ ] **Chapitre 80 : Gérer la suppression d'un post** (21 min)
  - Fonctionnalité de suppression d'article

#### O. Catégories et Navigation
- [ ] **Chapitre 81 : Créer une aggregation** (11 min)
  - Aggregations MongoDB pour les statistiques
- [ ] **Chapitre 82 : Coder l'UI de la page categories** (10 min)
  - Page de liste des catégories/tags
- [ ] **Chapitre 83 : Récupérer les posts par tag** (7 min)
  - Server Action pour filtrer par tag
- [ ] **Chapitre 84 : Créer l'interface de la page des posts par tag** (5 min)
  - Page d'affichage des articles par tag
- [ ] **Chapitre 85 : Coder l'UI de la page des articles par auteur** (9 min)
  - Page d'affichage des articles par auteur
- [ ] **Chapitre 86 : Créer la fonction de récupération des posts par auteur** (13 min)
  - Server Action pour récupérer les articles d'un auteur

#### P. Édition d'Articles
- [ ] **Chapitre 87 : UI de la page de mise à jour d'un article** (9 min)
  - Interface d'édition d'article
- [ ] **Chapitre 88 : Gérer la validation UX côté front** (13 min)
  - Validation côté client du formulaire
- [ ] **Chapitre 89 : Créer la Server Action editPost partie 1** (16 min)
  - Début de l'implémentation de l'édition
- [ ] **Chapitre 90 : Créer la Server Action editPost partie 2** (9 min)
  - Suite de l'implémentation
- [ ] **Chapitre 91 : Créer la Server Action editPost partie 3** (6 min)
  - Finalisation de l'édition
- [ ] **Chapitre 92 : Créer la Server Action editPost partie 4** (9 min)
  - Gestion des tags dans l'édition
- [ ] **Chapitre 93 : Créer la Server Action editPost partie 5** (10 min)
  - Finalisation complète de l'édition

#### Q. API et Middleware
- [ ] **Chapitre 94 : Créer une route d'API de vérification d'authentification** (12 min)
  - Route API pour vérifier l'authentification
- [ ] **Chapitre 95 : Création d'un middleware next** (16 min)
  - Middleware pour protéger les routes
- [ ] **Chapitre 96 : Créer un contexte pour mieux gérer l'auth de notre app** (12 min)
  - Context API pour l'authentification

#### R. Contexte et État Client
- [ ] **Chapitre 97 : Afficher l'état de l'auth côté client** (19 min)
  - Synchronisation de l'état d'authentification
- [ ] **Chapitre 98 : Gérer quelques erreurs** (4 min)
  - Corrections finales

#### S. Optimisation et Cache
- [ ] **Chapitre 99 : Coup du gueule sur le caching, c'est très important** (5 min)
  - Explication de l'importance du cache
- [ ] **Chapitre 100 : Stratégie de cache des pages qui affichent des listes d'articles** (7 min)
  - Configuration du cache pour les listes
- [ ] **Chapitre 101 : Potentielle erreur avec notFound()** (4 min)
  - Gestion des erreurs 404
- [ ] **Chapitre 102 : Gérer le cache des pages d'article partie 1** (5 min)
  - Cache pour les pages d'article
- [ ] **Chapitre 103 : Gérer le cache des pages d'article partie 2** (8 min)
  - Finalisation du cache

#### T. Finalisation
- [ ] **Chapitre 104 : Afficher un loader entre les pages** (4 min)
  - Indicateur de chargement
- [ ] **Chapitre 105 : Derniers ajustements et bravo !** (3 min)
  - Finalisation du projet
- [ ] **Chapitre 106 : Étapes de mise en ligne d'un projet** (5 min)
  - Déploiement et mise en production

**Total des chapitres restants : 78 chapitres**
**Durée totale estimée : ~12 heures**

---

## 📝 Notes Techniques - Partie 3

### Concepts Déjà Implémentés
- **next/font/google** : Optimisation automatique des polices Google Fonts avec préchargement et optimisation des sous-ensembles
- **Variables CSS** : Utilisation de variables CSS pour centraliser la gestion des couleurs et polices
- **@theme inline** : Directive Tailwind CSS 4 pour définir le thème directement dans le CSS
- **SCSS avec imports globaux** : Utilisation de fichiers `.scss` importés directement (`import './Card.scss'`) pour des styles globaux, les classes sont utilisées directement comme strings (`className="Card"`)
- **CSS Modules** : Utilisation de fichiers `.module.css` ou `.module.scss` pour des styles scoped, importés avec un objet (`import styles from './pricing.module.css'`) et utilisés via l'objet (`className={styles.title}`)
- **Différence SCSS global vs CSS Modules** : 
  - SCSS global : styles disponibles partout, risque de conflits de noms
  - CSS Modules : styles isolés au composant, évite les conflits, génère des noms de classes uniques
- **prefers-color-scheme** : Support natif du dark mode basé sur les préférences système
- **display: swap** : Stratégie de chargement des polices pour améliorer les performances (évite le FOIT)
- **Optimisation des performances** : Réduction du temps de chargement grâce à l'optimisation des polices

### Concepts à Aborder (Chapitres 29-106)
- **next/image** : Optimisation automatique des images avec lazy loading et redimensionnement
- **Metadata API** : Gestion des métadonnées SEO et Open Graph
- **Base de données** : Intégration MongoDB/PostgreSQL avec Mongoose/Prisma
- **Server Actions** : Actions serveur pour CRUD (Create, Read, Update, Delete)
- **Modèles de données** : Schémas Mongoose/Prisma pour articles, utilisateurs, tags, sessions
- **Markdown** : Parsing et affichage de contenu Markdown dans les articles
- **Sécurité XSS** : Sanitization du contenu utilisateur pour prévenir les attaques
- **Syntax Highlighting** : Colorisation syntaxique pour les blocs de code
- **Authentification par session** : Système d'authentification avec cookies et sessions en base de données
- **Upload d'images** : Intégration avec CDN (BunnyCDN) pour le stockage d'images
- **Protection de routes** : Middleware et pages privées pour l'authentification
- **Gestion d'erreurs** : Classes d'erreur personnalisées et gestion centralisée
- **Aggregations** : Requêtes MongoDB complexes pour statistiques et filtres
- **Cache Next.js** : Stratégies de cache pour optimiser les performances (revalidate, cache tags)
- **Context API** : Gestion de l'état d'authentification côté client
- **API Routes** : Routes API pour vérification d'authentification
- **Déploiement** : Étapes de mise en production d'un projet Next.js

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
- ✅ Composant Card avec SCSS (import global)
- ✅ Page Pricing avec CSS Modules
- ✅ Démonstration des deux approches de styling (SCSS global et CSS Modules)

### Progression
- **Chapitres complétés** : 1-8 (Configuration initiale, polices, CSS, composants)
- **Chapitres restants** : 29-106 (78 chapitres)
- **Progression** : ~9% complété
- **Durée estimée restante** : ~12 heures

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
- Création du composant Card avec SCSS (import global)
- Création de la page Pricing avec CSS Modules
- Démonstration des deux approches de styling (SCSS global vs CSS Modules)
- Documentation des 78 chapitres restants (29-106) organisés par thèmes
- Traduction des messages de commit en anglais