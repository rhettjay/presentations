import { defineContextMenuSetup } from "@slidev/types";
import { useNav } from "@slidev/client";
import { computed } from "vue";
import Icon3DCursor from "~icons/carbon/3d-cursor";

export default defineContextMenuSetup((items) => {
  const { isPresenter } = useNav();
  return computed(() => [
    ...items.value,
    {
      small: false,
      icon: Icon3DCursor, // if `small` is `true`, only the icon is shown
      label: "Custom Menu Item", // or a Vue component
      action() {
        alert("Custom Menu Item Clicked!");
      },
      disabled: isPresenter.value,
    },
  ]);
});
