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

## 📖 Partie 2 : Composants et Données 🚧 EN COURS

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

### 3. Concepts Implémentés
- [x] **Composants Client** : Utilisation de `"use client"` pour les composants nécessitant des hooks React
- [x] **Gestion d'état** : Utilisation de `useState` pour les composants interactifs
- [x] **Inputs contrôlés** : Gestion des formulaires avec état React
- [x] **Composants Server** : Utilisation de composants async pour le chargement de données
- [x] **Server Actions** : Création de fonctions serveur avec `"use server"` pour la récupération de données
- [x] **Routes dynamiques** : Implémentation de routes avec paramètres `[id]`
- [x] **Fetch d'API** : Intégration avec JSONPlaceholder pour récupérer des données
- [x] **TypeScript** : Utilisation de TypeScript pour le typage statique
- [x] **Styling** : Tailwind CSS 4 pour le design moderne et responsive
- [x] **Navigation** : Utilisation de Next.js Link pour la navigation côté client

### 4. Structure des Routes
```
/          → Page d'accueil
/form      → Page avec formulaire contrôlé (Client Component)
/image     → Page avec fetch d'image (Server Component + Server Actions)
/blog      → Page blog (liste des articles, Server Component + Server Actions)
/blog/[id] → Article de blog spécifique (route dynamique, Server Component + Server Actions)
```

### 5. Server Actions
- [x] Création du module `app/lib/serverActions.jsx`
  - Fonction `getImg()` : Récupération d'une image depuis JSONPlaceholder
  - Fonction `getPosts()` : Récupération de tous les posts
  - Fonction `getPost(id)` : Récupération d'un post spécifique par ID
  - Utilisation de la directive `"use server"` pour marquer les Server Actions

---

## 📝 Notes Techniques - Partie 2
- **Composants Client vs Server** : Distinction entre composants client (`"use client"`) et serveur (par défaut)
- **Hooks React** : Utilisation de `useState` dans les composants client pour gérer l'état local
- **Inputs contrôlés** : Synchronisation entre l'état React et les valeurs des inputs avec `value` et `onChange`
- **Composants async** : Utilisation de fonctions async dans les Server Components pour le chargement de données
- **Server Actions** : Fonctions serveur marquées avec `"use server"` pour centraliser la logique de récupération de données
- **Routes dynamiques** : Implémentation de routes avec paramètres dynamiques `[id]` pour les pages de détail
- **Fetch API** : Récupération de données depuis des APIs externes via Server Actions ou directement dans les Server Components
- **Réutilisabilité** : Organisation du code avec Server Actions dans un module dédié (`lib/serverActions.jsx`)
- **TypeScript** : Typage statique pour améliorer la maintenabilité du code
- **Styling** : Tailwind CSS 4 pour un styling moderne et responsive avec grilles adaptatives
- **Navigation** : Utilisation de Next.js Link pour la navigation optimisée côté client

---

## 🎓 Statut de la Partie 2
🚧 **EN COURS** - Les concepts fondamentaux des composants et de la gestion des données sont en cours d'apprentissage.

### Fonctionnalités Complétées
- ✅ Configuration TypeScript et structure de base
- ✅ Distinction entre composants Client et Server
- ✅ Gestion d'état avec useState
- ✅ Formulaires contrôlés
- ✅ Server Actions pour la récupération de données
- ✅ Routes dynamiques avec paramètres
- ✅ Fetch d'API dans les Server Components et Server Actions
- ✅ Navigation avec Next.js Link
- ✅ Styling avec Tailwind CSS (grilles responsive)

---

## 📅 Dernière Mise à Jour
Date : 18/01/2026
- Déplacement du suivi de cours à la racine du projet
- Mise à jour de la Partie 2 avec les fonctionnalités implémentées
- Ajout des Server Actions et routes dynamiques pour le blog
- Traduction des messages de commit en anglais