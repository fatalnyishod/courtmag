// root template apps
import AdminApp from '@/views/templates/AdminApp';
import Auth from '@/views/admin/Auth';

// Authors
import Authors from '@/views/admin/authors/Authors';
import AuthorRegister from '@/views/admin/authors/AuthorRegister.vue';

// Articles
import Articles from '@/views/admin/articles/ArticlesList';
import ArticleCreate from '@/views/admin/articles/ArticleCreate';

export default [
	{
		path: '/admin',
		component: AdminApp,
		children: [
			{
				path: '/auth',
				component: Auth
			},
			{
				path: 'authors',
				component: Authors,
				children: [
				]
			},
			{
				path: 'register',
				component: AuthorRegister
			},
			{
				path: 'articles',
				component: Articles,
				children: [{
					path: 'create',
					component: ArticleCreate,
					name: "article-create"
				}]
			}
		]
	}
];
