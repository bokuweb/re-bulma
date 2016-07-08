  ### Import
  
  `import { Radio } from 're-bulma';`
  
  ### Radio button
    
    <Radio
      data={[
        { label: 'foo', inputProps: { name: 'sample', onChange: () => console.log('foo')}},
        { label: 'bar', inputProps: { name: 'sample', onChange: () => console.log('bar')}},
        { label: 'hello', inputProps: { name: 'sample', onChange: () => console.log('hello')}}
      ]}
    />
