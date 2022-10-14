import { Meta, StoryObj } from "@storybook/react";
import { SignIn } from "./Signin";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import {rest} from "msw"

export default {
  title: "Pages/Signin",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
        handlers: [
            rest.post("/sessions", (req,res) => {
                return res()
            })
        ]
    }
  }
} as Meta;

export const Default: StoryObj = {
    play: async({canvasElement}) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText("Digite seu email"),"email@gmail.com")

        userEvent.type(canvas.getByPlaceholderText("********"), "12345678")

        userEvent.click(canvas.getByRole("button"))

        await waitFor(() => {
            return  expect(canvas.getAllByText("Login realizado!")).toBeInTheDocument()
        })
    }
};
