import { Route } from 'react-router-dom';

export interface RouterConfig {
  path: string;
  element?: React.ReactNode;
  index?: boolean;
  children?: RouterConfig[];
  private?: boolean;
}

export const renderRoutes = (routes: RouterConfig[]) =>
  routes.map(({ path, element, children, index }, i) => {
    if (index) {
      return <Route key={i} index element={element} />;
    }

    return (
      <Route key={i} path={path} element={element}>
        {children && renderRoutes(children)}
      </Route>
    );
  });
