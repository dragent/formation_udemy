# Suivi de Cours - Next.js App Router

## 📚 Informations du Projet
- **Projet** : 1.app-router
- **Framework** : Next.js 16.1.1
- **React** : 19.2.3
- **Styling** : Tailwind CSS 4

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
- [x] Page Contact (`/contact`)
  - Route créée
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


---

---

## 🎓 Statut du Cours
✅ **COURS TERMINÉ** - Toutes les fonctionnalités principales du cours Next.js App Router ont été implémentées.

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

## 📅 Dernière Mise à Jour
Date : 11/01/2026

