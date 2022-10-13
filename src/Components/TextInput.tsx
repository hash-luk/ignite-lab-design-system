import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInpoutRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800  w-full  focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}

export interface TextInputIconProps {
    children: ReactNode
}

function TextInputIcon({children} : TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
        {children}
    </Slot>
  );
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputinput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInpoutRoot,
  Input: TextInputinput,
  Icon: TextInputIcon,
};
