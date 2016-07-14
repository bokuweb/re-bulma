  ### Import
  
  `import { Modal } from 're-bulma';`
  
  ### Modal

    <div>
      <Button onClick={() => setState({ isOpen: true })}>Open</Button>
      <Modal
        type="card"
        headerContent="Header Content"
        footerContent={<div style={{ padding: '20px'}} >footercontent</div>}
        isActive={state.isOpen}
        onCloseRequest={() => setState({ isOpen: false })}
      >
        <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
        </Content>
      </Modal>
    </div>

