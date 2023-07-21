import { Card } from '../../components';

export const HomeLayout = () => {
  return (
    <div className="bg-fuchsia-300 h-screen flex justify-center items-center">
      <Card>
        <h2 className="text-xl font-semibold">HOME PAGE</h2>
        <p>Here will be basic information about myself</p>
      </Card>
    </div>
  );
};
