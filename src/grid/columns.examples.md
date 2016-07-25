  ### Import
  
  `import { Columns } from 're-bulma';`
  
  ### Columns

  ####
  
    const style = { padding: '10px' };
    
    <Columns>
      <Column style={style}>
        <Notification color="isInfo">
          First column
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification color="isSuccess">
          Second column
        </Notification>  
      </Column>
      <Column style={style}>
        <Notification color="isWarning">
          Third column
        </Notification>  
      </Column>
       <Column style={style}>
        <Notification color="isDanger">
          Fourth column
        </Notification>  
      </Column>
    </Columns>

  ####
  
    const style = { padding: '10px' };
 
    <div>
      <Columns>
        <Column size="isThreeQuarters" style={style}>
          <Notification color="isInfo">
            is-three-quarters
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification color="isWarning">
            Auto
          </Notification>  
        </Column>
         <Column style={style}>
          <Notification color="isDanger">
            Auto
          </Notification>  
        </Column>
      </Columns>
      <Columns>
        <Column size="isTwoThirds" style={style}>
          <Notification color="isInfo">
            is-two-thirds
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification color="isWarning">
            Auto
          </Notification>  
        </Column>
         <Column style={style}>
          <Notification color="isDanger">
            Auto
          </Notification>  
        </Column>
      </Columns> 
      <Columns>
        <Column size="isHalf" style={style}>
          <Notification color="isInfo">
            is-half
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification color="isWarning">
            Auto
          </Notification>  
        </Column>
         <Column style={style}>
          <Notification color="isDanger">
            Auto
          </Notification>  
        </Column>
      </Columns>        
      <Columns>
        <Column size="isOneThird" style={style}>
          <Notification color="isInfo">
            is-one-third
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification color="isWarning">
            Auto
          </Notification>  
        </Column>
         <Column style={style}>
          <Notification color="isDanger">
            Auto
          </Notification>  
        </Column>
      </Columns>       
      <Columns>
        <Column size="isOneQuarter" style={style}>
          <Notification color="isInfo">
            is-one-quarter
          </Notification>  
        </Column>
        <Column style={style}>
          <Notification color="isWarning">
            Auto
          </Notification>  
        </Column>
         <Column style={style}>
          <Notification color="isDanger">
            Auto
          </Notification>  
        </Column>
      </Columns>       
    </div>

  ####
  
    const style = { padding: '10px' };
 
    <Columns>
      <Column size="is2" style={style}>
        <Notification color="isInfo">
          2
        </Notification>  
      </Column>
      <Column size="is4" style={style}>
        <Notification color="isWarning">
          4
        </Notification>  
      </Column>
      <Column size="is1" style={style}>
        <Notification color="isSuccess">
          1
        </Notification>  
      </Column>
      <Column size="is5" style={style}>
        <Notification color="isDanger">
          5
        </Notification>  
      </Column>
    </Columns>

  ####
  
    const style = { padding: '10px' };

    <Columns isMultiline>
      <Column size="is2" style={style}>
        <Notification color="isInfo">
          2
        </Notification>  
      </Column>
      <Column size="is10" style={style}>
        <Notification color="isWarning">
          10
        </Notification>  
      </Column>
      <Column size="is1" style={style}>
        <Notification color="isSuccess">
          1
        </Notification>  
      </Column>
      <Column size="is5" style={style}>
        <Notification color="isDanger">
          5
        </Notification>  
      </Column>
      <Column size="is6" style={style}>
        <Notification color="isPrimary">
          6
        </Notification>  
      </Column>
    </Columns>
