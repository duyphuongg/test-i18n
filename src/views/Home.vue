<template>
  <div class="home flex items-center p-5 justify-center">
    {{ $t("app.name") }}
    <p>{{ $t("design_system.title") }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, h } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const count = ref(0);
    const obj = reactive({ foo: "test" });
    count.value++;
    obj.foo = "new";
    return {
      count,
      obj,
    };
  },
});
</script>
