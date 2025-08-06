import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      duration={2500}
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white/10 group-[.toaster]:backdrop-blur-xl group-[.toaster]:border group-[.toaster]:border-white/20 group-[.toaster]:text-gray-900 dark:group-[.toaster]:text-white group-[.toaster]:shadow-2xl group-[.toaster]:rounded-2xl group-[.toaster]:transition-all group-[.toaster]:duration-300 group-[.toaster]:ease-out hover:group-[.toaster]:bg-white/15 hover:group-[.toaster]:border-white/30 hover:group-[.toaster]:shadow-3xl hover:group-[.toaster]:scale-[1.02] active:group-[.toaster]:scale-[0.98] group-[.toaster]:bg-gradient-to-br group-[.toaster]:from-white/20 group-[.toaster]:to-white/5 dark:group-[.toaster]:from-gray-800/20 dark:group-[.toaster]:to-gray-900/5",
          description: "group-[.toast]:text-gray-700 dark:group-[.toast]:text-gray-300 group-[.toast]:opacity-90",
          actionButton:
            "group-[.toast]:bg-white/20 group-[.toast]:backdrop-blur-sm group-[.toast]:text-gray-900 dark:group-[.toast]:text-white group-[.toast]:border group-[.toast]:border-white/30 group-[.toast]:rounded-lg hover:group-[.toast]:bg-white/30",
          cancelButton:
            "group-[.toast]:bg-gray-500/20 group-[.toast]:backdrop-blur-sm group-[.toast]:text-gray-700 dark:group-[.toast]:text-gray-300 group-[.toast]:border group-[.toast]:border-gray-400/20 group-[.toast]:rounded-lg hover:group-[.toast]:bg-gray-500/30",
          error:
            "group-[.toaster]:bg-gradient-to-br group-[.toaster]:from-red-500/20 group-[.toaster]:to-red-600/5 group-[.toaster]:border-red-400/30 group-[.toaster]:text-red-50 group-[.toaster]:shadow-red-500/25",
          success:
            "group-[.toaster]:bg-gradient-to-br group-[.toaster]:from-green-500/20 group-[.toaster]:to-green-600/5 group-[.toaster]:border-green-400/30 group-[.toaster]:text-green-50 group-[.toaster]:shadow-green-500/25",
          warning:
            "group-[.toaster]:bg-gradient-to-br group-[.toaster]:from-yellow-500/20 group-[.toaster]:to-yellow-600/5 group-[.toaster]:border-yellow-400/30 group-[.toaster]:text-yellow-50 group-[.toaster]:shadow-yellow-500/25",
          info:
            "group-[.toaster]:bg-gradient-to-br group-[.toaster]:from-blue-500/20 group-[.toaster]:to-blue-600/5 group-[.toaster]:border-blue-400/30 group-[.toaster]:text-blue-50 group-[.toaster]:shadow-blue-500/25",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
