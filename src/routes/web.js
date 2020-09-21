import { GITHUB } from '@/config';
import Layout from '@/layout/web';
import lazy from '@/components/Lazy';

export default {
  path: '/',
  name: 'home',
  component: Layout,
  childRoutes: [
    { path: '', component: lazy(() => import('@/views/web/home')) },
    { path: 'article/:id', component: lazy(() => import('@/views/web/article')) }, // 指定文章
    { path: 'archives', component: lazy(() => import('@/views/web/archives')) }, // 档案
    { path: 'categories', component: lazy(() => import('@/views/web/categories')) }, // 总分类
    { path: 'categories/:name', component: lazy(() => import('@/views/web/tag')) }, // 具体分类
    { path: 'tags/:name', component: lazy(() => import('@/views/web/tag')) }, // 指定标签
    { path: '/github', component: GITHUB.enable && lazy(() => import('@/components/GithubLogining')) },
    { path: '/about', component: lazy(() => import('@/views/web/about')) }, // 关于
    { path: '*', component: lazy(() => import('@/components/404')) }, // 上面都不满足，则这里个
  ],
};
