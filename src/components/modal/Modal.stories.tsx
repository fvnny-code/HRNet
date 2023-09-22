import type { Meta, StoryObj } from "@storybook/react"

import { Modal } from "./Modal"





const meta: Meta<typeof Modal> = {
    component: Modal,
    argTypes: {
        
    }
  };
  
  export default meta;
  type Story = StoryObj<typeof Modal>;

  export const ModalStory : Story = {
    args: {
        isShown : true,
        onHide : ()=> {},
        message : "string"
    }
  }


