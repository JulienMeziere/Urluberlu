export type SoundOffProps = {
  className?: string;
};

export function SoundOff({ className }: SoundOffProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 4L9 9H5V15H9L14 20V4Z"
        stroke="white"
        strokeWidth="0.5"
        fill="none"
      />
      <line x1="16" y1="8" x2="20" y2="16" stroke="white" strokeWidth="0.5" />
      <line x1="20" y1="8" x2="16" y2="16" stroke="white" strokeWidth="0.5" />
    </svg>
  );
}
