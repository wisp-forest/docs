---
title: Templates
project: owo
---


#### Using a template

Essentially what this boils down to is the following:
```xml
<owo-ui>
  <components>
    <!-- Since the custom template is declared below, it can be used! -->
    <cool-beans/>
  </components>
  <templates>
    <template name="cool-beans">
      <!-- Declare your layout inside -->
      <!-- Can be a simple button with styling, -->
      <!-- or something complex like a flow layout -->
    </template>
  </templates>
</owo-ui>
```

You can reference a template from another location. The syntax for this is `template-name@model:id`
If you have the template "cool-beans" in the file "recipe.xml" in the "cooking" namespace, you use `cool-beans@cooking:recipe`
