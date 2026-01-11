# Next.js App Router - Projet d'Apprentissage

Ce projet est une application Next.js créée dans le cadre d'un cours sur le **Next.js App Router**. Il démontre les concepts fondamentaux et avancés du routing avec Next.js 16.

## 🚀 Technologies Utilisées

- **Next.js** 16.1.1 (App Router)
- **React** 19.2.3
- **Tailwind CSS** 4
- **ESLint** pour le linting

## 📋 Fonctionnalités

### Pages et Routes
- ✅ Page d'accueil (`/`)
- ✅ Blog avec liste d'articles (`/blog`)
- ✅ Routes dynamiques pour les articles (`/blog/[id]`)
- ✅ Page Contact (`/contact`)
- ✅ Page Utilisateurs avec chargement asynchrone (`/utilisateurs`)
- ✅ Système de Dashboards (`/dashboards`, `/dashboards/finance`, `/dashboards/rh`)
- ✅ Landing page Discover (`/discover`)
- ✅ Page 404 personnalisée

### Concepts Implémentés
- **Route Groups** : Organisation avec `(main app)` et `(marketing)`
- **Layouts imbriqués** : Hiérarchie de layouts pour différentes sections
- **Server Components** : Composants async pour le chargement de données
- **Client Components** : Utilisation de hooks React (`usePathname`)
- **Loading States** : Gestion des états de chargement avec `loading.jsx`
- **Error Handling** : Gestion d'erreurs avec `error.jsx` et `not-found.jsx`
- **API Integration** : Fetch d'API avec JSONPlaceholder
- **Navigation** : Navigation côté client avec Next.js Link

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
├── app/
│   ├── (main app)/          # Route group pour les routes principales
│   │   ├── blog/
│   │   │   ├── [id]/        # Route dynamique
│   │   │   └── page.jsx
│   │   ├── contact/
│   │   ├── dashboards/
│   │   ├── utilisateurs/
│   │   │   ├── loading.jsx
│   │   │   ├── error.jsx
│   │   │   └── page.jsx
│   │   ├── layout.jsx       # Layout avec Navbar
│   │   └── page.jsx
│   ├── (marketing)/          # Route group pour le marketing
│   │   └── discover/
│   ├── layout.jsx           # Layout racine
│   ├── not-found.jsx        # Page 404
│   └── globals.css
└── components/
    └── navbar.jsx           # Composant de navigation
```

## 📚 Documentation

Pour plus d'informations sur les concepts implémentés, consultez le fichier [SUIVI_COURS.md](./SUIVI_COURS.md).

## 🔗 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [App Router Documentation](https://nextjs.org/docs/app)
- [React Documentation](https://react.dev)

## 📝 Notes

Ce projet a été créé dans le cadre d'un cours d'apprentissage sur Next.js App Router. Il sert de référence pour comprendre les concepts de routing, layouts, et la gestion des états dans Next.js 16.

## 🚢 Déploiement

Le moyen le plus simple de déployer cette application Next.js est d'utiliser [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.
