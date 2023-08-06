import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const pages = import.meta.glob('../pages/**/*.tsx', { eager: true });

const routes = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes('$') ? fileName.replace('$', ':') : fileName.replace(/\/index/, '');

  routes.push({
    path: fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path]?.default,
  });
}

const router = createBrowserRouter(
  routes.map(({ Element, ...rest }) => ({
    ...rest,
    element: <Element />,
  })),
);

function Routes() {
    return <RouterProvider router={router} />;
}

export default Routes;
