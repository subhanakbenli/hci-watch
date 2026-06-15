type ScreenTitleProps = {
  children: React.ReactNode;
};

export function ScreenTitle({ children }: ScreenTitleProps) {
  return (
    <h2 className="text-center text-[16px] font-bold tracking-normal text-amber-400">
      {children}
    </h2>
  );
}
