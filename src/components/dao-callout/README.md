```HTML
<dao-callout
  [:can-close="boolean"]
  [title="string"]
  [type="string"]>
  <span slot="content">...</span>
</dao-callout>
```

| Param         | Type           | Details  |
| ------------- |-------------| ----- |
| canClose      | boolean | Sets the canClose attr of the daoCallout. When true, show the close svg icon. <br>*(default: ```false```)*|
| title      | string      |   Sets the title of the daoCallout.<br>*(default: ```""```)* |
| type | string      |Sets the type of daoCallout, supports ```info\|wraning\|error```. <br>*(default: ```info```)* |
| content | html      |Sets the content of the daoCallout, ```<span slot="content">...</span>``` |
