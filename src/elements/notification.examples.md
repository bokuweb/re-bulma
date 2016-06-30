  ### Import
  
  `import { Notification } from 're-bulma';`
  
  ### Notification

    <div>
      <Notification
        closeButtonProps={{ onClick: () => console.log('clicked') }}
        style={{ marginBottom: '5px' }}
      >
        lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor sit amet,
        consectetur adipiscing elit
      </Notification>
      <Notification
        color="isPrimary"
        closeButtonProps={{ onClick: () => console.log('clicked') }}
        style={{ marginBottom: '5px' }}
      >
        lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor sit amet,
        consectetur adipiscing elit
      </Notification>
      <Notification
        color="isInfo"
        closeButtonProps={{ onClick: () => console.log('clicked') }}
        style={{ marginBottom: '5px' }}
      >
        lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor sit amet,
        consectetur adipiscing elit
      </Notification>
      <Notification
        color="isWarning"
        closeButtonProps={{ onClick: () => console.log('clicked') }}
        style={{ marginBottom: '5px' }}
      >
        lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor sit amet,
        consectetur adipiscing elit
      </Notification>
      <Notification
        color="isDanger"      
        closeButtonProps={{ onClick: () => console.log('clicked') }}
        style={{ marginBottom: '5px' }}
      >
        lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor sit amet,
        consectetur adipiscing elit
      </Notification> 
    </div>
