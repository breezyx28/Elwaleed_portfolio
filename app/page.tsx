export default function Home() {
  return (
    <main className="md:px-[160px] px-[40px] mx-auto w-auto h-auto">
      <section
        id="hero"
        className="w-screen h-[calc(100vh-140px)] flex flex-col gap-y-[40px] justify-center"
      >
        <h1 className="text-primary text-7xl font-bold">
          Hey there, I’m Alwaleed Taha
        </h1>
        <div className="flex flex-col gap-y-[20px]">
          <p className="text-3xl text-black/80 font-[400] max-w-[50%] leading-[46px]">
            i’m a product designer, Bringing your ideas to live through the
            design{" "}
          </p>
        </div>
      </section>
    </main>
  );
}
