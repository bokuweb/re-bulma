  ### Import
  
  `import { Nav } from 're-bulma';`
  
  ### Nav

    <Nav>
      <NavGloup align="left">
        <NavItem>
          Nav Item
        </NavItem>
      </NavGloup>
      <NavGloup align="center">
        <NavItem>
          <Icon icon="fa fa-github" />
        </NavItem>
        <NavItem>
          <Icon icon="fa fa-twitter" />
        </NavItem>
      </NavGloup>
      <NavToggle />
      <NavGloup align="right" isMenu>
        <NavItem>
          Home
        </NavItem>
        <NavItem>
          Documentation
        </NavItem>
        <NavItem>
          Blog
        </NavItem>
        <NavItem>
          <Button icon="fa fa-twitter">Tweet</Button>
          <Button icon="fa fa-download">Download</Button>
        </NavItem>
      </NavGloup>
    </Nav>
