(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[22],{171:function(n,e){n.exports='<template>\n  <div class="demo4">\n    <dao-switch\n      :option="{ on: \'是\', off: \'否\' }"\n      :with-notice="true"\n      :core-width="coreWidth"\n      v-model="isChecked">\n    </dao-switch>\n    <p>isChecked: {{ isChecked }}</p>\n    <p>core-width: <input type="number" v-model.number="coreWidth"></p>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'Demo4\',\n  data() {\n    return {\n      isChecked: false,\n      coreWidth: 100,\n    };\n  },\n};\n<\/script>\n\n<style lang="scss" scoped>\n.demo4 p {\n  margin-top: 20px;\n}\n</style>\n'}}]);