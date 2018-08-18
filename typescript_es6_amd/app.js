// Configuration du chargement des modules
requirejs.config({

    baseUrl: 'node_modules/requirejs',
    paths: {
        app: '../../build'
    }
});

// Point d'entrée du chargement des modules
requirejs(['../../build/index']);