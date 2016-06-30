  ### Import
  
  `import { Tag } from 're-bulma';`
  
  ### Colors
    
    <div className="example">
      <Tag>Tag</Tag> 
      <Tag color="isDark">Dark</Tag> 
      <Tag color="isPrimary">Primary</Tag> 
      <Tag color="isInfo">Info</Tag> 
      <Tag color="isSuccess">Success</Tag> 
      <Tag color="isWarning">Warning</Tag> 
      <Tag color="isDanger">Danger</Tag> 
    </div>

  ### Sizes

    <div className="example">
      <Tag size="isSmall">Small</Tag> 
      <Tag>Normal</Tag> 
      <Tag size="isMedium">Medium</Tag> 
      <Tag size="isLarge">Large</Tag> 
    </div>

  ### Delete

    <div className="example">
      <Tag color="isSuccess" size="isSmall">Foo<Button delete /></Tag> 
      <Tag color="isInfo" >Bar<Button delete /></Tag> 
      <Tag color="isWarning" size="isMedium" >Hello<Button delete /></Tag> 
      <Tag color="isDanger" size="isLarge" >World<Button delete /></Tag> 
    </div>
