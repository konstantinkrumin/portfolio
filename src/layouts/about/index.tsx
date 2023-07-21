import { Card } from '../../components';

export const AboutLayout = () => {
  return (
    <div className="bg-fuchsia-500 h-screen flex justify-center items-center">
      <Card>
        <h2 className="text-xl font-semibold">ABOUT ME PAGE</h2>
        <p>Here will be an accordion element with some additional information about myself</p>
      </Card>
    </div>
  );
};
