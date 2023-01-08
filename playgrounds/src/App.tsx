import { Button, Color, Text } from '@ds.e/react/lib';

const App = () => {
  return (
    <div>
      <h1>Hello MonoRepo</h1>
      <Text size="xl">Hellow World</Text>
      <Color hexCode="#f1f1f1" width="xxxl" height="xxxl" />
      <Button
        title="Alhamdulillah, I am created"
        onClick={() => alert('Hello World')}
      >
        Click Me
      </Button>
    </div>
  );
};

export default App;
