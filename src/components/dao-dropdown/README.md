```HTML
<dao-dropdown
  [trigger=""]
  [:append-to-body=""]
  [placement=""]
  [visible=""]>
  <slot></slot>
  <dao-dropdown-menu slot="list">
    <dao-dropdown-item
      [:is-title=""]
      [:is-divided=""]
      [:is-disabled=""]>
    </dao-dropdown-item>
  </dao-dropdown-menu>
</dao-dropdown>
```
#### daoDropdown props
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
      <td>trigger</td>
      <td>String</td>
      <td>
        Sets the trigger of the dao-dropdwon, supports <code>hover|click|custom</code>
        <br>
        <em>(default:<code>hover</code>)</em>
      </td>
    </tr>
    <tr>
      <td>appendToBody</td>
      <td>Boolean</td>
      <td>Whether .dao-select-dropdown is appended to body.
        <br>
        <em>(default:<code>false</code>)</em>
      </td>
    </tr>
    <tr>
      <td>placement</td>
      <td>String</td>
      <td>Sets the menu position of dropdown toggle, supports <code>top|top-start|top-end|bottom|bottom-start|bottom-end|left|left-start|left-end|right|right-start|right-end</code>.
        <br>
        <em>(default:<code>bottom</code>)</em>
      </td>
    </tr>
    <tr>
      <td>visible</td>
      <td>Boolean</td>
      <td>Sets the visible of the dropdown menu. Only when the trigger is custom, it becomes effective.
        <br>
        <em>(default:<code>false</code>)</em>
      </td>
    </tr>
  </tbody>
</table>

#### daoDropdownItem props
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
      <td>isTitle</td>
      <td>Boolean</td>
      <td>
        When true, is the title item.
        <br>
        <em>(default:<code>false</code>)</em>
      </td>
    </tr>
    <tr>
      <td>isDivided</td>
      <td>Boolean</td>
      <td>
        Whether true, is a divider line.
        <br>
        <em>(default:<code>false</code>)</em>
      </td>
    </tr>
    <tr>
      <td>isDisabled</td>
      <td>Boolean</td>
      <td>
        Whether true, the item is disabled.
        <br>
        <em>(default:<code>false</code>)</em>
      </td>
    </tr>
  </tbody>
</table>
