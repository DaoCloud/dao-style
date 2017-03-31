```HTML
<dao-modal
  v-model=""
  [title=""]
  [size=""]
  [scrollable=""]
  [:close-on-click-modal=""]
  [:close-on-press-escape=""]>
  <h3 slot="header"></h3>
  <div slot="body"></div>
  <div slot="footer"></div>
</dao-modal>
```
#### Modal props
<table>
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>vModel</td>
      <td>String</td>
      <td>Sets the visible of the modal.</td>
    </tr>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Sets the content of dao-modal-header.
        <br>
        <em>(default:<code>""</code>)</em>
      </td>
    </tr>
    <tr>
      <td>size</td>
      <td>String</td>
      <td>Sets the size of dao-modal-container, supports <code>lg</code>.
        <br>
        <em>(default:<code>""</code>)</em>
      </td>
    </tr>
    <tr>
      <td>scrollable</td>
      <td>Boolean</td>
      <td>Sets the value of enable the scroll of the body.
        <br>
        <em>(default:<code>false</code>)</em>
      </td>
    </tr>
    <tr>
      <td>closeOnClickModal</td>
      <td>Boolean</td>
      <td>Sets the value of enable the click outside to hide the modal.
        <br>
        <em>(default:<code>true</code>)</em>
      </td>
    </tr>
    <tr>
      <td>closeOnPressEscape</td>
      <td>Boolean</td>
      <td>Sets the value of enable the press ESC to hide the modal.
        <br>
        <em>(default:<code>true</code>)</em>
      </td>
    </tr>
  </tbody>
</table>

#### Modal slot
<table>
  <thead>
    <tr>
      <th>Param</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>header</td>
      <td>Sets the header of the modal. When is set, the title prop will be ignored.</td>
    </tr>
    <tr>
      <td>body</td>
      <td>Sets the body of the modal.</td>
    </tr>
    <tr>
      <td>footer</td>
      <td>Sets the footer of the modal.</td>
    </tr>
  </tbody>
</table>