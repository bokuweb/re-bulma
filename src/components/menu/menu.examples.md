  ### Import
  
  `import { Menu } from 're-bulma';`
  
  ### Menu

    <Menu>
      <MenuLabel>
        General
      </MenuLabel>
      <MenuList>
        <li><MenuLink href="#">Dashboard</MenuLink></li>
        <li><MenuLink href="#">Customers</MenuLink></li>
      </MenuList>
      <MenuLabel>
        Administration
      </MenuLabel>
      <MenuList>
        <li><MenuLink>Team Settings</MenuLink></li>
        <li>
          <MenuLink isActive>Manage Your Team</MenuLink>
          <ul>
            <li><a href="#">Members</a></li>
            <li><a href="#">Plugins</a></li>
            <li><a href="#">Add a member</a></li>
          </ul>
        </li>
        <li><a href="#">Invitations</a></li>
        <li><a href="#">Authentication</a></li>
      </MenuList>
      <MenuLabel>
        Transactions
      </MenuLabel>
      <MenuList>
        <li><a href="#">Payments</a></li>
        <li><a href="#">Transfers</a></li>
        <li><a href="#">Balance</a></li>
      </MenuList>
    </Menu>
