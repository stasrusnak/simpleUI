<script setup>
import SimpleUiButton from "@/lib/components/SimpleUiButton.vue";
import SimpleUiSwitch from "@/lib/components/SimpleUiSwitch.vue";
import SimpleUiCodeBlock from "@/lib/components/SimpleUiCodeBlock.vue";
import SimpleUiIcon from "@/lib/components/SimpleUiIcon.vue";
import {emphasisExample, animationExample, isExampleButton, switchBasicExample, switchGroupExample} from "@/lib/utils/listOfTemplateExample.js";
import {ref} from "vue";
import SimpleUiSwitchGroup from "@/lib/components/SimpleUiSwitchGroup.vue";

const isEmphasisShow = ref(true)
const isAnimationsShow = ref(false)
const isButtonShow = ref(false)
const isSwitchBasicShow = ref(false)
const isSwitchGroupShow = ref(false)

const checkBoxActive = ref(true)
const checkBoxDisabled = ref(true)
const checkBoxDisabledCheck = ref(true)

const unitList = ref([
  {name: 'Peewee', id: 'h001'},
  {name: 'Goblin', id: 'h0g1'},
  {name: 'Spider', id: 'h045'},
  {name: 'Archer', id: 'h02p'},
])

const unitSelected = ref(['h001', 'h02p'])

</script>

<template>
  <div class="contentBlock">
    <h1>Types</h1>
    <h2>Switch Basic</h2>
    <div class="description">
      <p>A standard Switch</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isSwitchBasicShow = !isSwitchBasicShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line checkbox">
      <SimpleUiSwitch
          label="Switch Active"
          id="checkBoxActive"
          v-model:checked="checkBoxActive">
      </SimpleUiSwitch>
    </div>

    <transition name="fade">
      <SimpleUiCodeBlock :code="switchBasicExample" v-show="isSwitchBasicShow"></SimpleUiCodeBlock>
    </transition>
  </div>
  <div class="contentBlock">
    <h2>Colors</h2>
    <div class="description">
      <p>Checkboxes can be colored by using any of the builtin colors</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line checkbox color_group">
      <div class="color_group__item">
        <SimpleUiSwitch
            color="success"
            label="success"
            id="success"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="basic"
            label="basic"
            id="basic"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">
        <SimpleUiSwitch
            color="secondary"
            label="secondary"
            id="secondary"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="minimal"
            label="minimal"
            id="minimal"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">
        <SimpleUiSwitch
            color="danger"
            label="danger"
            id="danger"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="primary"
            label="primary"
            id="primary"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">
        <SimpleUiSwitch
            color="info"
            label="info"
            id="info"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="warning"
            label="warning"
            id="warning"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class=" color_group__item">
        <SimpleUiSwitch
            color="minimal_dark"
            label="minimal dark"
            id="minimal_dark"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="secondary_lite"
            label="secondary lite"
            id="secondary_lite"
            checked>
        </SimpleUiSwitch>
      </div>
    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>

    <div class="description">
      <p>You can set the primary and secondary colors, in the example <span style="color: var(--smpl-ui-danger)">red</span> and <span style="color: var(--smpl-ui-primary)">blue</span></p>

    </div>
    <SimpleUiSwitch
        class="line"
        label="Checkbox On/Off"
        id="checkBoxDisabled"
        color="primary"
        secondaryColor="danger"
        :checked="false"
      >
    </SimpleUiSwitch>
  </div>
  <div class="contentBlock">
    <h2>Styles</h2>
    <div class="description">
      <p>Allows you to change switch styles depending on your project needs.</p>
      <div class="code_button">
        <SimpleUiButton
            buttonText="View code"
            color="minimal_dark"
            @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line checkbox color_group">
      <div class="color_group__item">
        <SimpleUiSwitch
            color="success"
            animation="square"
            label="square"
            id="square"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            label="shadow"
            animation="shadow"
            id="shadow"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">
        <SimpleUiSwitch
            color="secondary"
            animation="heptagon"
            label="heptagon"
            id="heptagon"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="minimal"
            animation="shadow_style"
            label="shadow_style"
            id="shadow_style"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">
        <SimpleUiSwitch
            color="warning"
            label="oval"
            animation="oval"
            id="oval"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="info"
            label="strip"
            animation="strip"
            id="strip"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">
        <SimpleUiSwitch
            color="danger"
            animation="dashed"
            label="dashed"
            checked
            id="dashed">
        </SimpleUiSwitch>
      </div>

    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>
  <div class="contentBlock">
    <h2>Animations</h2>
    <div class="description">
      <p>Allows you to add new effects for the checkbox.</p>
      <div class="code_button">
        <SimpleUiButton
            buttonText="View code"
            color="minimal_dark"
            @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line checkbox color_group">
      <div class="color_group__item">
        <SimpleUiSwitch
            color="success"
            animation="bounce"
            label="bounce"
            id="bounce"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            label="slow"
            animation="slow"
            id="slow"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">
        <SimpleUiSwitch
            color="secondary"
            animation="fade"
            label="fade"
            id="fade"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="minimal"
            animation="shrink"
            label="shrink"
            id="shrink"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">
        <SimpleUiSwitch
            color="danger"
            animation="waves"
            label="waves"
            checked
            id="waves">
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="primary"
            animation="bounce_pulse"
            label="bounce_pulse"
            id="bounce_pulse"
            checked>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">
        <SimpleUiSwitch
            color="info"
            label="splash"
            animation="splash"
            id="splash"
            checked>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="warning"
            label="fly"
            animation="fly"
            id="fly"
            checked>
        </SimpleUiSwitch>
      </div>

    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>
  <div class="contentBlock">
    <h2>Icons</h2>
    <div class="description">
      <p>You can set the switch icon in the on and off state</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line checkbox color_group">
      <div class="color_group__item">
        <SimpleUiSwitch
            label="Process"
            id="Process"
            checked>
          <template #left-icon>
            <SimpleUiIcon icon="pause" size="small" color="black" class="icon_left"></SimpleUiIcon>
          </template>
          <template #right-icon>
            <SimpleUiIcon icon="sync" loading size="small" color="black" class="icon_right"></SimpleUiIcon>
          </template>
        </SimpleUiSwitch>

        <SimpleUiSwitch
            label="Day / Night"
            id="checkBoxActive"
            color="minimal_dark"
            secondary-color="warning"
            :checked="false">
              <template #left-icon>
                <span>☀️</span>
              </template>
              <template #right-icon>
                <span>️🌙</span>
              </template>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">
        <SimpleUiSwitch
            color="warning"
            label="oval"
            animation="oval"
            id="oval"
            checked>
          <template #left-icon>
            <span class=" oval_minus">➕</span>
          </template>
          <template #right-icon >
            <span class="oval_plus">➖</span>
          </template>
        </SimpleUiSwitch>
        <SimpleUiSwitch
            color="info"
            label="strip"
            animation="strip"
            id="strip"
            checked>
          <template #left-icon >
            <span class="strip_text strip_text__left">off</span>
          </template>
          <template #right-icon  >
            <span class="strip_text">on</span>
          </template>
        </SimpleUiSwitch>
      </div>
      <div class="color_group__item">

        <SimpleUiSwitch
            label="shadow_style"
            animation="shadow_style"
            id="shadow_style"
            checked>
          <template #left-icon>
            <SimpleUiIcon icon="settings" size="small" color="black" class="icon_left icon_left__small"></SimpleUiIcon>
          </template>
          <template #right-icon>
            <SimpleUiIcon icon="settings" size="small" color="black" class="icon_left__small" loading></SimpleUiIcon>
          </template>
        </SimpleUiSwitch>
      </div>
    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>
  </div>
  <div class="contentBlock">
    <h2>Checkbox Disabled</h2>
    <div class="description">
      <p>A checkbox can be disabled.</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isButtonShow = !isButtonShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>
    <div class="line checkbox">
      <SimpleUiSwitch
          label="Checkbox Disabled"
          id="checkBoxDisabled"
          :disabled="checkBoxDisabled"
          v-model:checked="checkBoxDisabledCheck">
      </SimpleUiSwitch>

    </div>
    <transition name="fade">
      <SimpleUiCodeBlock :code="isExampleButton" v-show="isButtonShow"></SimpleUiCodeBlock>
    </transition>


  </div>
  <div class="contentBlock">
    <h2>Checkbox Group</h2>
    <div class="description">
      <p>Checkboxes can be grouped</p>
      <div class="code_button">
        <SimpleUiButton buttonText="View code" color="minimal_dark" @click="isSwitchGroupShow = !isSwitchGroupShow">
          <SimpleUiIcon icon="code" size="tiny"></SimpleUiIcon>
        </SimpleUiButton>
      </div>
    </div>

    <div class="line checkbox">
      <SimpleUiSwitchGroup
          class="checkboxGroup"
          v-model:value="unitSelected"
          :options="unitList">
      </SimpleUiSwitchGroup>
    </div>
    <div v-if="unitSelected.length">
      <p>Selected Units id: {{ unitSelected }}</p>
    </div>

    <transition name="fade">
      <SimpleUiCodeBlock :code="switchGroupExample" v-show="isSwitchGroupShow"></SimpleUiCodeBlock>
    </transition>
  </div>
</template>


<style scoped lang="scss">
.icon_left{
  left: -4px;
  &__small{
    left: 0px;
    width: 18px;
  }
}
.icon_right{
  right: -3px;
}
.oval_minus{
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  position: relative;
  left: 3px;
  top: 0px;
}
.strip_text{
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  position: relative;
  color: #2C2C3B;
  left: 7px;
  &__left{
    left: -3px;
  }
}
.oval_plus{
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  position: relative;
  left: -2px;
  top: 0px;
}

.checkbox {
  flex-direction: column;
}

.color_group {
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
  max-width: 850px;

  &__item {
    display: flex;
    min-width: 170px;
    flex-direction: column;
    .switch-container{
      padding-bottom: 10px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.description {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.code_button {
  display: flex;
  margin-bottom: 1px;
}


.content_animation button {
  margin: 25px 10px 0 10px;
}

.contentBlock {
  padding-bottom: 15px;
}

p {
  font-size: 16px;
  padding-bottom: 15px;
}

.icon-home {
  width: 45px;
  height: 45px;
  display: block;
  background-image: url("../lib/resources/icons/home.svg");
  background-position: center;
  background-repeat: no-repeat;

  &__white {
    filter: invert(100%);
    -webkit-filter: invert(100%);
  }
}

</style>
