const sizeCodeHtml = `<template lang="html">
  <div>
    <div>
      <SimpleUiIcon icon="home" size="mini"></SimpleUiIcon>
      <SimpleUiIcon icon="home" size="tiny"></SimpleUiIcon>
      <SimpleUiIcon icon="home" size="small"></SimpleUiIcon>
      <SimpleUiIcon icon="home" size="large"></SimpleUiIcon>
      <SimpleUiIcon icon="home" size="big"></SimpleUiIcon>
      <SimpleUiIcon icon="home" size="huge"></SimpleUiIcon>
      <SimpleUiIcon icon="home" size="massive"></SimpleUiIcon>
    </div>
  </div>
</template>

<script>
export default {
  name: "SizeExample",
};
<\/script>
`

const circularExample = `<template lang="html">
  <div>
      <SimpleUiIcon icon="home" bordered></SimpleUiIcon>
      <SimpleUiIcon icon="home" color="teal" bordered></SimpleUiIcon>
      <SimpleUiIcon icon="home" color="black" bordered filled></SimpleUiIcon>
      <SimpleUiIcon icon="home" color="teal" bordered filled></SimpleUiIcon>
    </div>
  </div>
</template> `

const emphasisExample = `<template lang="html">
  <div>
      <SimpleUiButton buttonText="Basic" color="basic"></SimpleUiButton>
      <SimpleUiButton buttonText="Minimal dark" color="minimal_dark"></SimpleUiButton>
      <SimpleUiButton buttonText="Minimal" color="minimal"></SimpleUiButton>
      <SimpleUiButton buttonText="Primary" color="primary"></SimpleUiButton>
      <SimpleUiButton buttonText="Secondary" color="secondary"></SimpleUiButton>
      <SimpleUiButton buttonText="Success" color="success"></SimpleUiButton>
      <SimpleUiButton buttonText="Info" color="info"></SimpleUiButton>
      <SimpleUiButton buttonText="Warning" color="warning"></SimpleUiButton>
      <SimpleUiButton buttonText="Danger" color="danger"></SimpleUiButton>
    </div>
  </div>
</template> `

const isExampleButton = `<template lang="html">
  <div>
      <SimpleUiButton buttonText="New Button"></SimpleUiButton> 
      <SimpleUiButton buttonText="New Button" left>
        <SimpleUiIcon icon="home" color="teal"></SimpleUiIcon>
      </SimpleUiButton>  
  </div>
</template> `

const animationExample = `<template lang="html">
  <div>
      <SimpleUiButton buttonText="Basic" color="basic"></SimpleUiButton>
      <SimpleUiButton buttonText="Minimal dark" color="minimal_dark"></SimpleUiButton>
      <SimpleUiButton buttonText="Minimal" color="minimal"></SimpleUiButton>
      <SimpleUiButton buttonText="Primary" color="primary"></SimpleUiButton>
      <SimpleUiButton buttonText="Secondary" color="secondary"></SimpleUiButton>
      <SimpleUiButton buttonText="Success" color="success"></SimpleUiButton>
      <SimpleUiButton buttonText="Info" color="info"></SimpleUiButton>
      <SimpleUiButton buttonText="Warning" color="warning"></SimpleUiButton>
      <SimpleUiButton buttonText="Danger" color="danger"></SimpleUiButton>
    </div>
  </div>
</template> `

const borderedExample = `<template lang="html">
  <div>
      <SimpleUiIcon icon="home" bordered></SimpleUiIcon>
      <SimpleUiIcon icon="home" color="teal" bordered></SimpleUiIcon>
      <SimpleUiIcon icon="home" color="black" bordered filled></SimpleUiIcon>
      <SimpleUiIcon icon="home" color="teal" bordered filled></SimpleUiIcon>
    </div>
  </div>
</template>`

const coloredExample = `<template lang="html">
  <div>
    <SimpleUiIcon icon="home" color="red" ></SimpleUiIcon>
    <SimpleUiIcon icon="home" color="orange"></SimpleUiIcon>
    <SimpleUiIcon icon="home" color="yellow"></SimpleUiIcon>
    <SimpleUiIcon icon="home" color="green" ></SimpleUiIcon>
    <SimpleUiIcon icon="home" color="teal" ></SimpleUiIcon>
    <SimpleUiIcon icon="home" color="blue" ></SimpleUiIcon>
    <SimpleUiIcon icon="home" color="violet"></SimpleUiIcon>
    <SimpleUiIcon icon="home" color="purple"></SimpleUiIcon>
    <SimpleUiIcon icon="home" color="pink" ></SimpleUiIcon>
    <SimpleUiIcon icon="home" color="brown" ></SimpleUiIcon>
    <SimpleUiIcon icon="home" color="grey" ></SimpleUiIcon>
    <SimpleUiIcon icon="home" color="black"></SimpleUiIcon> 
  </div>
</template>

<script>
export default {
  name: 'ColoredExample',
};
<\/script>
`

const loadingExample = `<template lang="html">
  <div>
      <SimpleUiIcon icon="sync" loading></SimpleUiIcon>
      <SimpleUiIcon icon="cog" loading></SimpleUiIcon>
      <SimpleUiIcon icon="refresh" loading></SimpleUiIcon>
      <SimpleUiIcon icon="settings" loading></SimpleUiIcon>
      <SimpleUiIcon icon="reload" loading></SimpleUiIcon>
      <SimpleUiIcon icon="snow" loading></SimpleUiIcon>
      <SimpleUiIcon icon="medical" loading></SimpleUiIcon> 
  </div>
</template>`

const colorsExample = `<template lang="html">
  <div>
    <SimpleUiIcon icon="home" color="success"></SimpleUiIcon>
    <SimpleUiIcon icon="home" color="primary"></SimpleUiIcon>
    <SimpleUiIcon icon="home" color="warning"></SimpleUiIcon>
  </div>
</template>`

const tabsBasicExample = `<template lang="html">
  <div>
    <SimpleUiTabs :names="[
      { name: 'JavaScript', label: 'О JavaScript', selected: true },
      { name: 'Vue', label: 'Про Vue' },
      { name: 'React', label: 'Про React' },
      { name: 'Angular', label: 'Про Angular' }
    ]">
      <template v-slot:JavaScript>
        JavaScript (JS) is a lightweight interpreted programming language...
      </template>
      <template v-slot:Vue>
        Vue is a JavaScript framework for building user interfaces...
      </template>
      <template v-slot:React>
        React is a free and open-source front-end JavaScript library...
      </template>
      <template v-slot:Angular>
        Angular is an open-source, JavaScript framework...
      </template>
    </SimpleUiTabs>
  </div>
</template>`

const tabsVerticalExample = `<template lang="html">
  <div>
    <SimpleUiTabs 
      :names="basic" 
      vertical 
      :animation="'horizontal'">
      <!-- tab content -->
    </SimpleUiTabs>
  </div>
</template>`

const tabsIconExample = `<template lang="html">
  <div>
    <SimpleUiTabs :names="example">
      <template v-slot:loading-icon>
        <SimpleUiIcon icon="sync" loading size="small"></SimpleUiIcon>
      </template>
      <template v-slot:settings-icon>
        <SimpleUiIcon icon="cog" size="small"></SimpleUiIcon>
      </template>
    </SimpleUiTabs>
  </div>
</template>`

const progressBasicExample = `<template lang="html">
  <div>
    <SimpleUiProgress
      :percent="52"
      slider
      unit="%"
      color="minimal"
      secondary_color="danger"
    ></SimpleUiProgress>
  </div>
</template>`

const progressCircleExample = `<template lang="html">
  <div>
    <SimpleUiProgressCircle
      :percent="55"
      color="success"
      secondary_color="minimal"
    ></SimpleUiProgressCircle>
  </div>
</template>`

const inputBasicExample = `<template lang="html">
  <div>
    <SimpleUiInput
      name="length"
      placeholder="Min length 3 & Max 6"
      label="Length"
      :validationRules="[
        { type: 'minLength', value: 3, message: 'Минимальная длинна 3' },
        { type: 'maxLength', value: 6, message: 'Максимальная длинна 6' }
      ]"
    ></SimpleUiInput>
  </div>
</template>`

const inputValidationExample = `<template lang="html">
  <div>
    <SimpleUiInput
      name="email"
      placeholder="email"
      label="email"
      :validationRules="[
        { type: 'email', message: 'Введите email' }
      ]"
    ></SimpleUiInput>
  </div>
</template>`

const inputIconExample = `<template lang="html">
  <div>
    <SimpleUiInput
      name="icons"
      placeholder="Custom icons"
      label="Icons"
      width="620px"
    >
      <template #prepend>
        <SimpleUiIcon icon="search"></SimpleUiIcon>
      </template>
      <template #append>
        <div class="button-clear">
          <SimpleUiIcon icon="trash" size="small"></SimpleUiIcon>
        </div>
      </template>
    </SimpleUiInput>
  </div>
</template>`

const checkboxBasicExample = `<template lang="html">
  <div>
    <SimpleUiCheckbox
      label="Checkbox Active"
      id="checkBoxActive"
      v-model:checked="checkBoxActive">
    </SimpleUiCheckbox>
  </div>
</template>`

const checkboxGroupExample = `<template lang="html">
  <div>
    <SimpleUiCheckboxGroup
      v-model:selected="unitSelected"
      :options="unitList"
      name="units">
    </SimpleUiCheckboxGroup>
  </div>
</template>`

const radioBasicExample = `<template lang="html">
  <div>
    <SimpleUiRadio
      label="Radio Active"
      id="Active"
      v-model:checked="checkBoxActive">
    </SimpleUiRadio>
  </div>
</template>`

const radioGroupExample = `<template lang="html">
  <div>
    <SimpleUiRadioGroup
      v-model:selected="unitSelected[0]"
      :options="unitList"
      name="units">
    </SimpleUiRadioGroup>
  </div>
</template>`

const switchBasicExample = `<template lang="html">
  <div>
    <SimpleUiSwitch
      label="Switch Active"
      id="checkBoxActive"
      v-model:checked="checkBoxActive">
    </SimpleUiSwitch>
  </div>
</template>`

const switchGroupExample = `<template lang="html">
  <div>
    <SimpleUiSwitchGroup
      v-model:selected="unitSelected"
      :options="unitList"
      name="units">
    </SimpleUiSwitchGroup>
  </div>
</template>`

const cardExample = `<template lang="html">
  <div>
    <SimpleUiCard>
      <SimpleUiCardImage src="/path/to/image.jpg" alt="Profile picture" />
      <SimpleUiCardContent>
        <SimpleUiCardHeader>John Doe</SimpleUiCardHeader>
        <SimpleUiCardDescription>
          John is a software developer living in San Francisco.
        </SimpleUiCardDescription>
      </SimpleUiCardContent>
      <SimpleUiCardContent extra>
        <SimpleUiIcon icon="user" />
        15 Friends
      </SimpleUiCardContent>
    </SimpleUiCard>
  </div>
</template>`

// Единый экспорт всех примеров
export {
  sizeCodeHtml,
  circularExample,
  borderedExample,
  coloredExample,
  loadingExample,
  emphasisExample,
  animationExample,
  isExampleButton,
  tabsBasicExample,
  tabsVerticalExample,
  tabsIconExample,
  progressBasicExample,
  progressCircleExample,
  inputBasicExample,
  inputValidationExample,
  inputIconExample,
  colorsExample,
  checkboxBasicExample,
  checkboxGroupExample,
  radioBasicExample,
  radioGroupExample,
  switchBasicExample,
  switchGroupExample,
  cardExample
}
