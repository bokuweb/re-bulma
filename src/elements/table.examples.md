  ### Import
  
  `import { Table } from 're-bulma';`
  
  ### Table

    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>InsTrument</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tfoot>
        <Tr>
         <Th className="sad">Name</Th>
         <Th>InsTrument</Th>
         <Th></Th>
         <Th></Th>
        </Tr>
      </Tfoot>
      <Tbody>
        <Tr>
          <Td>Misty Abbott</Td>
          <Td>Bass Guitar</Td>
          <Td class="is-icon">
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </Td>
          <Td class="is-icon">
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </Td>
        </Tr>
        <Tr>
          <Td>John SmiTh</Td>
          <Td>RhyThm Guitar</Td>
          <Td class="is-icon">
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </Td>
          <Td isIcon>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </Td>
        </Tr>
        <Tr>
          <Td>Robert Mikels</Td>
          <Td>Lead Guitar</Td>
          <Td isIcon>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </Td>
          <Td isIcon>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </Td>
        </Tr>
      </Tbody>
    </Table>
        
  #### Modifiers
  
  ##### Bordered
  
    <Table isBordered>
      <Thead>
        <Tr>
          <Th>One</Th>
          <Th>Two</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Three</Td>
          <Td>Four</Td>
        </Tr>
      </Tbody>
    </Table>

  ##### Striped
  
    <Table isStriped>
      <Thead>
        <Tr>
          <Th>One</Th>
          <Th>Two</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Three</Td>
          <Td>Four</Td>
        </Tr>
      </Tbody>
    </Table>

  ##### Narrow
  
    <Table isNarrow>
      <Thead>
        <Tr>
          <Th>One</Th>
          <Th>Two</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Three</Td>
          <Td>Four</Td>
        </Tr>
      </Tbody>
    </Table>
