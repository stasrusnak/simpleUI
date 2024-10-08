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

export {
  sizeCodeHtml,
  circularExample,
  borderedExample,
  coloredExample,
  loadingExample,
  emphasisExample,
  animationExample,
  isExampleButton
}
