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

### 5. Composants
- [x] Composant Navbar (`src/components/navbar.jsx`)
  - Navigation principale avec liens vers :
    - Accueil
    - Blog
    - Utilisateurs
    - Dashboards
    - Contact
  - Utilisation de `usePathname` pour la navigation active
  - Highlighting de la page active (ex: Contact avec bg-red-500)
- [x] Composant Loading (`/utilisateurs/loading.jsx`)
  - État de chargement pour la page utilisateurs

### 6. Structure des Routes
```
/                    → Page d'accueil
/blog                → Page blog (liste des articles)
/blog/[id]           → Article de blog spécifique (route dynamique)
/contact             → Page contact
/utilisateurs        → Page utilisateurs (avec loading)
/dashboards          → Page principale dashboards
/dashboards/finance  → Dashboard Finance
/dashboards/rh       → Dashboard RH
```

---

## 📝 Notes
- Utilisation de Next.js App Router (système de fichiers)
- Layouts imbriqués pour les dashboards
- Navigation avec composant Link de Next.js
- Styling avec Tailwind CSS
- **Composants Server Components** : Utilisation de composants async pour le chargement de données
- **Routes dynamiques** : Implémentation de routes avec paramètres `[id]`
- **Fetch d'API** : Intégration avec JSONPlaceholder pour les données de blog
- **Composants Loading** : Gestion des états de chargement avec `loading.jsx`
- **Client Components** : Utilisation de `"use client"` pour la navbar avec hooks React (`usePathname`)

---


---

## 📅 Dernière Mise à Jour
Date : 04/01/2026

