import type { RouteNode } from './routes';

export const delayLoader =
  (ms: number = 300) =>
  async () => {
    await new Promise((resolve) => setTimeout(resolve, ms));
    return null;
  };

export type ActiveRouteInfo = {
  parent: RouteNode | null;
  current: RouteNode | null;
  nestedLevel: 2 | 3;
} | null;

export function findActiveInfo(routes: RouteNode[], pathname: string): ActiveRouteInfo | null {
  function walk(
    nodes: RouteNode[],
    parent: RouteNode | null,
    grandParent: RouteNode | null,
    level: number,
  ): ActiveRouteInfo | null {
    for (const node of nodes) {
      if (node.fullPath === '*' || !node) return null;

      const pattern = new RegExp('^' + node?.fullPath.replace(/:\w+/g, '[^/]+') + '$');

      if (pattern.test(pathname)) {
        if (node.ignoreInActive) {
          return parent
            ? { parent: grandParent, current: parent, nestedLevel: (level - 1) as 2 | 3 }
            : null;
        }
        return { parent, current: node, nestedLevel: level as 2 | 3 };
      }

      if (node.children) {
        const found = walk(node.children, node, parent, level + 1);
        if (found) return found;
      }
    }

    return null;
  }

  return walk(routes, null, null, 1);
}

export const findRouteById = (routes: RouteNode[], id: string): RouteNode | null => {
  for (const route of routes) {
    if (route.id === id) return route;
    if (route.children) {
      const found = findRouteById(route.children, id);
      if (found) return found;
    }
  }
  return null;
};

export const filterNavigation = (data?: RouteNode[] | null) => {
  if (!data) return [];
  return data.filter(({ navigationIngore }) => !navigationIngore) || [];
};

export const getNavigationRoutes = (routes: RouteNode[], id: string) => {
  const findedRoutes = findRouteById(routes, id);
  return filterNavigation(findedRoutes?.children);
};

export function getChildrenById(
  routes: RouteNode[],
  id: string,
): { title: string; fullPath: string }[] {
  for (const route of routes) {
    if (route.id === id) {
      return (route.children || []).map((child) => ({
        title: child.title || '',
        fullPath: child.fullPath || '',
      }));
    }
    if (route.children) {
      const found = getChildrenById(route.children, id);
      if (found.length) return found;
    }
  }
  return [];
}
