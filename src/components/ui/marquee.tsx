export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative flex w-full overflow-x-hidden border-b-4 border-t-4 border-black dark:border-white bg-transparent text-black dark:text-white">
      <div className="animate-marquee whitespace-nowrap py-6">
        {items.map((item, index) => {
          return (
            <span
              key={`${item}-${index}`}
              className="mx-6 text-3xl md:text-4xl font-bold"
              style={{
                transform: index % 2 === 0 ? "rotate(-2deg)" : "rotate(2deg)",
                display: "inline-block",
              }}
            >
              {item}
            </span>
          );
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-6">
        {items.map((item, index) => {
          return (
            <span
              key={`${item}-${index}-dup`}
              className="mx-6 text-3xl md:text-4xl font-bold"
              style={{
                transform: index % 2 === 0 ? "rotate(-2deg)" : "rotate(2deg)",
                display: "inline-block",
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
