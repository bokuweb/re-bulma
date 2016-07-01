  ### Import
  
  `import { Input } from 're-bulma';`
  
  ### Input

    <div>
      <Label>Name</Label>
      <Input type="text" placeholder="Text input" />
      <Label>Username</Label>
      <Input
        color="isSuccess"
        type="text"
        placeholder="Textinput"
        defaultValue="bulma"
        icon="fa fa-check"
        hasIconRight
        help={{
          color: 'isSuccess',
          text: 'This username is available',
        }}
      />
      <Label>Email</Label>
      <Input
        color="isDanger"
        type="text"
        placeholder="Email input"
        defaultValue="hello@"
        icon="fa fa-warning"
        hasIconRight
        help={{
          color: 'isDanger',
          text: 'This email is invalid',
        }}
      />
    </div>
