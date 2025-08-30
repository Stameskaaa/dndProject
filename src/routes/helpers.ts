import { SUB_NAVIGATION_CONTROLLER } from './nestedRoutes';

export const delayLoader =
  (ms: number = 300) =>
  async () => {
    await new Promise((resolve) => setTimeout(resolve, ms));
    return null;
  };

export function filterSubNavigation(currentPath: string) {
  const controller = SUB_NAVIGATION_CONTROLLER.find((c) => currentPath.startsWith(c.id));

  if (!controller) return { parentName: null, items: [] };

  const nav = controller.data;

  const activeItem = nav.find(
    (item) => currentPath === item.fullPath || currentPath.startsWith(item.fullPath.split('/:')[0]),
  );

  let parentName: string | null = null;

  if (activeItem?.parentId) {
    const parent = nav.find((p) => p.id === activeItem.parentId);
    if (parent) parentName = parent.title;
  } else if (activeItem) {
    parentName = activeItem.title;
  }

  const items = nav.filter((item) => {
    if (!item.parentId) return true;
    return item.parentId === activeItem?.id || item.parentId === activeItem?.parentId;
  });

  return { parentName, items };
}
