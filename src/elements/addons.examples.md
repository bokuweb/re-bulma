  ### Import
  
  `import { Addons } from 're-bulma';`
  
  ### Addons
    
  #### Button Addons  
  
    <Addons>
      <Button icon="fa fa-align-left">Left</Button> 
      <Button icon="fa fa-align-center">Center</Button> 
      <Button icon="fa fa-align-right">Right</Button> 
    </Addons>
   
  #### Form Addons  
  
  ####
      
    <Addons color="isInfo">
      <Input placeholder="Find a repository" />
      <Button>Search</Button>
    </Addons>

  #### 

    <Addons
      help={{
        text: 'help text',
        color: 'isSuccess',
      }}
    >
      <Select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </Select>
      <Input type="text" placeholder="Amount of money" isExpanded />
      <Button coloe="isSuccess">Transfer</Button>
    </Addons>
   
   ####
   
     <Addons hasAddonsCentered>
       <Select>
         <option>$</option>
         <option>£</option>
         <option>€</option>
       </Select>
       <Input type="text" placeholder="Amount of money" />
       <Button coloe="isSuccess">Transfer</Button>
     </Addons>

   ####
   
     <Addons hasAddonsRight>
       <Select>
         <option>$</option>
         <option>£</option>
         <option>€</option>
       </Select>
       <Input type="text" placeholder="Amount of money" />
       <Button coloe="isSuccess">Transfer</Button>
     </Addons>
