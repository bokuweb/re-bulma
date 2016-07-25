  ### Import
  
  `import { Tile } from 're-bulma';`
  
  ### Tile

    const style = { background: '#eee', borderRadius: '5px', padding: '10px' };
    
    <Tile context="isAncestor">
      <Tile isVertical size="is8">
        <Tile>
          <Tile context="isParent" isVertical>
            <Tile context="isChild" style={style}>
              <Content>
                <Title>Vertical...</Title>
                <Subtitle>Top tile</Subtitle>
              </Content>  
            </Tile>
            <Tile context="isChild" style={style}>
              <Content>
                <Title>...tiles</Title>
                <Subtitle>Bottom tile</Subtitle>
              </Content>                 
            </Tile>
          </Tile>
          <Tile context="isParent">
            <Tile context="isChild" style={style}>
              <Content>
                <Title>Middle tile</Title>
                <Subtitle>With an image</Subtitle>
                <Image size="is4By3" src="http://placehold.it/640x480"/>
              </Content>
            </Tile>
          </Tile>
        </Tile>
        <Tile context="isParent">
          <Tile context="isChild" style={style}>
            <Content>
              <Title>Wide tile</Title>
              <Subtitle>Aligned with the right tile</Subtitle>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </Content>
          </Tile>
        </Tile>
      </Tile>
      <Tile context="isParent">
        <Tile context="isChild" style={style}>
          <Content>
            <Title>Tall tile</Title>
            <Subtitle>With even more content</Subtitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
            </Content>
        </Tile>
      </Tile>
    </Tile>
 
