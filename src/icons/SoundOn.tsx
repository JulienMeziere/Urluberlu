export type SoundOnProps = {
  className?: string;
};

export function SoundOn({ className }: SoundOnProps) {
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
    </svg>
  );
}
