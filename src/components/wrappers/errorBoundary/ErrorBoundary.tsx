import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Text } from '../typography/Text';

export default function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="p-6 flex h-full">
        <Text className="m-auto" size="xl">
          Ошибка {error.status}
        </Text>
        <p>{error.statusText}</p>
      </div>
    );
  }

  return (
    <div className="p-6 flex h-full">
      <Text className="m-auto" size="xl">
        Что-то пошло не так
      </Text>
      <pre>{error instanceof Error ? error.message : String(error)}</pre>
    </div>
  );
}
