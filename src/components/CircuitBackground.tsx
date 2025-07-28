export default function CircuitBackground() {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-5"
      >
        <defs>
          <pattern
            id="circuit"
            patternUnits="userSpaceOnUse"
            width="100"
            height="100"
            className="text-primary"
          >
            <path
              d="M 50 0 V 20 H 30 V 0 H 20 V 20 H 0 V 50 H 20 V 30 H 30 V 50 H 50 V 30 H 70 V 50 H 100 V 20 H 80 V 0 H 70 V 20 H 50 M 50 100 V 80 H 30 V 100 H 20 V 80 H 0 V 50 M 50 100 H 70 V 80 H 100 V 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
}
