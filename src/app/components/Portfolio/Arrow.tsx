import { cn } from "@/app/helpers/cn"

type ArrowProps = { left?: boolean; onClick: () => void; className?: string }

export function Arrow({ left, onClick, className }: ArrowProps) {
  return (
    <svg
      onClick={onClick}
      className={cn(className, "w-14 cursor-pointer")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  )
}
