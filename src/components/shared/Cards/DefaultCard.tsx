import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const DefaultCard = () => {
  return (
    <Card className="w-[400px] h-[500px] bg-brand-400 border-accent-200 text-text-primary">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
