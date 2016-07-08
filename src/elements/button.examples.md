  ### Import
  
  `import { Button } from 're-bulma';`
  
  ### Colors
    
    <div className="example">
      <Button>Button</Button> 
      <Button color="isWhite">White</Button> 
      <Button color="isLight">Light</Button> 
      <Button color="isDark">Dark</Button> 
      <Button color="isBlack">Black</Button> 
      <Button color="isLink">Link</Button> 
      <Button color="isPrimary">Primary</Button> 
      <Button color="isInfo">Info</Button> 
      <Button color="isSuccess">Success</Button> 
      <Button color="isWarning">Warning</Button> 
      <Button color="isDanger">Danger</Button> 
    </div>

  ### Sizes
  
    <div className="example">
      <Button size="isSmall">Small</Button> 
      <Button>Normal</Button> 
      <Button size="isMedium">Medium</Button> 
      <Button size="isLarge">Large</Button> 
    </div>

  ### Styles
  
  #### Outlined
  
    <div className="example">
      <Button buttonStyle="isOutlined">Outlined</Button> 
      <Button buttonStyle="isOutlined" color="isPrimary">Outlined</Button> 
      <Button buttonStyle="isOutlined" color="isInfo">Outlined</Button> 
      <Button buttonStyle="isOutlined" color="isSuccess">Outlined</Button> 
      <Button buttonStyle="isOutlined" color="isDanger">Outlined</Button> 
    </div>

  #### Inverted
  
    <div className="example" >
      <Button buttonStyle="isInverted">Inveted</Button> 
      <Button buttonStyle="isInverted" color="isPrimary">Inveted</Button> 
      <Button buttonStyle="isInverted" color="isInfo">Inveted</Button> 
      <Button buttonStyle="isInverted" color="isSuccess">Inveted</Button> 
      <Button buttonStyle="isInverted" color="isDanger">Inveted</Button> 
    </div>

  ### States
  #### Loading
  
    <div className="example" >
      <Button state="isLoading">Loading</Button> 
      <Button state="isLoading" color="isPrimary">Loading</Button> 
      <Button state="isLoading" color="isInfo">Loading</Button> 
      <Button state="isLoading" color="isSuccess">Loading</Button> 
      <Button state="isLoading" color="isDanger">Loading</Button> 
    </div>

  #### Active
  
    <div className="example" >
      <Button state="isActive">Active</Button> 
      <Button state="isActive" color="isPrimary">Active</Button> 
      <Button state="isActive" color="isInfo">Active</Button> 
      <Button state="isActive" color="isSuccess">Active</Button> 
      <Button state="isActive" color="isDanger">Active</Button> 
    </div>

  #### Disabled
  
    <div className="example" >
      <Button state="isDisabled">Disabled</Button> 
      <Button state="isDisabled" color="isPrimary">Disabled</Button> 
      <Button state="isDisabled" color="isInfo">Disabled</Button> 
      <Button state="isDisabled" color="isSuccess">Disabled</Button> 
      <Button state="isDisabled" color="isDanger">Disabled</Button> 
    </div>

  ### Icon

  Please install icon font by yourself.
  
    <div className="example" >
      <Button icon="fa fa-github">GitHub</Button> 
      <Button icon="fa fa-twitter" color="isPrimary">Twitter</Button> 
      <Button icon="fa fa-check" color="isSuccess">Save</Button> 
      <Button icon="fa fa-times" color="isDanger" isIconRight>Delete</Button> 
    </div>

  ### Button Group

    <Group>
      <Button color="isPrimary">Save changes</Button> 
      <Button>Cancel</Button> 
      <Button color="isDanger">Delete post</Button>       
    </Group>

