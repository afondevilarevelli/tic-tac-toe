import Logo from "../components/Logo";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center gap-16">
      <Logo />
      <div className="flex w-full max-w-[600px] flex-col gap-8 px-12">
        <button className="btn btn-primary btn-lg">Play</button>
        <button className="btn btn-secondary btn-outline">How to play?</button>
      </div>
    </div>
  );
}
