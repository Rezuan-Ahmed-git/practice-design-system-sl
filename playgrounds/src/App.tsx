import { Button, Color, Text, Margin, Select } from '@ds.e/react/lib';
import './App.css';

const colorOptions = [
  { label: 'Red', value: 'Red' },
  { label: 'Green', value: 'Green' },
  { label: 'Blue', value: 'Blue' },
  { label: 'Yellow', value: 'Yellow' },
  { label: 'Black', value: 'Black' },
];

const App = () => {
  return (
    <div className="app">
      {/* <h1>Hello MonoRepo</h1>
      <Margin bottom top left right>
        <Text size="xl">Hellow World</Text>
      </Margin>
      <Color hexCode="#f1f1f1" width="xxxl" height="xxxl" />
      <Button
        title="Alhamdulillah, I am created"
        onClick={() => alert('Hello World')}
      >
        Click Me
      </Button> */}

      <Margin>
        <Text>This is a Select</Text>
        <Margin top bottom space="xs">
          <Select
            label="Select a Color"
            options={colorOptions}
            onOptionSelected={console.log}
            // renderOption={({ option, getOptionRecommendedProps }) => (
            //   <li {...getOptionRecommendedProps()}>{option.label} </li>
            // )}
          />
        </Margin>
        <Text>End of Select</Text>
      </Margin>
    </div>
  );
};

export default App;
